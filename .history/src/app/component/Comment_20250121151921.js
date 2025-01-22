'use client'

import { useState } from "react"

export default function Comment({ useName }) {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    let [comment, setComment] = useState();


    console.log(year + '/' + month + '/' + date);



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