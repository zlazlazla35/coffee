'use client'

import { useState } from "react"

//정규식 샵 쓰지말고 단어와 단어 사이 공백 검사 후 잘라서 어레이에 저장

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
    let [time, setTime] = useState('');
    let [category, setCategory] = useState('');
    let [keyword, setKeyword] = useState('');


    //현재 날짜 
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    //현재시간 가져오기
    const currentTimer = () => {
        const hours = String(today.getHours()).padStart(2, "0");
        const minutes = String(today.getMinutes()).padStart(2, "0");
        setTime(`${hours}:${minutes}  `)
    }
    const startTimer = () => {
        setInterval(currentTimer, 1000)
    }
    startTimer()



    const handleSelect = (e) => {
        setCategory(e.target.value);
    };


    const keyWordHandler = (keyword) => {


        //키워드 반점 포함되어있는지 검사 후 배열로 변환
        const keyWord_regex = /,/;
        if (keyWord_regex.test(keyword)) {
            const str = keyword;
            const noSpaces = str.replace(/\s/g, '');
            const arr = noSpaces.split(",");
            setKeyword(arr)
        } else {
            alert('예시에 맞게 작성해주세요.')
        }
    }





    return (
        <div className="writing">
            <h2 className="title">글쓰기</h2>
            <input type="text" name="name" placeholder="제목을 입력해주세요." onChange={(e) => {
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
            <textarea placeholder="고민을 자유롭게 작성해주세요." onChange={(e) => {
                setContent(e.target.value);
            }} />
            <div className="keyWord_box">
                <input type="text" placeholder="#키워드를 입력해주세요 예) 이직,회사,업무" onChange={(e) => { setKeyword(e.target.value) }} />
                <button className="keyWord_btn" type="submit" onClick={() => {
                    //#, 띄어쓰기 정규식 검사
                    keyWordHandler(keyword)
                }}>등록</button>
            </div>
            <div className="bottom_butBox">
                <button className="back">취소</button>
                <button className="complete" type="submit" onClick={() => {
                    fetch('/api/auth/writing', {
                        method: 'POST',
                        body: JSON.stringify({
                            title: title,
                            content: content,
                            date: formattedDate,
                            time: time,
                            keyword: keyword,
                            category: category
                        })
                    })
                }}>등록</button>
            </div>
        </div>
    )
}