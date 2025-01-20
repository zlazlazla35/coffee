import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main">

      <div className="nav_bar">
        <div className="nav_bar_top">
          <Link href={'/'}>로고</Link>
          <div className="userBox">
            
          </div>
        </div>
      </div>
    </div>
  );
}
