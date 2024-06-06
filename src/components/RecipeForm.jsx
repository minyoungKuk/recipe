import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import usePosts from "../hooks/usePosts";
import Button from "./Button";

const RecipeForm = ({ children, editType }) => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const { posts, handleCreateNewPost, handleUpdatePost } = usePosts();

  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [order, setOrder] = useState("");
  const [imgPath, setImgPath] = useState("");

  const imgRef = useRef(null);

  useEffect(() => {
    if (editType === "update" && postId) {
      const editPost = posts.find((post) => post.id === postId);
      if (editPost) {
        setTitle(editPost.recipe_title);
        setIntro(editPost.recipe_intro);
        setIngredient(editPost.recipe_ingredient);
        setOrder(editPost.recipe_order);
        setImgPath(editPost.recipe_image_url);
      }
    }
  }, [editType, postId, posts]);

  // 이미지 파일 업로드 시 나타나는 이미지 미리보기
  const showImage = () => {
    if (imgRef.current && imgRef.current.files) {
      const img = imgRef.current.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(img);
      setImgPath(reader.result);
      reader.onload = () => {
        setImgPath(String(reader.result));
      };
    }
  };

  const clickSubmitButton = () => {
    if (!title || !intro || !ingredient || !order || !imgPath) {
      alert("게시글 양식에 맞게 작성해주세요:(");
      return;
    }

    if (editType === "create") {
      const newRecipeItem = {
        nickname: "닉네임",
        recipe_title: title,
        recipe_intro: intro,
        recipe_ingredient: ingredient,
        recipe_order: order,
        recipe_image_url: imgPath,
        total_likes: 0,
      };

      handleCreateNewPost(newRecipeItem);
    } else {
      const newRecipeItem = {
        id: postId,
        nickname: "닉네임",
        recipe_title: title,
        recipe_intro: intro,
        recipe_ingredient: ingredient,
        recipe_order: order,
        recipe_image_url: imgPath,
        total_likes: 0,
      };

      handleUpdatePost(newRecipeItem);
    }

    navigate("/");
  };

  return (
    <div className="wrapper">
      <Part>
        <label htmlFor="title">레시피 이름</label>
        <input
          id="title"
          type="text"
          placeholder="레시피의 이름을 적어주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Part>
      <Part>
        <label htmlFor="intro">레시피 한 줄 설명</label>
        <input
          id="intro"
          type="text"
          placeholder="레시피에 대해 간단하게 소개해보세요"
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
        />
      </Part>
      <Part>
        <label htmlFor="ingredient">레시피 재료</label>
        <textarea
          id="ingredient"
          placeholder="레시피의 재료를 적어주세요"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
      </Part>
      <Part>
        <label htmlFor="order">레시피 순서</label>
        <textarea
          id="order"
          placeholder="레시피의 순서를 적어주세요"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        />
      </Part>
      <Part>
        <label htmlFor="image">레시피 사진</label>
        <ImageDiv>
          <img src={imgPath} />
        </ImageDiv>
        <input
          id="image"
          type="file"
          accept=".png, .jpeg, .jpg"
          ref={imgRef}
          onChange={showImage}
        />
      </Part>
      <ButtonDiv>
        <Button id="submit-button" color="#FF9234" onClick={clickSubmitButton}>
          {children}
        </Button>
      </ButtonDiv>
    </div>
  );
};

const Part = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  width: 640px;

  label {
    font-weight: 500;
    margin-left: 10px;
    color: #fe9f4d;
  }

  input {
    font-size: 15px;
    height: fit-content;
    margin-bottom: 0px;
  }

  textarea {
    font-size: 15px;
  }

  input[type="file"]::file-selector-button {
    width: 100px;
    height: 30px;
    background: white;
    border: 1px solid #fe9f4d;
    color: #ff7701;
    border-radius: 8px;
    cursor: pointer;

    margin-right: 10px;

    &:hover {
      background: #fecca0;
      color: white;
    }
  }

  #image {
    color: gray;
  }
`;

const ButtonDiv = styled.div`
  width: 640px;
  padding: 30px 40px;
  display: flex;
  justify-content: end;
`;

const ImageDiv = styled.div`
  display: inline;
  margin: 10px auto;

  img {
    max-width: 580px;
    border-radius: 8px;
  }
`;

export default RecipeForm;
