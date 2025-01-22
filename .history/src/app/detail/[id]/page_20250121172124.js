import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'
import { connectDB } from '../../../../utill/database'
import { ObjectId } from 'mongodb'
import BackBtn from '@/app/component/BackBtn'
import ModifyDeleteBtn from '@/app/component/ModifyDeleteBtn'
import Link from 'next/link'
import ListDelete from '@/app/component/ListDelete'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../pages/api/auth/[...nextauth]'
import Comment from '@/app/component/Comment'


export default async function Detail(props) {

    let urlId = await props.params
    const client = await connectDB;
    const db = client.db("coffee");
    const session = await getServerSession(authOptions);
    let resultName = await db.collection('list').findOne({ _id: new ObjectId(urlId.id) });
    let keyWordNum = resultName.keyword;
    let useName = session;
    let commentList = await db.collection('comment').find({ listId: urlId.id }).toArray();

    console.log(commentList)
    if (session !== null) {
        useName = session.user.name;
    }

    return (
        <div className="detail">
            <div className="detail_inner">
                <BackBtn />
                <div className='contents'>
                    <div className='contents_top'>
                        <h2 className='caregory'>{resultName.category}</h2>
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <h2 className='title'>{resultName.title}</h2>
                    <div className='dateBox'>
                        <span className='userName'>{resultName.userId}</span>
                        <p className='date'>{resultName.date}</p>
                        <p className='date'>{resultName.time}</p>
                    </div>
                    <div className='contentText'>
                        {resultName.content}
                    </div>
                    {
                        keyWordNum.length > 0
                            ? <ul className='tagList'>
                                {
                                    keyWordNum.map((item, i) => {
                                        return (
                                            <li key={i}>#{item}</li>
                                        )
                                    })
                                }
                            </ul>
                            : null
                    }
                    {
                        useName == resultName.userId
                            ? <div className='btn_box'>
                                <Link href={`/modify/${urlId.id}`}>수정</Link>
                                <ListDelete urlId={urlId.id} />
                            </div>
                            : null
                    }
                </div>
            </div>
            <div className='comment'>
                <Comment useName={useName} urlId={urlId} />
                <ul className='commit_list'>
                    {/* {
                        commentList.map((data, i) => {
                            return (
                                <li key={i}>
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
                                            <div className='modify_deleteBtn'>
                                                <button className='modify'>수정</button>
                                                <button className='delete'>삭제</button>
                                            </div>
                                        </div>
                                        <div className='commit_text'>
                                            댓글 내용 적혀있는 곳
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    } */}
                </ul>
            </div>
        </div>
    )
}