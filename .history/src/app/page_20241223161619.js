import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <div className="main">

      <div className="nav_bar">
        <div className="nav_bar_top">
          <Link href={'/'}>로고</Link>
          <div className="userBox">
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </div>
        </div>
      </div>
    </div>
  );
}
