'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function BackBtn() {
    return (
        <div className="backBtn">
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
    )
}