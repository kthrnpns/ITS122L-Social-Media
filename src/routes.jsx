import { createBrowserRouter } from 'react-router-dom';
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import LoginRegister from "@/pages/LoginRegister";
import Post from "@/pages/Post";
import Profile from "@/pages/Profile";
import MyLikes from "@/pages/MyLikes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <LoginRegister /> },
      { path: 'post/:id', element: <Post /> },
      { path: 'profile/:id', element: <Profile /> },
      { path: "/my-likes", element: <MyLikes /> },
    ],
  },
]);

export default router;
