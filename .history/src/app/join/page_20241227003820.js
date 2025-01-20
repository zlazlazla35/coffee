'use client'

export default function join() {

    return (
        <div className="join">
            <h2 className="title">회원가입</h2>
            <input name="name" placeholder="이름을 입력해주세요" />
            <input name="email" placeholder="이메일을 입력해주세요" />
            <input type="password" name="password" placeholder="비밀번호를 입력해주세요" />
            <button type="submit" onClick={() =>
                fetch('/api/auth/join', {
                    method : 'POST',
                    body: 'test'
                }).then((res)=>{
                    return res.json()
                }).then((result)=>{
                    alert(result)
                })
            }>회원가입하기</button>
        </div>
    )
}