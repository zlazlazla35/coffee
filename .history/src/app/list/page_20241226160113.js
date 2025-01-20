'use client'
import { useState } from "react"

export default function List(){
    let [tagList, setTagList] = useState([
        {
            tag : '☕전체',
            active : true
        },
        {
            tag : '💼직장',
            active : false
        },
        {
            tag : '❤️연애',
            active : false
        },
        {
            tag : '🛣️취업 / 진로',
            active : false
        },
        {
            tag : '🏠가족',
            active : false
        },
        {
            tag : '👰결혼 / 육아',
            active : false
        },
        {
            tag : '👯친구',
            active : false
        },
        {
            tag : '✍️학업/고시',
            active : false
        },
        {
            tag : '🚫중독',
            active : false
        },
        {
            tag : '💰사업 / 금전',
            active : false
        },
        {
            tag : '💉질병 / 질환',
            active : false
        }
    ]);
    let [test, setTest] = useState(false)


    return(
        <div className="liset_page">
            <div className="top_border">
            ☕서로 따듯한 이야기 부탁드립니다.☕
            </div>
            <div className="tag">
                <ul className="tag_list">
                    <li className="on">☕전체</li>
                    {/* <li className="on">☕전체</li>
                    <li>💼직장</li>
                    <li>❤️연애</li>
                    <li>🛣️취업/진로</li>
                    <li>🏠가족</li>
                    <li>👰결혼 / 육아</li>
                    <li>👯친구</li>
                    <li>✍️학업/고시</li>
                    <li>🚫중독</li>
                    <li>💰사업 / 금전</li>
                    <li>💉질병 / 질환</li> */}
                </ul>
            </div>
            <button>선택 초기화</button>

        </div>
    )
}