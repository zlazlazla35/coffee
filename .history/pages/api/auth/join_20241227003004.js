import { connectDB } from "../../../utill/database";

export default async function handler(req, res){

    if(req.method == 'POST'){
        // let db = (await connectDB).db('coffee');
        // await db.collection('user_cred').insertOne(req.body);
        // console.log(req.body)
        // res.status(200).json('완료')
        if(req.body.name == ''){
            res.status(500).json('이름을 입력해주세요')
        }
    }
}