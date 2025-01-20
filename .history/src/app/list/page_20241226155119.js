'use client'
import { useState } from "react"

export default function List(){


    return(
        <div className="liset_page">
            <div className="top_border">
            ☕서로 따듯한 이야기 부탁드립니다.☕
            </div>
            <div className="tag">
                <ul className="tag_list">
                    <li className="on">☕전체</li>
                    <li>💼직장</li>
                    <li>❤️연애</li>
                    <li>🛣️취업/진로</li>
                    <li>🏠가족</li>
                    <li>👰결혼 / 육아</li>
                    <li>👯친구</li>
                    <li>✍️학업/고시</li>
                    <li>🚫중독</li>
                    <li>💰사업 / 금전</li>
                    <li>💉질병 / 질환</li>
                </ul>
            </div>
            <button>선택 초기화</button>

        </div>
    )
}