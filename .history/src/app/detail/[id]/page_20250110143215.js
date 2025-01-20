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
                    <span className='userName'>오뇽뇽뇽</span>
                    <div className='dateBox'>
                        <p className='date'>2025-01-9</p>
                        <p className='date'>23:40</p>
                    </div>
                </div>
            </div>
        </div>
    )
}