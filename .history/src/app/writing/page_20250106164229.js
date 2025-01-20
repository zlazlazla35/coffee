'use client'


export default function Writing() {
    return (
        <div className="join">
            <h2 className="title">글쓰기</h2>
            <input name="name" placeholder="제목을 입력해주세요." onChange={(e) => {}} />
            <select>
                <option>직장</option>
                <option>연애</option>
                <option>취업/진로</option>
                <option>가족</option>
                <option>결혼/육아</option>
                <option>친구</option>
                <option>학업/고시</option>
                <option>중독</option>
                <option>사업/금전</option>
                <option>질병/질환</option>
            </select>
            <button type="submit">회원가입하기</button>
        </div>
    )
}