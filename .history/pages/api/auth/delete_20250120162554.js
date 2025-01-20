import { ObjectId } from "mongodb";

export default async function handler(req, res) {

    if (req.method = 'DELETE') {
        const client = await connectDB;
        const db = client.db("coffee")

        let result = await db.collection('list').deleteOne({_id : new ObjectId(req.body)});
        res.status(200).json('삭제가 완료되었습니다.')
        res.redirect(302, '/list')
    }

}




//삭제버튼은 누르면 삭제하시겠습니까? 창 띄우기
// 삭제하기를 누르면 지우려고자 하는 id 내용 가져와서 찾은 후 삭제해주기