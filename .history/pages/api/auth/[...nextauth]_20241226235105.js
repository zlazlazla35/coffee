import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { connectDB } from "../../../utill/database";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23liQhKFsCYfEF01pm',
      clientSecret: '1b2a947c09b799f2f4cdc959298391cf7b81e72f',
    }),
  ],
  secret : 'aabbcc2376',
  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 