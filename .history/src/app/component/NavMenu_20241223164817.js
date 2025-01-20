'use clien'

import Link from "next/link";

export default function NavMenu() {
    return (
        <ul className="nav_list">
            <li>
                <Link href={'/'}>홈</Link>
            </li>
            <li>
                <Link href={'/list'}>고민 게시판</Link>
            </li>
            <li>
                <Link href={'/writing'}>글쓰기</Link>
            </li>
            <li>
                <Link href={'/share'}>정보 공유</Link>
            </li>
            <li>
                <Link href={'/report'}>커피 리포트</Link>
            </li>
        </ul>
    )
}