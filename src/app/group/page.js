import Link from "next/link";
import React from "react";

export default function Group() {
  return (
    <div>
      <h1>동아리 게시글</h1>
      <p>
        <Link href={"/group/post-1"}>게시글1</Link>
      </p>
      <p>
        <Link href={"/group/post-2"}>게시글2</Link>
      </p>
    </div>
  );
}

// 리액트에서는 url변경을 위해서
// 리액트에서는 a태그를 사용하지 않고 (새로고침 방지)
// Link 컴포넌트를 이용
