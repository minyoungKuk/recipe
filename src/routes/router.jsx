import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
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
    ],
  },
]);

export default router;
