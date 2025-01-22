import { connectDB } from "../../../utill/database";

export default async function handler(req, res){
    if(req.method == 'POST'){
        
        req.body = JSON.parse(req.body)

        if(req.body.comment == ''){
            return res.status(500).json('댓글 내용을 입력해주세요.');
        }

        const client = await connectDB;
        const db = client.db("coffee");
        let result = await db.collection('comment').insertOne(req.body);
        return res.status(500).json('댓글 등록이 완료되었습니다.');
    }
}