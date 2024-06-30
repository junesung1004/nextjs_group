import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

//metadata : <head></head> 태그에 들어갈 코드
export const metadata = {
  title: "우리 동아리",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {/* children === page.js */}
        {children}
      </body>
    </html>
  );
}

//layout.js : page.js를 감싸고 있는 html
//page.js : body태그에 작성할 코드
//global.css : layout.js에 포함된 css (모든곳에서 사용)
//page.module.css : page.js 전용 css
//favicon.ico 삭제 -> public 폴더에 이미지 넣기 -> metadata에 icons 추가
