'use client'

export default function ListDelete() {
    return (
        <button onClick={(()=>{ 
            const listDelete = confirm("삭제하시겠습니까?");
            console.log(listDelete)
        })}>삭제</button>
    )
}

//삭제버튼은 누르면 삭제하시겠습니까? 창 띄우기
// 삭제하기를 누르면 지우려고자 하는 id 내용 가져와서 찾은 후 삭제해주기