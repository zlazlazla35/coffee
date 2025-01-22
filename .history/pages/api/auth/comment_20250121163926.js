import { connectDB } from "../../../utill/database";

export default async function handler(req, res){
    if(req.method == 'POST'){



        // const client = await connectDB;
        // const db = client.db("coffee")
    
        // let result = await db.collection('comment').insertOne(request.body);


        console.log(req.body)
    }
}