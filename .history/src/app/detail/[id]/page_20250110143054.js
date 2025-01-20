import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

export default function Detail() {
    return (
        <div className="detail">
            <div className="detail_inner">
                <div className="backBtn">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className='contents'>
                    <div className='contents_top'>
                        <h2 className='caregory'>가족</h2>
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <h2 className='title'>유저가 적은 제목</h2>
                </div>
            </div>
        </div>
    )
}