'use client'
import { useState } from "react"

export default function List() {
    let [tagList, setTagList] = useState(['☕전체','💼직장', '❤️연애', '🛣️취업/진로', '🏠가족', '👰결혼 / 육아', '👯친구', '✍️학업/고시', '🚫중독', '💰사업 / 금전', '💉질병 / 질환']);
    let [tagActive, setTagActive] = useState([true, false, false, false, false, false, false, false, false, false, false])
    let list = document.querySelectorAll('.liset_page .tag .tag_list li')






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
                                // <li className={tagActive[i] == true ? 'on' : null} key={i} onClick={(e)=>{
                                //     let copy = [...tagActive];
                                    
                                //     if(copy[i] == false){
                                //         copy[i] = true;
                                //         setTagActive(copy);
                                //     }else{
                                //         copy[i] = false;
                                //         setTagActive(copy);
                                //     }

                                //     if(e.target.innerHTML !== '☕전체'){
                                //         copy[0] = false;
                                //         setTagActive(copy);
                                //     }
                                // }} >{item}</li>
                                <li key={i} onClick={(e)=>{ 


                                    if(e.target.className == 'on'){
                                        e.target.classList.remove('on');
                                    }else{
                                        e.target.classList.add('on');
                                    }

                                    if(e.target.innerHTML == '☕전체'){
                                        console.log(list)
                                    }


                                }}>{item}</li>
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