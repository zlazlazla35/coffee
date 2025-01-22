import { connectDB } from "../../../utill/database";

export default async function CommentLenth({listUlr}) {
    const client = await connectDB;
    const db = client.db('coffee');
    const result = await db.collection('comment').find().toArray();
    console.log(listUlr)

    return (
        <div>
            test
        </div>
    )
}