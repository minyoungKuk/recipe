import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import Button from "../components/Button";

const PostDetailPage = () => {
  const { postId } = useParams();

  const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts.posts);
  // console.log(posts);
  // const detailPost = posts.find((post) => post.id === postId);
  // console.log(detailPost);
  // const {
  //   created_at,
  //   nickname,
  //   recipe_title,
  //   recipe_intro,
  //   recipe_ingredient,
  //   recipe_order,
  //   total_likes,
  //   recipe_image_url,
  // } = detailPost;

  const recipe_title = "떡볶이";
  const total_likes = 7;
  const nickname = "르탄이";
  const created_at = "2024.6.3";
  const recipe_image_url =
    "https://recipe1.ezmember.co.kr/cache/recipe/2023/06/29/a1a5a04e39879f1033ae07367dfee5251.jpg";
  const recipe_intro = "떡볶이 소개입니다!!! 맛있는 떡볶이!!";
  const recipe_ingredient = "떡, 어묵, 고추장";
  const recipe_order = `1. 떡 불리기 2. 끓이기`;

  return (
    <main className="main">
      <BackButton />
      <div className="wrapper">
        <TitleDiv>
          <h1>{recipe_title}</h1>
          <span>{total_likes} ❤️</span>
        </TitleDiv>
        <WriterSpan>
          by {nickname}. {created_at}
        </WriterSpan>
        <FoodImage src={recipe_image_url} />
        <Part>
          <b id="intro">{recipe_intro}</b>
        </Part>
        <Part>
          <b>레시피 재료</b>
          <p>{recipe_ingredient}</p>
        </Part>
        <Part>
          <b>레시피 순서</b>
          <p>{recipe_order}</p>
        </Part>
        <EditButtonDiv>
          <Button color="#FE9F4D">수정</Button>
          <Button color="#FE9F4D">삭제</Button>
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
