'use client'

import { useState } from "react"

export default function Comment() {
    let [comment, setComment] = useState();



    return (
        <div className='comment_writing'>
            <textarea className='commentWriting' name='comment' placeholder='댓글 내용을 적어주세요.' onChange={((e)=>{ setComment(e.target.value);})}></textarea>
            <button type='submit'>댓글 등록</button>
        </div>
    )
}