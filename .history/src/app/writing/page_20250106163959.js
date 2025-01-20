'use client'


export default function Writing() {
    return (
        <div className="join">
            <h2 className="title">글쓰기</h2>
            <input name="name" placeholder="제목을 입력해주세요." onChange={(e) => {}} />

            <input type="password" name="p  assword" placeholder="비밀번호를 입력해주세요" onChange={(e) => {

            }} />
            <button type="submit">회원가입하기</button>
        </div>
    )
}