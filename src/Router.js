import {createBrowserRouter, redirect} from "react-router-dom";
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';
import PostListPage from './pages/PostListPage'
export const Router = createBrowserRouter([
    {
        path:'/view',
        element: <PostListPage />
    },
    {
        path:'/post/:id',
        element: <PostPage />
    },
    {
        path: '/',
        element: <></>,
        loader: () => redirect('/view'),
        errorElement: <NotFoundPage />,
    },

]);