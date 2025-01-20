'use client'

import { useEffect, useState } from "react"




export default function Writing() {
    const option = [
        {value : 0, label : '직장'},
        {value : 1, label : '연애'},
        {value : 2, label : '취업/진로'},
        {value : 3, label : '가족'},
        {value : 4, label : '결혼/육아'},
        {value : 5, label : '친구'},
        {value : 6, label : '학업/고시'},
        {value : 7, label : '중독'},
        {value : 8, label : '사업/금전'},
        {value : 9, label : '질병/질환'}
    ]

    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    let [date, setDate] = useState('');
    let [time, setTime] = useState('');
    let [category, setCategory] = useState('');
    let [keyword, setKeyword] = useState('');




    return (
        <div className="writing">
            <h2 className="title">글쓰기</h2>
            <input name="name" placeholder="제목을 입력해주세요." onChange={(e) => {
                setTitle(e.target.value);
            }} />
            <div className="select_box">
                <h2 className="select_title">카테고리를 선택해주세요.</h2>
                <ul className="category_list">
                    <li>직장</li>
                    <li>연애</li>
                    <li>취업/진로</li>
                    <li>가족</li>
                    <li>결혼/육아</li>
                    <li>친구</li>
                    <li>학업/고시</li>
                    <li>중독</li>
                    <li>사업/금전</li>
                    <li>질병/질환</li>
                </ul>
            </div>
            <textarea placeholder="고민을 자유롭게 작성해주세요."/>
            <input placeholder="#키워드를 입력해주세요 예) #이직 #회사"/>
            <button type="submit">등록</button>
        </div>
    )
}