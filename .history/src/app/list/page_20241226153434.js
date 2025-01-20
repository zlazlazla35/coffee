'use client'
import { useState } from "react"

export default function List(){
    let [tagList, setTagList] = useState(['전체', '💼직장', '❤️연애', '🛣️취업/진로', '🏠가족', '👰결혼 / 육아', '👯친구', '✍️학업/고시', '🚫중독', '💰사업 / 금전', '💉질병 / 질환']);



    return(
        <div className="liset_page">
            <div className="top_border">
            ☕서로 따듯한 이야기 부탁드립니다.☕
            </div>
            <div className="tag">
                <ul className="tag_list">
                    {
                        tagList.map(()=>{
                            return(
                                <li>test</li>
                            )
                        })
                    }
                </ul>
            </div>
            <button>선택 초기화</button>

        </div>
    )
}