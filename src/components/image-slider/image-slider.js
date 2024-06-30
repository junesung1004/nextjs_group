"use client";

import "./image-slider.css";
import Image from "next/image";
import slide1 from "@/assets/1.jpg";
import slide2 from "@/assets/2.jpg";
import slide3 from "@/assets/3.jpg";
import slide4 from "@/assets/4.jpg";
import slide5 from "@/assets/5.jpg";
import slide6 from "@/assets/6.jpg";

import React, { useEffect, useState } from "react";

const images = [slide1, slide2, slide3, slide4, slide5, slide6];

export default function ImageSlider() {
  const [curSlideIdx, setCurSlideIdx] = useState(0);

  useEffect(() => {
    // 타이머 또는 fetch
    // useEffect : 오래걸리는 작업을 별도로 실행시키게함
    // 1.로딩시 2.언로딩시 3.갱신시
    // 1.로딩시 : 페이지가 로딩될때 한번
    // 2.언로딩시 : return에 작성
    // 3.갱신시 [] 안에 변수나 state를 넣어놓기

    //3초에 한번씩 동작하는 타이머 (state의 값을 1씩 증가시키기 0~5)

    const slideTimer = setInterval(() => {
      setCurSlideIdx((prev) => {
        return prev < images.length - 1 ? prev + 1 : 0;
      });
    }, 3000);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="slideshow">
      {images.map((el, idx) => {
        return <Image className={idx === curSlideIdx ? "active" : undefined} key={idx} src={el} alt="" />;
      })}
    </div>
  );
}
