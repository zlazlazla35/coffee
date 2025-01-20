'use client'

import { useRef, useState } from "react";

export default function modify() {

    const option = [
        { value: 0, label: '카테고리를 선택해주세요.' },
        { value: 1, label: '직장' },
        { value: 2, label: '연애' },
        { value: 3, label: '취업/진로' },
        { value: 4, label: '가족' },
        { value: 5, label: '결혼/육아' },
        { value: 6, label: '친구' },
        { value: 7, label: '학업/고시' },
        { value: 8, label: '중독' },
        { value: 9, label: '사업/금전' },
        { value: 10, label: '질병/질환' }
    ]


    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    let [time, setTime] = useState('');
    let [category, setCategory] = useState('');
    let [keyword, setKeyword] = useState('');
    let [keyword2, setKeyword2] = useState([]);

    const tagText = useRef();


    //카테고리 셀렉값 가져오기
    const handleSelect = (e) => {
        setCategory(e.target.value);
    };


    //키워드 반점 포함되어있는지 검사 후 배열로 변환
    const keyWordHandler = (keyword) => {
        const keyWord_regex = /,/;


        const str = keyword;
        const noSpaces = str.replace(/\s/g, '');
        const arr = noSpaces.split(",");

        //배열 렝스가 한개 이상인경우는 
        if (arr.length > 1) {
            if (keyWord_regex.test(keyword)) {
                setKeyword2(arr)
            }
        } else {
            setKeyword2(arr)
        }

        //키워드 내용 아무것도 적지 않았을때
        if (tagText.current.value == '') {
            alert('키워드 내용을 적어주세요.');
            tagText.current.value = null;
        }

        tagText.current.value = null;
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
                <input type="text" placeholder="#키워드를 입력해주세요 예) 이직,회사,업무" onChange={(e) => { setKeyword(e.target.value) }} ref={tagText} />
                <button className="keyWord_btn" type="submit" onClick={() => {
                    keyWordHandler(keyword);
                }}>등록</button>
            </div>
            {
                keyword2.length > 0
                    ? <ul className="keyWord_tag">
                        {
                            keyword2.map((tag, i) => {
                                return (
                                    <li key={i} onClick={() => {
                                        let copy = [...keyword2]
                                        copy.splice(i, 1);
                                        setKeyword2(copy)
                                    }}>{tag} <FontAwesomeIcon icon={faXmark} /></li>
                                )
                            })
                        }
                    </ul>
                    : null
            }
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
                            keyword: keyword2,
                            category: category
                        })
                    }).then((r) => {
                        if (r.status == 200) {
                            router.push('/list');
                            return r.json();
                        }
                    }).then((result) => {
                        alert(result)
                    })
                }}>등록</button>
            </div>
        </div>
    )
}