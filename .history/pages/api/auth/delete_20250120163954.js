import { ObjectId } from "mongodb";
import { connectDB } from "../../../utill/database";

export default async function handler(req, res) {

    if (req.method = 'DELETE') {
        // const client = await connectDB;
        // const db = client.db("coffee")

        // let result = await db.collection('list').deleteOne({_id : new ObjectId(req.body)});
        // res.redirect(302, '/list')

        const listDelete = confirm("삭제하시겠습니까?");


    }

}




//삭제버튼은 누르면 삭제하시겠습니까? 창 띄우기
// 삭제하기를 누르면 지우려고자 하는 id 내용 가져와서 찾은 후 삭제해주기