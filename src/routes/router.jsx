import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import HomePage from '../pages/HomePage';
import PostDetailPage from '../pages/PostDetailPage';
import PostEditPage from '../pages/PostEditPage';
import PostWritingPage from '../pages/PostWritingPage';
import { MyPage } from '../pages/MyPage';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/post/:postId',
        element: <PostDetailPage />,
      },
      {
        path: '/write',
        element: <PostWritingPage />,
      },
      {
        path: '/edit',
        element: <PostEditPage />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
