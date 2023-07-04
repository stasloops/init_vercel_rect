import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./(components)/pages/Feed";
import Profile from "./(components)/pages/Profile";
import StartedPage from "./(components)/pages/StartedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartedPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
