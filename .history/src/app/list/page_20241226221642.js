
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
            <div className="list_card">
                <div className="list_card_top">
                    <span className="title">친구</span>
                    <div className="bookIcon">
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                </div>
                <div className="userText">
                    <h2 className="userTitle">친구가 카톡 보내놓고 삭제했는데 삐진걸까여</h2>
                    <span className="userId">도끼갱</span>
                    <div className="text">
                        일단 상황을 대충 설명하자면,
                        얼마전에 친구들이 다같이 여행가자고 했는데 저는 취업 준비랑 여러모로 바빠서 못갈 것 같다고 말해놓은 상태입니다!
                        그런데 갑자기 부재중 전화가 와있어서 왜 전화했냐구 톡으로 물어보니 시간되면 밥 같이 먹을까 싶어서 했다고 하더라구요
                        근데 친구들 중에 사소한 거에 삐지는 성격인 애들이 몇명있어서 만날 때마다 말 한마디 한마디를 신경써서 해야했는데 암튼 스트레스 받는 일이 너무너무 많았어요
                        그래서 딱히 만나고 싶지 않아서 오늘은 일이 있어서 안될 것 같고 담에 같이 먹자구 톡 남겼는데
                        친구가 뭘 보내놓고 삭제해서 ’삭제된 메세지입니다‘ 이것만 채팅방에 있고 아무런 말도 없는데
                        제가 안 만나고 싶어하는 것 같아서 좀 기분이 상한걸까요?
                        너무 찝찝해요 앞으로 만날 일 없으면 이렇게까지 신경 안 쓸텐데
                        졸업식 때 얼굴 봐야하는데 또 삐졌으면 어쩌지ㅜ너무 걱정돼요..
                    </div>
                </div>
                <div className="list_card_bottom">
                    <ul className="tag">
                        <li>#친구</li>
                        <li>#불안</li>
                        <li>#친구관계</li>
                    </ul>
                    <div className="comment">
                        <FontAwesomeIcon icon={faCommentDots} />1
                    </div>
                </div>
            </div>
        </div>
    )
}

