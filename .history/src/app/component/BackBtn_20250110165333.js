'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { usePathname, useRouter } from 'next/navigation';

export default function BackBtn() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="backBtn" onClick={()=>{ router.back()}}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
    )
}