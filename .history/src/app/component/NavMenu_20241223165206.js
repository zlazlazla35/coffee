'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {

    const pathname = usePathname();

    console.log(pathname)
    return (
        <ul className="nav_list">
            <li>
                <Link href={'/'}>홈</Link>
            </li>
            <li>
                <Link className={pathname == '/list'? 'active' : null} href={'/list'}>고민 게시판</Link>
            </li>
            <li>
                <Link className={pathname == '/writing'? 'active' : null} href={'/writing'}>글쓰기</Link>
            </li>
            <li>
                <Link className={pathname == '/share'? 'active' : null} href={'/share'}>정보 공유</Link>
            </li>
            <li>
                <Link className={pathname == '/report'? 'active' : null} href={'/report'}>커피 리포트</Link>
            </li>
        </ul>
    )
}