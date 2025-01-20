'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

export default function BackBtn() {
    const  router = useRouter()
    return (
        <div className="backBtn" onClick={()=>{ router.back()}}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
    )
}