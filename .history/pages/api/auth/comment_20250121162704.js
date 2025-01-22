import { connectDB } from "../../../utill/database";

export default async function handler(req, res){
    if(req.method == 'POST'){
        req.body = JSON.parse(req.body);
        if(req.body.comment == ''){
            res.status(500).json('이미 가입되어있는 이름입니다.');
        }

        // const client = await connectDB;
        // const db = client.db("coffee")
    
        // let result = await db.collection('comment').insertOne(request.body);



    }
}