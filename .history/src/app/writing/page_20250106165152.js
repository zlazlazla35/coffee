'use client'

import { useState } from "react"




export default function Writing() {
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    let [date, setDate] = useState('');
    let [time, setTime] = useState('');
    let [keyword, setKeyword] = useState('');
    let [category, setCategory] = useState('');

    return (
        <div className="join">
            <h2 className="title">글쓰기</h2>
            <input name="name" placeholder="제목을 입력해주세요." onChange={(e) => {
                setTitle(e.target.value);
            }} />
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
            <textarea placeholder="고민을 자유롭게 작성해주세요."/>
            <input placeholder="#키워드를 입력해주세요 예) #이직 #회사"/>
            <button type="submit">등록</button>
        </div>
    )
}