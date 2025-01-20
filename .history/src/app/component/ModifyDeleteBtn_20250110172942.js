'use client'

import { usePathname, useRouter } from 'next/navigation';

export default function ModifyDeleteBtn() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className='btn_box'>
            <button onClick={()=>{ router.push('/modify') }}>수정</button>
            <button>삭제</button>
        </div>
    )
}