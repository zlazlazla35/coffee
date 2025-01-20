'use client'

export default function ListDelete({urlId}) {


    return (
        <button onClick={(()=>{ 
                fetch('/api/auth/delete', {
                    method : 'DELETE',
                    body : urlId
                }).then((r)=>{
                    if(r.status == 200){
                        return r.json();
                    }
                }).then((result)=>{
                    console.log(result)
                })

        })}>삭제</button>
    )
}

