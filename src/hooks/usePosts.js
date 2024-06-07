import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPost,
  deletePost,
  readPosts,
  updatePost,
} from "../redux/slices/post.slice";

const usePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(readPosts());
  }, [dispatch]);

  const handleCreateNewPost = (post) =>
    dispatch(createPost(post)).then(() => dispatch(readPosts()));

  const handleReadPosts = () => dispatch(readPosts());

  const handleUpdatePost = (post) =>
    dispatch(updatePost(post)).then(() => dispatch(readPosts()));

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  return {
    posts,
    handleCreateNewPost,
    handleReadPosts,
    handleUpdatePost,
    handleDeletePost,
  };
};

export default usePosts;
