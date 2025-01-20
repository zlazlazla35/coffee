export default function join() {
    return (
        <div className="join">
            <h2 className="title">회원가입</h2>
            <form method="POST" action={'/api/auth/join'}>

            </form>
        </div>
    )
}