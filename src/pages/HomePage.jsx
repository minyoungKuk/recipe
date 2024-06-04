import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // 레시피 작성 페이지로 이동
  const goToPostWritingPage = () => navigate("/write");

  const goToPostDetailPage = () => navigate(`/post/12345678`);

  return (
    <div>
      <h1>HomePage - UI 디자인 필요! (현재 임시 코드)</h1>
      <button onClick={goToPostWritingPage}>레시피 작성</button>
      <button onClick={goToPostDetailPage}>상세 페이지로 이동</button>
    </div>
  );
};

export default HomePage;
