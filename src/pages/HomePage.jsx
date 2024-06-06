import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import ListCard from "../components/ListCard";

const MainContainer = styled.main`
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: black;
  text-align: center;
`;

const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
`;

const Tab = styled.button`
  font-size: 20px;
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => (props.active ? "2px solid #FE9F4D" : "none")};
  color: ${(props) => (props.active ? "#FE9F4D" : "#000")};

  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const goToPostWritingPage = () => navigate("/write");

  const [activeTab, setActiveTab] = useState("popular");

  const popularRecipes = [
    {
      image: "",
      name: "떡볶이",
      description: "떡볶이 만드는 방법입니다.",
    },
    {
      image: "",
      name: "타코야끼",
      description: "타코야끼 만드는 방법입니다.",
    },
    {
      image: "",
      name: "피자",
      description: "피자 만드는 방법입니다.",
    },
    {
      image: "",
      name: "꿀떡",
      description: "꿀떡 만드는 방법입니다.",
    },
  ];

  const latestRecipes = [
    {
      image: "",
      name: "타코야끼",
      description: "타코야끼 만드는 방법입니다.",
    },
  ];

  const favoriteRecipes = [
    {
      image: "",
      name: "떡볶이",
      description: "떡볶이 만드는 방법입니다.",
    },
  ];

  const renderCards = () => {
    switch (activeTab) {
      case "popular":
        return <ListCard recipes={popularRecipes} />;
      case "latest":
        return <ListCard recipes={latestRecipes} />;
      case "favorites":
        return <ListCard recipes={favoriteRecipes} />;
      default:
        return null;
    }
  };

  return (
    <MainContainer>
      <ImagePlaceholder>
        <div>오늘 뭐 먹지?</div>
        <div>레시피를 공유해 보세요!!</div>
      </ImagePlaceholder>
      <HeaderSection>
        <Tabs>
          <Tab
            active={activeTab === "popular"}
            onClick={() => setActiveTab("popular")}
          >
            인기순
          </Tab>
          <Tab
            active={activeTab === "latest"}
            onClick={() => setActiveTab("latest")}
          >
            최신순
          </Tab>
          <Tab
            active={activeTab === "favorites"}
            onClick={() => setActiveTab("favorites")}
          >
            내가 찜한 목록
          </Tab>
        </Tabs>
        <ButtonWrapper>
          <Button color="#FE9F4D" size="small" onClick={goToPostWritingPage}>
            레시피 작성
          </Button>
        </ButtonWrapper>
      </HeaderSection>
      {renderCards()}
    </MainContainer>
  );
};

export default HomePage;
