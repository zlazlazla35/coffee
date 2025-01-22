'use client'

import { useRef, useState } from "react"

export default function Comment({ useName, urlId }) {
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    let [time, setTime] = useState('');
    let [comment, setComment] = useState('');


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
        userName: useName,
        date: date,
        time: time,
        comment: comment,
        listId: urlId.id
    }

    let commentText = useRef(null);



    return (
        <div className='comment_writing'>
            <textarea className='commentWriting' name='comment' placeholder='댓글 내용을 적어주세요.' ref={commentText} onChange={((e) => { setComment(commentText.current.value); })}></textarea>
            <button type='submit' onClick={(() => {
                fetch('/api/auth/comment', {
                    method: 'POST',
                    body: JSON.stringify(commentInfo)
                }).then((r) => {
                    if (r.status == 200) {
                        return r.json();
                    } else {
                        return r.json();
                    }
                }).then((result) => {
                    alert(result);
                })

                commentText.current.value = null;
                console.log(commentText.current.value)
            })}>댓글 등록</button>
        </div>
    )
}