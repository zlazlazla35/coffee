import { connectDB } from "../../../../utill/database";

export default async function modify() {

    // const client = await connectDB;
    // const db = client.db("coffee")

    // let result = await db.collection('list').findOne({ name: req.body.name });





    return (
        <form action={'/api/auth/modify'} method="POST">
            <div className="writing modify">
                <h2 className="title">글수정하기</h2>
                <input type="text" name="name" placeholder="제목을 입력해주세요." />
                <textarea placeholder="고민을 자유롭게 작성해주세요." name="content" />
                <div className="bottom_butBox">
                    <button className="back">취소</button>
                    <button className="complete" type="submit">등록</button>
                </div>
            </div>
        </form>
    )
}