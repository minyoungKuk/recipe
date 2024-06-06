import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StRecipeItem = styled.li`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  border: 1px solid #ff9234;
  border-radius: 10px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  transition: all 0.5s;

  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
`;

const StRecipeImage = styled.div`
  width: 80%;
  height: 0;
  padding-bottom: 80%;
  background-color: #eaeaea;
  background-image: url(${(props) => props.url}); //이미지주소
  background-size: cover;
  border-radius: 12px;
  margin-top: 20px;
`;

const StRecipeName = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  padding: 10px;
  margin-top: 20px;
`;

const StRecipeDescription = styled.div`
  font-size: 1em;
  color: #666;
  padding: 20px 30px;
`;
const StRecipeDescriptionWrapper = styled.div`
  width: 100%;
  text-align: left;
`;
const StAdditionalInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: auto;
  margin-bottom: 10px;
`;
const StNickname = styled.div`
  padding-left: 30px;
`;
const StCount = styled.div`
  padding-right: 30px;

  span {
    color: red;
  }
`;

export default function ListCard({ post }) {
  const navigate = useNavigate();
  const {
    id,
    recipe_title: title,
    recipe_intro: intro,
    nickname,
    total_likes: likes,
    recipe_image_url: imgUrl,
  } = post;

  const goToDetailPage = () => navigate(`/post/${id}`);

  return (
    <StRecipeItem onClick={goToDetailPage}>
      <StRecipeImage url={imgUrl} />
      <StRecipeName>{title}</StRecipeName>
      <StRecipeDescriptionWrapper>
        <StRecipeDescription>{intro}</StRecipeDescription>
      </StRecipeDescriptionWrapper>
      <StAdditionalInfoWrapper>
        <StNickname>{nickname}</StNickname>
        <StCount>
          {likes} <span>♥</span>
        </StCount>
      </StAdditionalInfoWrapper>
    </StRecipeItem>
  );
}
