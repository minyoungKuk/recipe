import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import ListCard from "../components/ListCard";
import usePosts from "../hooks/usePosts";

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

const StRecipeList = styled.ul`
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  margin: 0 auto;
  padding: 20px 40px;
  justify-content: space-between;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const goToPostWritingPage = () => {
    navigate("/write");
  };

  const [activeTab, setActiveTab] = useState("popular");

  const renderCards = () => {
    const { posts } = usePosts();
    if (!posts) return null;

    switch (activeTab) {
      case "popular": // 인기순
        const sortedPostsByPopular = [...posts].sort(
          (a, b) => b.total_likes - a.total_likes
        );
        return sortedPostsByPopular.map((post) => (
          <ListCard key={post.id} post={post} />
        ));
      case "latest": // 최신순
        const sortedPostsBtDate = [...posts].sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        console.log(sortedPostsBtDate);
        return sortedPostsBtDate.map((post) => (
          <ListCard key={post.id} post={post} />
        ));
      case "favorites": // 내가 좋아요한 레시피
        return posts.map((post) => <ListCard key={post.id} post={post} />);
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
            내가 좋아요한 레시피
          </Tab>
        </Tabs>
        <ButtonWrapper>
          <Button color="#FE9F4D" size="small" onClick={goToPostWritingPage}>
            레시피 작성
          </Button>
        </ButtonWrapper>
      </HeaderSection>
      <StRecipeList>{renderCards()}</StRecipeList>
    </MainContainer>
  );
};

export default HomePage;
