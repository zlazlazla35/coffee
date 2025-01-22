'use client'

import { useState } from "react"

export default function Comment({useName}) {
    let [comment, setComment] = useState();

    console.log(useName)
    
    return (
        <div className='comment_writing'>
            <textarea className='commentWriting' name='comment' placeholder='댓글 내용을 적어주세요.' onChange={((e)=>{ setComment(e.target.value);})}></textarea>
            <button type='submit' onClick={(()=>{
                fetch('/api/auth/comment', {
                    method : 'POST',
                    body : JSON.stringify(comment)
                }).then((r)=>{
                    if(r.status == 200){
                        return r.json();
                    }
                }).then((result)=>{
                    console.log(result);
                })
            })}>댓글 등록</button>
        </div>
    )
}