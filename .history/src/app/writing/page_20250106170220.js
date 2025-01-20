'use client'

import { useState } from "react"




export default function Writing() {
    const option = [
        {value : 0, label : '카테고리를 선택해주세요.'},
        {value : 1, label : '직장'},
        {value : 2, label : '연애'},
        {value : 3, label : '취업/진로'},
        {value : 4, label : '가족'},
        {value : 5, label : '결혼/육아'},
        {value : 6, label : '친구'},
        {value : 7, label : '학업/고시'},
        {value : 8, label : '중독'},
        {value : 9, label : '사업/금전'},
        {value : 10, label : '질병/질환'}
    ]

    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    let [date, setDate] = useState('');
    let [time, setTime] = useState('');
    let [keyword, setKeyword] = useState('');
    let [category, setCategory] = useState('');

    function handler(){

    }

    return (
        <div className="join">
            <h2 className="title">글쓰기</h2>
            <input name="name" placeholder="제목을 입력해주세요." onChange={(e) => {
                setTitle(e.target.value);
                console.log(title)
            }} />
            <select >
                {
                    option.map((data, i)=>{
                        return(
                            <option key={i} value={data.value}>{data.label}</option>
                        )
                    })
                }
            </select>
            <textarea placeholder="고민을 자유롭게 작성해주세요."/>
            <input placeholder="#키워드를 입력해주세요 예) #이직 #회사"/>
            <button type="submit">등록</button>
        </div>
    )
}