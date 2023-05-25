import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login_ from "../UserResponsibility/Login/Login_";
import Registration from "../UserResponsibility/Registration/Registration";
import USer from "../UserResponsibility/USer";
import UserHome from "../UserResponsibility/UserHome";
import ChefDetail from "../Pages/ChefDetail/ChefDetail";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import PrivateRoute from "../Providers/PrivateRoute/PrivateRoute";
import Blogs from "../Pages/Blogs/Blogs";

  const router=createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login_></Login_>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/:id',
                element: <PrivateRoute><ChefDetail></ChefDetail></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/user',
        element: <USer></USer>,
        children:[
            {
                path: '/user',
                element:<UserHome></UserHome>
            },
            {
                path:'/user/login',
                element: <Login_></Login_>
            },
            {
                path: '/user/register',
                element: <Registration></Registration>
            }
        ]
    }
  ])

  export default router;