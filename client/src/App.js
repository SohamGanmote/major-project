/**
 * Welcome to Shell This Code was written and Maintained by @SohamGanmote & @yasinbhojani
 */

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import News from "./pages/News/News";
import Chats from "./pages/Chats/Chats";
import Notification from "./pages/Notification/Notification";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Settings from "./pages/Settings/Settings";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound/NotFound";

import AuthRoot from "./pages/Auth/AuthRoot";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";

import PrivateChats from "./components/Chats/PrivateChats";

import Analytics from "./dashboard/pages/Analytics/Analytics";
import Storage from "./dashboard/pages/Storage/Storage";
import Tables from "./dashboard/pages/Tables/Tables";
import SQLW from "./dashboard/pages/SQLWorkbench/SQLW";

const App = () => {
  const router = createBrowserRouter([
    // Users Routes
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
        { path: "/settings", element: <Settings /> },

        // Some Extra Chats Routes
        {
          path: "/chats/private/:senderID/:reciverID",
          element: <PrivateChats />,
        },
      ],
    },

    // Login and SignUp Routes
    {
      path: "/auth",
      element: <AuthRoot />,
      errorElement: <NotFound />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },

    // Shell main pahe Route
    { path: "/about", element: <About /> },

    // Admin Dashboard Routes
    {
      path: "/admin",
      element: <Root Nav="admin" />,
      errorElement: <NotFound />,
      children: [
        { path: "", element: <Analytics /> },
        { path: "Storage", element: <Storage /> },
        { path: "Tables", element: <Tables /> },
        { path: "SQLW", element: <SQLW /> },
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
