'use client'
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function List() {
    let [tagList, setTagList] = useState(['☕전체', '💼직장', '❤️연애', '🛣️취업/진로', '🏠가족', '👰결혼 / 육아', '👯친구', '✍️학업/고시', '🚫중독', '💰사업 / 금전', '💉질병 / 질환']);
    let [tagActive, setTagActive] = useState([true, false, false, false, false, false, false, false, false, false, false])
    const userMenu = useRef();
    const [isOpen, setIsOpen] = useState(false);



    const modalCloseHandler = ({ target }) => {
        if (isOpen && !userMenu.current.contains(target)) setIsOpen(false);
        console.log(userMenu.current.contains(target))
    };

    useEffect(() => {
        window.addEventListener('click', modalCloseHandler);
        return () => {
            window.removeEventListener('click', modalCloseHandler);
        };
    });





    return (
        <div className="liset_page">
            <div className="top_border">
                ☕서로 따듯한 이야기 부탁드립니다.☕
            </div>
            <div className="tag">
                <ul className="tag_list">
                    {
                        tagList.map((item, i) => {

                            return (
                                <li className={tagActive[i] == true ? 'on' : null} key={i} onClick={(e) => {
                                    let copy = [...tagActive];

                                    if (copy[i] == false) {
                                        copy[i] = true;
                                        setTagActive(copy);
                                    } else {
                                        copy[i] = false;
                                        setTagActive(copy);
                                    }

                                    if (e.target.innerHTML !== '☕전체') {
                                        copy[0] = false;
                                        setTagActive(copy);
                                    } else {
                                        let copy2 = [true, false, false, false, false, false, false, false, false, false, false];
                                        setTagActive(copy2);
                                    }
                                }} >{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="filterBox">
                <button className="tag_reset">선택 초기화</button>
                <div className="filterSelectBox" ref={userMenu} onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                    <h2 className="title">최신순<FontAwesomeIcon icon={faChevronDown} /></h2>
                    {
                        isOpen ?
                            <ul className="filterSelect">
                                <li>최신순</li>
                                <li>오래된순</li>
                                <li>인기순</li>
                            </ul>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    )
}

// 