'use client'

import { useState } from "react"

export default function Comment({ useName, urlId }) {
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    let [time, setTime] = useState('');
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
    startTimer();



    const commentInfo = {
        userName : useName,
        date : date,
        time : time,
        comment : comment,
        listId : urlId.id
    }

    return (
        <div className='comment_writing'>
            <textarea className='commentWriting' name='comment' placeholder='댓글 내용을 적어주세요.' onChange={((e) => { setComment(e.target.value); })}></textarea>
            <button type='submit' onClick={(() => {
                fetch('/api/auth/comment', {
                    method: 'POST',
                    body: JSON.stringify(commentInfo)
                })
            })}>댓글 등록</button>
        </div>
    )
}