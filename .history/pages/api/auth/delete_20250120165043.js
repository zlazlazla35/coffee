import { ObjectId } from "mongodb";
import { connectDB } from "../../../utill/database";

export default async function handler(req, res) {

    if (req.method = 'DELETE') {
        const client = await connectDB;
        const db = client.db("coffee")
        let result = await db.collection('list').deleteOne({_id : new ObjectId(req.body)});
        
        return res.status(200).json('삭제가 완료되었습니다.');
    }

}

