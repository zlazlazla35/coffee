'use client'

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function ListDelete({urlId}) {
    const pathname = usePathname();
    const router = useRouter();

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
                    router.push('/list');
                })
            }else{
                return
            }
        })}>삭제</button>
    )
}

