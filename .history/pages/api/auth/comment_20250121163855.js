import { connectDB } from "../../../utill/database";

export default async function handler(req, res){
    if(req.method == 'POST'){

        if(req.body.comment == ''){
            req.body = JSON.parse(req.body);
            return res.status(500).json('댓글 내용을 입력해주세요')
        }else{
            return res.status(200).json('완료')
        }


        // const client = await connectDB;
        // const db = client.db("coffee")
    
        // let result = await db.collection('comment').insertOne(request.body);



    }
}