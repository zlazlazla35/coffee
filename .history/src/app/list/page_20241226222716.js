
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCommentDots } from '@fortawesome/free-regular-svg-icons'
import ListCard from '../component/ListCard'
import { connectDB } from '../../../utill/database';


export default async function List() {
    const client = await connectDB;
    const db = client.db('coffee')
    // 해당 collection 의 모든 데이터를 가져옴.
    const result = await db.collection('list').find().toArray()

    console.log(result)


    return (
        <div className="liset_page">
            <div className="top_border">
                ☕서로 따듯한 이야기 부탁드립니다.☕
            </div>
            <ListCard></ListCard>
            {
                result.map((item, i) => {
                    return (
                        <div className="list_card" key={i}>
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
                                        item.category.map(()=>{
                                            return(
                                                <li>test</li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="comment">
                                    <FontAwesomeIcon icon={faCommentDots} />1
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

