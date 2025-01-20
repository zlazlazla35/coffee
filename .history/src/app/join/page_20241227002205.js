export default function join() {
    return (
        <div className="join">
            <h2 className="title">회원가입</h2>
            <form method="POST" action={'/api/auth/join'}>
                <input name="name" placeholder="이름을 입력해주세요"/>
                <input name="email" placeholder="이메일을 입력해주세요"/>
                <input type="password" name="password" placeholder="비밀번호를 입력해주세요"/>
                <button type="submit">회원가입하기</button>
            </form>
        </div>
    )
}