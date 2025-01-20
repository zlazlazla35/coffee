import { usePathname, useRouter } from 'next/navigation';

export default function ModifyDeleteBtn() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className='modify_deleteBtn'>
            <button className='modify' onClick={()=>{ router.push('/modify') }}>수정</button>
            <button className='delete'>삭제</button>
        </div>
    )
}