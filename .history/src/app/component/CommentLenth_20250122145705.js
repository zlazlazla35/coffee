import { connectDB } from "../../../utill/database";

export default async function CommentLenth() {
    const client = await connectDB;
    const db = client.db('coffee');
    const result = await db.collection('comment').find().toArray();
    console.log(result)

    return (
        <div>
            test
        </div>
    )
}