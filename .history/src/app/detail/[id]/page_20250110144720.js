import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'

export default function Detail() {
    return (
        <div className="detail">
            <div className="detail_inner">
                <div className="backBtn">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className='contents'>
                    <div className='contents_top'>
                        <h2 className='caregory'>가족</h2>
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <h2 className='title'>유저가 적은 제목</h2>
                    <span className='userName'>오뇽뇽뇽</span>
                    <div className='dateBox'>
                        <p className='date'>2025-01-9</p>
                        <p className='date'>23:40</p>
                    </div>
                    <div className='contentText'>
                        고민내용 적혀있는곳
                    </div>
                </div>
            </div>
            <div className='comment'>
                <div className='comment_writing'>
                    <textarea></textarea>
                    <button type='submit'>댓글 등록</button>
                </div>
                <ul className='commit_list'>
                    <li>
                        <div className='commit'>
                            <div className='user_info'>
                                <div className='user_profile'>
                                    <Image src="/profile.png" alt="프로필 이미지" width={200} height={200}/>
                                </div>
                                <div className='user_id'>
                                    <h4 className='id'>유저아이디</h4>
                                    <div className='date'>
                                        <span>2024-03-12</span>
                                        <span>23:20</span>
                                    </div>
                                </div>
                                <div className='btnBox'>
                                    <button className='modify'>수정</button>
                                    <button className='delete'>삭제</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}