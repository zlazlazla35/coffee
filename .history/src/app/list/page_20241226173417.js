'use client'
import { useState } from "react"

export default function List() {
    let [tagList, setTagList] = useState(['☕전체','💼직장', '❤️연애', '🛣️취업/진로', '🏠가족', '👰결혼 / 육아', '👯친구', '✍️학업/고시', '🚫중독', '💰사업 / 금전', '💉질병 / 질환']);
    let [tagActive, setTagActive] = useState([true, false, false, false, false, false, false, false, false, false, false])







    return (
        <div className="liset_page">
            <div className="top_border">
                ☕서로 따듯한 이야기 부탁드립니다.☕
            </div>
            <div className="tag">
                <ul className="tag_list">
                    {
                        tagList.map((item, i)=>{
                            
                            return(
                                <li className={tagActive[i] == true ? 'on' : null} key={i} onClick={(e)=>{
                                    let copy = [...tagActive];
                                    let copy2 = [...tagActive]
                                    
                                    if(copy[i] == false){
                                        copy[i] = true;
                                        setTagActive(copy);
                                    }else{
                                        copy[i] = false;
                                        setTagActive(copy);
                                    }

                                    if(e.target.innerHTML !== '☕전체'){
                                        copy[0] = false;
                                        setTagActive(copy);
                                    }else{
                                        copy[i] = false;
                                        copy[0] = true;
                                        console.log(copy)

                                    }

                                }} >{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <button>선택 초기화</button>
        </div>
    )
}

// 