import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";
import { connectDB } from "../../../utill/database";

export default async function(req, res){
    // 각 컨텐츠 내용 빈값인지 확인 후 db에 저장
    // 현재 로그인 되어있는 유저 아이디 가져오기



    if(req.method == 'POST'){

        req.body = JSON.parse(req.body);
        const loginData = await getServerSession(req, res, authOptions);

        const client = await connectDB;
        const db = client.db("coffee")
    



        if(req.body.title == ''){
            res.status(500).json('제목을 입력해주세요.');
        }if(req.body.content == ''){
            res.status(500).json('고민 내용을 적어주세요.');
        }if(req.body.category == ''){
            res.status(500).json('카테고리를 선택해주세요.')
        }else{
            let result = await db.collection('list').insertOne({
                userId : loginData.user.name,
                title : req.body.title,
                content: req.body.content,
                date: req.body.date,
                time: req.body.time,
                keyword: req.body.keyword,
                category: req.body.category
            });
        }




    }







}