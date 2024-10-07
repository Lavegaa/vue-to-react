"use client";

import "@/style/common.css";

const MainContent = () => {
  return (
    <div className="main_visual">
      <div className="img_box">
        <img src="/image/img_visual.jpg" alt="기묘한 이야기" />
      </div>
      <div className="text_box">
        <h2 className="title">기묘한 이야기</h2>
        <p className="desc">
          친구네 집에서 자신의 집으로 돌아가던 중 윌은 무언가 이상한 것을 보게
          되고, 윌이 있는 곳에서 가까운 정부의 비밀 실험실에서는 끔찍한 일이
          벌어진다.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
