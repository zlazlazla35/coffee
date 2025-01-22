import { connectDB } from "../../../utill/database";

export default async function CommentLenth() {
    const client = await connectDB;
    const db = client.db('coffee');
    const result = await db.collection('comment').find().toArray();
    const listResult = await db.collection('list').find().toArray();
    console.log(listResult.lenth)

    return (
        <div>
            test
        </div>
    )
}