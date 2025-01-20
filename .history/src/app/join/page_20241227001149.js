export default function join() {
    return (
        <div className="join">
            <h2 className="title">회원가입</h2>
            <form method="POST" action={'/api/auth/join'}>
                <input  name="name" placeholder="이름을 입력해주세요"/>
            </form>
        </div>
    )
}