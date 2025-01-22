export default function Comment() {
    return (
        <div className='comment_writing'>
            <textarea className='commentWriting' name='comment' placeholder='댓글 내용을 적어주세요.'></textarea>
            <button type='submit'>댓글 등록</button>
        </div>
    )
}