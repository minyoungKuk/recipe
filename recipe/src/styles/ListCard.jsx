import React from 'react';
import styled from 'styled-components';
const StRecipeList = styled.ul`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
  justify-items: center;
  border: 1px solid black;
  margin: 0 auto;
`;

const StRecipeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  width: 240px;
  height: 320px;
  border: 1px solid black;
  border-radius: 10px;
`;

const StRecipeImage = styled.div`
  display: block;
  width: 200px;
  height: 200px;
  background-color: #eaeaea;
  margin: 0 auto;
  margin-top: 20px;
  background-image: url('../public/images/icon/ic-back.png'); /* 이미지 URL 설정 */
  background-size: cover;
  background-position: center;
  border-radius: 3px;
`;

const StRecipeName = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0 auto;
  padding-top: 10px;
`;

const StRecipeDescription = styled.div`
  font-size: 1em;
  color: #666;
  margin: 0 auto;
  padding-top: 10px;
`;

export default function ListCard() {
  return (
    <StRecipeList>
      <StRecipeItem>
        <StRecipeImage />
        <StRecipeName>레시피 이름</StRecipeName>
        <StRecipeDescription>레시피 설명</StRecipeDescription>
      </StRecipeItem>
      <StRecipeItem>
        <StRecipeImage />
        <StRecipeName>레시피 이름</StRecipeName>
        <StRecipeDescription>레시피 설명</StRecipeDescription>
      </StRecipeItem>
      <StRecipeItem>
        <StRecipeImage />
        <StRecipeName>레시피 이름</StRecipeName>
        <StRecipeDescription>레시피 설명</StRecipeDescription>
      </StRecipeItem>
      <StRecipeItem>
        <StRecipeImage />
        <StRecipeName>레시피 이름</StRecipeName>
        <StRecipeDescription>레시피 설명</StRecipeDescription>
      </StRecipeItem>
      <StRecipeItem>
        <StRecipeImage />
        <StRecipeName>레시피 이름</StRecipeName>
        <StRecipeDescription>레시피 설명</StRecipeDescription>
      </StRecipeItem>
    </StRecipeList>
  );
}
