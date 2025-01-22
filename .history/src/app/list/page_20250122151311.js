
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCommentDots } from '@fortawesome/free-regular-svg-icons'
import ListCard from '../component/ListCard'
import { connectDB } from '../../../utill/database';
import Link from 'next/link';
import { ObjectId } from 'mongodb';



export default async function List() {
    const client = await connectDB;
    const db = client.db('coffee');
    const result = await db.collection('list').find().toArray();
    // let commentList = await db.collection('comment').find({ listId: urlId.id }).toArray();
    let test = ''

    result.map((a, i)=>{
        console.log(a._id)

    })
    


    return (
        <div className="liset_page">
            <div className="top_border">
                ☕서로 따듯한 이야기 부탁드립니다.☕
            </div>
            <ListCard></ListCard>
            {
                await result.map((item, i) => {
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

