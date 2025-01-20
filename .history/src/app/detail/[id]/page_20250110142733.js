import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export default function Detail() {
    return (
        <div className="detail">
            <div className="detail_inner">
                <div className="backBtn">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            </div>
        </div>
    )
}