import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import NavMenu from "./component/NavMenu";
import LoginButton from "./LoginButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="nav_bar">
          <div className="nav_bar_top">
            <Link className="logo" href={'/'}>로고</Link>
            {/* <LoginButton></LoginButton> */}
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
            <NavMenu></NavMenu>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
