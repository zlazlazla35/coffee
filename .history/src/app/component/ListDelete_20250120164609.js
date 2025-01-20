'use client'

export default function ListDelete({urlId}) {


    return (
        <button onClick={(()=>{ 
            const listDelete = confirm("삭제하시겠습니까?");
            
            if(listDelete == true){
                fetch('/api/auth/delete', {
                    method : 'DELETE',
                    body : urlId
                }).then((r)=>{
                    if(r.status == 200){
                        return r.json();
                    }
                }).then((result)=>{
                    alert(result);
                })
            }else{
                return
            }
        })}>삭제</button>
    )
}

