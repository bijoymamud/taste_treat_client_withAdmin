import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import ContactUs from "../pages//Contact/ContactUs";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Order from "../pages/OrderFood/Order";
import OurMenu from "../pages/OurMenu/OurMenu";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoutes";
import AdminHome from "../pages/Dashboard/AdminDashboard/AdminHome";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <ContactUs />

      },
      {
        path: "/ourMenu",
        element: <OurMenu />
      },
      {
        path: "/order/:category",
        element: <Order />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <SignUp />
      },


    ],


  },

  //dashboard router start
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'mycart',
        element: <MyCart />
      },
      {
        path: 'userhome',
        element: <UserHome />
      },
      {
        path: "allUsers",
        element: <AllUsers />
      },
      {
        path: 'adminhome',
        element: <AdminHome/>
      }
    ]
  }



]);