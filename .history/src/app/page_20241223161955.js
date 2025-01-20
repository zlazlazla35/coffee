import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <div className="main">

      <div className="nav_bar">
        <div className="nav_bar_top">
          <Link href={'/'}>로고</Link>
          <div className="userBox">
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button>
            <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
        </div>
        <div className="nav_bar_bottom">
          <ul className="nav_list">
            <li>
              <Link href={'/'}>홈</Link>
            </li>
            <li>
              <Link href={'/'}>고민 게시판</Link>
            </li>
            <li>
              <Link href={'/'}>글쓰기</Link>
            </li>
            <li>
              <Link href={'/'}>정보 공유</Link>
            </li>
            <li>
              <Link href={'/'}>커피 리포트</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
