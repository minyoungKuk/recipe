import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import ListCard from "../components/ListCard";
import usePosts from "../hooks/usePosts";
import { openModal } from "../redux/slices/modal.slice";

const MainContainer = styled.main`
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Tab = styled.button`
  font-size: 20px;
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => (props.$active ? "2px solid #FE9F4D" : "none")};
  color: ${(props) => (props.$active ? "#FE9F4D" : "#000")};

  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImageSliderWrapper = styled.div`
  width: 1080px;

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  margin: 0 10px;
`;

const StRecipeList = styled.ul`
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  margin: 0 auto;
  padding: 20px 40px;
  gap: 25px;
  border-top: 1px solid #fecca0;
`;

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // 로그인 상태일 시 작성 페이지로 이동
  const goToPostWritingPage = () => {
    if (isLoggedIn) navigate("/write");
    else {
      dispatch(
        openModal({
          modalType: "alert",
          modalProps: { message: "로그인 후 이용해 주세요" },
        })
      );
    }
  };

  const [activeTab, setActiveTab] = useState("popular");

  const image = "public/images/image3.jpg";

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
        const sortedPostsByDate = [...posts].sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        return sortedPostsByDate.map((post) => (
          <ListCard key={post.id} post={post} />
        ));

      default:
        return null;
    }
  };

  return (
    <MainContainer>
      <div>
        <ImageSliderWrapper>
          <img src={image} />
        </ImageSliderWrapper>
        <HeaderWrapper>
          <Tabs>
            <Tab
              $active={activeTab === "popular"}
              onClick={() => setActiveTab("popular")}
            >
              인기순
            </Tab>
            <Tab
              $active={activeTab === "latest"}
              onClick={() => setActiveTab("latest")}
            >
              최신순
            </Tab>
          </Tabs>
          <ButtonWrapper>
            <Button color="#FE9F4D" size="small" onClick={goToPostWritingPage}>
              레시피 작성
            </Button>
          </ButtonWrapper>
        </HeaderWrapper>
      </div>
      <StRecipeList>{renderCards()}</StRecipeList>
    </MainContainer>
  );
};

export default HomePage;
