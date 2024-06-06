import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import usePosts from "../hooks/usePosts";

const PostDetailPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const { posts, handleDeletePost } = usePosts();

  const detailPost = posts.find((post) => post.id === postId);
  if (!detailPost) return null;

  const {
    id,
    created_at: date,
    nickname,
    recipe_title: title,
    recipe_intro: intro,
    recipe_ingredient: ingredient,
    recipe_order: order,
    total_likes: likes,
    recipe_image_url: imageUrl,
  } = detailPost;

  const clickDeleteButton = () => {
    handleDeletePost(postId);
    navigate("/");
  };

  const goToEditPage = () => {
    navigate(`/edit/${postId}`);
  };

  return (
    <main className="main">
      <BackButton />
      <div className="wrapper">
        <TitleDiv>
          <h1>{title}</h1>
          <span>{likes} ❤️</span>
        </TitleDiv>
        <WriterSpan>{`by ${nickname}. ${date.slice(0, 10)}`}</WriterSpan>
        <FoodImage src={imageUrl} />
        <Part>
          <b id="intro">{intro}</b>
        </Part>
        <Part>
          <b>레시피 재료</b>
          <p>{ingredient}</p>
        </Part>
        <Part>
          <b>레시피 순서</b>
          <p>{order}</p>
        </Part>
        <EditButtonDiv>
          <Button color="#FE9F4D" onClick={goToEditPage}>
            수정
          </Button>
          <Button color="#FE9F4D" onClick={clickDeleteButton}>
            삭제
          </Button>
        </EditButtonDiv>
      </div>
    </main>
  );
};

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    display: block;
    font-size: 2em;
    margin-top: 0.47em;
    margin-bottom: 0.47em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  span {
    margin-left: 10px;
    font-size: 15px;
    color: red;
  }
`;

const WriterSpan = styled.span`
  display: flex;
  justify-content: end;
  color: gray;
  font-size: 15px;
  border-bottom: 3px solid #fe9234;
  padding-bottom: 10px;
  padding-right: 5px;
  word-spacing: 4px;
`;

const FoodImage = styled.img`
  display: flex;
  border-radius: 8px;
  margin: auto;
  width: 80%;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.3);
  margin-top: 30px;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  width: 640px;
  gap: 10px;

  b {
    font-weight: 500;
    font-size: 20px;
    color: #fe9f4d;
  }

  #intro {
    color: black;
    margin-top: 10px;
  }

  p {
    padding-left: 5px;
  }
`;

const EditButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export default PostDetailPage;
