import { connectDB } from "../../../utill/database";

export default async function CommentLenth({listUlr}) {
    const client = await connectDB;
    const db = client.db('coffee');

    const listResult = await db.collection('list').find().toArray();


    console.log(listUlr)


    return (
        <div>
            test
        </div>
    )
}