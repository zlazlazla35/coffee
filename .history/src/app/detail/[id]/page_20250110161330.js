import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'
import { connectDB } from '../../../../utill/database'
import { ObjectId } from 'mongodb'

export default async function Detail(props) {

    let urlId = await props.params

    const client = await connectDB;
    const db = client.db("coffee")

    let resultName = await db.collection('list').findOne({ _id: new ObjectId(urlId.id) });

    console.log(resultName)
    return (
        <div className="detail">
            <div className="detail_inner">
                <div className="backBtn">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className='contents'>
                    <div className='contents_top'>
                        <h2 className='caregory'>{resultName.category}</h2>
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <h2 className='title'>{resultName.title}</h2>
                    <div className='dateBox'>
                        <span className='userName'>오뇽뇽뇽</span>
                        <p className='date'>2025-01-9</p>
                        <p className='date'>23:40</p>
                    </div>
                    <div className='contentText'>
                        {resultName.content}
                    </div>
                    <ul className='tagList'>
                        <li>#가족</li>
                        <li>#친구</li>
                        <li>#아무거나</li>
                    </ul>
                </div>
            </div>
            <div className='comment'>
                <div className='comment_writing'>
                    <textarea className='commentWriting'></textarea>
                    <button type='submit'>댓글 등록</button>
                </div>
                <ul className='commit_list'>
                    <li>
                        <div className='commit'>
                            <div className='user_info_box'>
                                <div className='user_info'>
                                    <div className='user_profile'>
                                        <Image src="/profile.png" alt="프로필 이미지" width={80} height={80} />
                                    </div>
                                    <div className='user_id'>
                                        <h4 className='id'>유저아이디</h4>
                                        <div className='date'>
                                            <span>2024-03-12</span>
                                            <span>23:20</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='btnBox'>
                                    <button className='modify'>수정</button>
                                    <button className='delete'>삭제</button>
                                </div>
                            </div>
                            <div className='commit_text'>
                                댓글 내용 적혀있는 곳
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='commit'>
                            <div className='user_info_box'>
                                <div className='user_info'>
                                    <div className='user_profile'>
                                        <Image src="/profile.png" alt="프로필 이미지" width={80} height={80} />
                                    </div>
                                    <div className='user_id'>
                                        <h4 className='id'>유저아이디</h4>
                                        <div className='date'>
                                            <span>2024-03-12</span>
                                            <span>23:20</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='btnBox'>
                                    <button className='modify'>수정</button>
                                    <button className='delete'>삭제</button>
                                </div>
                            </div>
                            <div className='commit_text'>
                                댓글 내용 적혀있는 곳 댓글 내용 적혀있는 곳
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='commit'>
                            <div className='user_info_box'>
                                <div className='user_info'>
                                    <div className='user_profile'>
                                        <Image src="/profile.png" alt="프로필 이미지" width={80} height={80} />
                                    </div>
                                    <div className='user_id'>
                                        <h4 className='id'>유저아이디</h4>
                                        <div className='date'>
                                            <span>2024-03-12</span>
                                            <span>23:20</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='btnBox'>
                                    <button className='modify'>수정</button>
                                    <button className='delete'>삭제</button>
                                </div>
                            </div>
                            <div className='commit_text'>
                                댓글 내용 적혀있는 곳
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}