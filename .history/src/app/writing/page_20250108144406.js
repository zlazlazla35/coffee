'use client'

import { useEffect, useState } from "react"



//하단에 등록 버튼 클릭시
//1. 제목 저장
//2. select 저장
//3. 고민 컨텐츠 저장


//키워드 input에 등록버튼 클릭시 => #이직 #회사 와 같이 샾이 붙어있는지 띄어쓰기 한번 검사 맞게 했으면 키워드 저장, 아니면 alert로 양식에 받게 적어달라고 띄어주기


export default function Writing() {
    const option = [
        { value: 0, label: '직장' },
        { value: 1, label: '연애' },
        { value: 2, label: '취업/진로' },
        { value: 3, label: '가족' },
        { value: 4, label: '결혼/육아' },
        { value: 5, label: '친구' },
        { value: 6, label: '학업/고시' },
        { value: 7, label: '중독' },
        { value: 8, label: '사업/금전' },
        { value: 9, label: '질병/질환' }
    ]

    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    let [date, setDate] = useState('');
    let [time, setTime] = useState('');
    let [category, setCategory] = useState('');
    let [keyword, setKeyword] = useState('');

    const handleSelect = (e) => {
        setCategory(e.target.value);
    };


    return (
        <div className="writing">
            <h2 className="title">글쓰기</h2>
            <input name="name" placeholder="제목을 입력해주세요." onChange={(e) => {
                setTitle(e.target.value);
            }} />
            <select onChange={handleSelect} value={category}>
                {
                    option.map((data, i) => {
                        return (
                            <option key={i} value={data.label}>{data.label}</option>
                        )
                    })
                }
            </select>
            <textarea placeholder="고민을 자유롭게 작성해주세요." />
            <div className="keyWord_box">
                <input placeholder="#키워드를 입력해주세요 예) #이직 #회사" />
                <button className="keyWord_btn" type="submit">등록</button>
            </div>
            <div className="bottom_butBox">
                <button className="back">취소</button>
                <button className="complete" type="submit">등록</button>
            </div>
        </div>
    )
}