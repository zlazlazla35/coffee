
import { connectDB } from "../../../utill/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";



export const authOptions = {


  providers: [
    GithubProvider({
      clientId: 'Ov23liQhKFsCYfEF01pm',
      clientSecret: '1b2a947c09b799f2f4cdc959298391cf7b81e72f',
    }),

    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드 
      name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
      },

      //2. 로그인요청시 실행되는코드
      //직접 DB에서 아이디,비번 비교하고 
      //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials) {
        let db = (await connectDB).db('coffee');
        let user = await db.collection('user_cred').findOne({email : credentials.email})
        if (!user) {
          console.log('가입되어있는 이메일이 없습니다.');
          return null
        }
        const pwcheck = await bcrypt.compare(credentials.password, user.password);
        if (!pwcheck) {
          console.log('비밀번호를 확인해주세요.');
          return null
        }
        return user
      }
    })
  ],

  //3. jwt 써놔야 잘됩니다 + jwt 만료일설정
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 //30일
  },


  callbacks: {
    //4. jwt 만들 때 실행되는 코드 
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user.name
        token.user.email = user.email
      }
      return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user;  
      console.log(session)
      
      return session;
    },
  },

  adapter: MongoDBAdapter(connectDB),
  secret : 'aabbcc2376',
};
export default NextAuth(authOptions); 