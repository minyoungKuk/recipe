import React from "react";
import styled from "styled-components";

const StRecipeList = styled.ul`
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  border: 1px solid black;
  margin: 0 auto;
  padding: 20px 40px;
  justify-content: space-between;
`;

const StRecipeItem = styled.li`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 10px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StRecipeImage = styled.div`
  width: 80%;
  height: 0;
  padding-bottom: 80%;
  background-color: #eaeaea;
  background-image: url("../public/images/icon/ic-back.png"); //이미지주소
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
`;

export default function ListCard() {
  return (
    <StRecipeList>
      <StRecipeItem>
        <StRecipeImage />
        <StRecipeName>레시피 이름</StRecipeName>
        <StRecipeDescriptionWrapper>
          <StRecipeDescription>레시피 설명</StRecipeDescription>
        </StRecipeDescriptionWrapper>
        <StAdditionalInfoWrapper>
          <StNickname>닉네임입니다</StNickname>
          <StCount>count ♥</StCount>
        </StAdditionalInfoWrapper>
      </StRecipeItem>
      <StRecipeItem>
        <StRecipeImage />
        <StRecipeName>레시피 이름</StRecipeName>
        <StRecipeDescriptionWrapper>
          <StRecipeDescription>레시피 설명</StRecipeDescription>
        </StRecipeDescriptionWrapper>
        <StAdditionalInfoWrapper>
          <StNickname>닉네임입니다</StNickname>
          <StCount>count ♥</StCount>
        </StAdditionalInfoWrapper>
      </StRecipeItem>
      <StRecipeItem>
        <StRecipeImage />
        <StRecipeName>레시피 이름</StRecipeName>
        <StRecipeDescriptionWrapper>
          <StRecipeDescription>레시피 설명</StRecipeDescription>
        </StRecipeDescriptionWrapper>
        <StAdditionalInfoWrapper>
          <StNickname>닉네임입니다</StNickname>
          <StCount>count ♥</StCount>
        </StAdditionalInfoWrapper>
      </StRecipeItem>
      <StRecipeItem>
        <StRecipeImage />
        <StRecipeName>레시피 이름</StRecipeName>
        <StRecipeDescriptionWrapper>
          <StRecipeDescription>레시피 설명</StRecipeDescription>
        </StRecipeDescriptionWrapper>
        <StAdditionalInfoWrapper>
          <StNickname>닉네임입니다</StNickname>
          <StCount>count ♥</StCount>
        </StAdditionalInfoWrapper>
      </StRecipeItem>
    </StRecipeList>
  );
}
