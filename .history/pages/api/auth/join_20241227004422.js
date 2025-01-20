import { connectDB } from "../../../utill/database";

export default async function handler(req, res){

    if(req.method == 'POST'){
        req.body = JSON.parse(req.body)
        // let db = (await connectDB).db('coffee');
        // await db.collection('user_cred').insertOne(req.body);
        console.log(req.body)
        // res.status(200).json('완료')

    }
}