"use client";

import Link from "next/link";

//css 중복 방지를 위한 .module.css 파일
//.css의 네임스페이스와 비슷
import styles from "./header.module.css";

// 이미지를 사용하려면 import
import navLogo from "@/assets/logo.png"; // navLogo.src
import { usePathname } from "next/navigation";
import HeaderBackground from "./header-background";

export default function Header() {
  //현재 경로가 어딘지? ==> <link>의 색깔을 변경 (.active)
  const path = usePathname(); // url정보

  return (
    <>
      <HeaderBackground />
      <header className={styles.headerContainer}>
        <Link href={"/"}>
          <img src={navLogo.src} alt="우리동아리" />
        </Link>

        <nav>
          <ul>
            <li>
              {/* usePathname() 를 사용해서  path.startsWith("/group") 이런식으로 사용도 가능하다 */}
              <Link href={"/group"} className={path.startsWith("/group") ? styles.active : undefined}>
                동아리 게시글
              </Link>
            </li>
            <li>
              <Link href={"/about"} className={path.startsWith("/about") ? styles.active : undefined}>
                소개
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

// 이 네비게이션 헤더는 모든 최상단에 놓을거니깐
// layout.js의 {children} 위에 추가한다
