'use client'
import { useState } from "react"

export default function List() {
    // let [tagList, setTagList] = useState(['☕전체','💼직장', '❤️연애', '🛣️취업/진로', '🏠가족', '👰결혼 / 육아', '👯친구', '✍️학업/고시', '🚫중독', '💰사업 / 금전', '💉질병 / 질환']);
    // let [tagActive, setTagActive] = useState([true, false, false, false, false, false, false, false, false, false, false])
    // let [test, setTest] = useState(false)

    let [test, setTest] = useState([
        {
            tag : '테스트1',
            active : true
        },
        {
            tag : '테스트2',
            active : false
        },
        {
            tag : '테스트3',
            active : false
        }
    ])



    return (
        <div className="liset_page">
            <div className="top_border">
                ☕서로 따듯한 이야기 부탁드립니다.☕
            </div>
            <div className="tag">
                <ul className="tag_list">
                    {
                        test.map((item, i)=>{

                            return(
                                <li className={ item.active ? 'on' : null } key={i}>{item.tag}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <button>선택 초기화</button>

        </div>
    )
}