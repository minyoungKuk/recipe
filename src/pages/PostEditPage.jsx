import React from "react";
import BackButton from "../components/BackButton";
import RecipeForm from "../components/RecipeForm";

const PostWritingPage = () => {
  return (
    <main className="main">
      <BackButton />
      <RecipeForm>수정</RecipeForm>
    </main>
  );
};

export default PostWritingPage;
