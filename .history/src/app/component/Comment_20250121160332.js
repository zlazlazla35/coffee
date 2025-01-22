'use client'

import { useState } from "react"

export default function Comment({ useName, urlId }) {
    let today = new Date();
    //현재 날짜
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    //현재 시간
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분
    //댓글 내용
    let [comment, setComment] = useState();

    const formattedDate = `${year}-${month}-${date}`

    // console.log(year + '/' + month + '/' + date);
    // console.log(hours + ':' + minutes);

    console.log(formattedDate)

    // const commentInfo = {
    //     userName : useName,
    //     date :
    // }

    return (
        <div className='comment_writing'>
            <textarea className='commentWriting' name='comment' placeholder='댓글 내용을 적어주세요.' onChange={((e) => { setComment(e.target.value); })}></textarea>
            <button type='submit' onClick={(() => {
                fetch('/api/auth/comment', {
                    method: 'POST',
                    body: JSON.stringify(comment)
                }).then((r) => {
                    if (r.status == 200) {
                        return r.json();
                    }
                }).then((result) => {
                    console.log(result);
                })
            })}>댓글 등록</button>
        </div>
    )
}