
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCommentDots } from '@fortawesome/free-regular-svg-icons'
import ListCard from '../component/ListCard'
import { connectDB } from '../../../utill/database';
import Link from 'next/link';


export default async function List() {
    const client = await connectDB;
    const db = client.db('coffee');
    const result = await db.collection('list').find().toArray();



// console.log(result)


    return (
        <div className="liset_page">
            <div className="top_border">
                ☕서로 따듯한 이야기 부탁드립니다.☕
            </div>
            <ListCard></ListCard>
            {
                result.map((item, i) => {
                    let commentList =  db.collection('comment').find({ listId: item._id }).toArray();
                    console.log(commentList)
                    return (
                        <Link href={`/detail/${item._id}`} key={i}>
                            <div className="list_card" >
                                <div className="list_card_top">
                                    <span className="title">{item.category}</span>
                                    <div className="bookIcon">
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </div>
                                </div>
                                <div className="userText">
                                    <h2 className="userTitle">{item.title}</h2>
                                    <span className="userId">{item.userId}</span>
                                    <div className="text">
                                        {item.content}
                                    </div>
                                </div>
                                <div className="list_card_bottom">
                                    <ul className="tag">
                                        {
                                            item.keyword.map((a, i) => {
                                                return (
                                                    <li key={i}>#{a}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="comment">
                                        <FontAwesomeIcon icon={faCommentDots} />
                                        1
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

