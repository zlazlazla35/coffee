'use client'

import { useState } from "react"

export default function join() {
    let [userName, setUserName] = useState('');
    let [userEmail, setUserEmail] = useState('');
    let [userPaw, setUserPaw] = useState('');

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
            <div className="btnBox">
                <button className="cancel">취소</button>
                <button className="join" type="submit" onClick={() =>
                    fetch('/api/auth/join', {
                        method: 'POST',
                        body: JSON.stringify({ name: userName, email: userEmail, password: userPaw })
                    }).then((res) => {
                        return res.json()
                    }).then((result) => {
                        alert(result)
                    })
                }>회원가입하기</button>
            </div>
        </div>
    )
}