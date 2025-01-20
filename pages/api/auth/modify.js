import { ObjectId } from "mongodb";
import { connectDB } from "../../../utill/database";


export default async function handler(req, res) {

    if (req.method == 'POST') {
        if(req.body.title == ''){
            return res.status(500).json('제목을 입력해주세요.');
        }if( req.body.content == ''){
            return res.status(500).json('내용을 입력해주세요.');
        }


        req.body.id = JSON.parse(req.body.id)
        let modifyContent = {title : req.body.title, content: req.body.content}

        const client = await connectDB;
        const db = client.db("coffee")
    
        let result = await db.collection('list').updateOne({_id : new ObjectId(req.body.id)},{$set : modifyContent});
        res.redirect(302, '/list');

    }
}
