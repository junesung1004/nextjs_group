import React from "react";

export default function GroupPostPage({ params }) {
  return (
    <div>
      <h1>게시글 상세페이지</h1>

      {/* 내가 접속한 동적 url : params.폴더명 */}
      <p>{params.slug}</p>
    </div>
  );
}
