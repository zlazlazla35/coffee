export default function Writing() {
    return (
        <div className="join">
            <h2 className="title">회원가입</h2>
            <input name="name" placeholder="이름을 입력해주세요" onChange={(e) => {
                setUserName(e.target.value);
            }} />
            <input name="email" placeholder="이메일을 입력해주세요" onChange={(e) => {
                setUserEmail(e.target.value)
            }} />
            <input type="password" name="p  assword" placeholder="비밀번호를 입력해주세요" onChange={(e) => {
                setUserPaw(e.target.value)
            }} />
            <button type="submit">회원가입하기</button>
        </div>
    )
}