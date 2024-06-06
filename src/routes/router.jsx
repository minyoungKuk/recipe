import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/Signup";
import DefaultLayout from "../layouts/DefaultLayout";
import PostDetailPage from "../pages/PostDetailPage";
import PostEditPage from "../pages/PostEditPage";
import PostWritingPage from "../pages/PostWritingPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <SignUp />,
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
        path: "/edit",
        element: <PostEditPage />,
      },
    ],
  },
]);

export default router;
