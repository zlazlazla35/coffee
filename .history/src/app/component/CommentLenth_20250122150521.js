import { connectDB } from "../../../utill/database";

export default async function CommentLenth() {
    const client = await connectDB;
    const db = client.db('coffee');
    const result = await db.collection('comment').find().toArray();
    const listResult = await db.collection('list').find().toArray();



    listResult.map((a, i)=>{
        console.log(a._)
    })

    return (
        <div>
            test
        </div>
    )
}