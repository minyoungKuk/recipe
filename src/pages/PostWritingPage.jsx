import React from "react";
import BackButton from "../components/BackButton";
import RecipeForm from "../components/RecipeForm";

const PostWritingPage = () => {
  return (
    <main className="main">
      <BackButton />
      <RecipeForm>작성 완료</RecipeForm>
    </main>
  );
};

export default PostWritingPage;
