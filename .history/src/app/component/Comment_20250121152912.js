'use client'

import { useState } from "react"

export default function Comment({ useName, urlId }) {
    let today = new Date();
    //현재 날짜
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    //현재 시간
    let [time, setTime] = useState('');
    //댓글 내용
    let [comment, setComment] = useState();


    //현재시간 가져오기
    const currentTimer = () => {
        const hours = String(today.getHours()).padStart(2, "0");
        const minutes = String(today.getMinutes()).padStart(2, "0");
        setTime(`${hours}:${minutes}`)
    }

    const startTimer = () => {
        setInterval(currentTimer, 1000)
    }
    startTimer()

    // console.log(urlId.id)

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