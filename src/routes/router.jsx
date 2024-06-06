import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
// import { MyPage } from "../pages/MyPage";
import PostDetailPage from "../pages/PostDetailPage";
import PostEditPage from "../pages/PostEditPage";
import PostWritingPage from "../pages/PostWritingPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/post/:postId",
        element: <PostDetailPage />,
      },
      {
        path: "/write",
        element: <PostWritingPage />,
      },
      {
        path: "/edit/:postId",
        element: <PostEditPage />,
      },
      // {
      //   path: "/mypage",
      //   element: <MyPage />,
      // },
    ],
  },
]);

export default router;
