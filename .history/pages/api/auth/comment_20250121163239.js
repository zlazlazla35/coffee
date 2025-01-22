import { connectDB } from "../../../utill/database";

export default async function handler(req, res){
    if(req.method == 'POST'){
        req.body = JSON.parse(req.body);

        return res.status(500).json('ddddd')


        // const client = await connectDB;
        // const db = client.db("coffee")
    
        // let result = await db.collection('comment').insertOne(request.body);



    }
}