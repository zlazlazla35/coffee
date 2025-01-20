'use client'
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBookmark, faRegular } from '@fortawesome/free-regular-svg-icons'


export default function List() {
    let [tagList, setTagList] = useState(['☕전체', '💼직장', '❤️연애', '🛣️취업/진로', '🏠가족', '👰결혼 / 육아', '👯친구', '✍️학업/고시', '🚫중독', '💰사업 / 금전', '💉질병 / 질환']);
    let [tagActive, setTagActive] = useState([true, false, false, false, false, false, false, false, false, false, false]);
    let [selectList, setSelectList] = useState(['최신순', '오랜된순', '인기순'])
    let [userSelect, setUserSelect] = useState('최신순')
    const userMenu = useRef();
    const [isOpen, setIsOpen] = useState(false);



    const modalCloseHandler = ({ target }) => {
        if (isOpen && !userMenu.current.contains(target)) setIsOpen(false);
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
                <button className="tag_reset" onClick={() => {
                    let copy2 = [true, false, false, false, false, false, false, false, false, false, false];
                    setTagActive(copy2);
                }}>선택 초기화</button>
                <div className="filterSelectBox" ref={userMenu} onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                    <h2 className="title">{userSelect}<FontAwesomeIcon icon={faChevronDown} /></h2>
                    {
                        isOpen ?
                            <ul className="filterSelect">
                                {
                                    selectList.map((item, i) => {
                                        return (
                                            <li key={i} onClick={(e) => {
                                                setUserSelect(e.target.innerHTML);
                                            }}>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                            :
                            null
                    }
                </div>
            </div>
            <div className="list_card">
                <div className="list_card_top">
                    <span className="title">친구</span>
                    <div>
                        <FontAwesomeIcon icon={faBookmark} size="xs" />
                    </div>
                </div>
            </div>
        </div>
    )
}

