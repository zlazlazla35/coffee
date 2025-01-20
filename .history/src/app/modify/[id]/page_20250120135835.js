export default function modify() {
    return (
        <div className="writing">
            <h2 className="title">글쓰기</h2>
            <input type="text" name="name" placeholder="제목을 입력해주세요." />
            <textarea placeholder="고민을 자유롭게 작성해주세요." />
            <div className="bottom_butBox">
                <button className="back">취소</button>
                <button className="complete" type="submit">등록</button>
            </div>
        </div>
    )
}