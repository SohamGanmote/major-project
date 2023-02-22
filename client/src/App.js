import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import News from "./pages/News/News";
import Chats from "./pages/Chats/Chats";
import Notification from "./pages/Notification/Notification";
import Profile from "./pages/Profile/Profile";
import AboutUs from "./pages/AboutUs/AboutUs";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound/NotFound";

import AuthRoot from "./pages/Auth/AuthRoot";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/Search", element: <Search /> },
        { path: "/news", element: <News /> },
        { path: "/chats", element: <Chats /> },
        { path: "/notification", element: <Notification /> },
        { path: "/profile/:user_id", element: <Profile /> },
        { path: "/profile/update/:user_id", element: <UpdateProfile /> },
        { path: "/aboutus", element: <AboutUs /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthRoot />,
      errorElement: <NotFound />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
