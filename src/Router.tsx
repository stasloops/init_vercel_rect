import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./(components)/pages/Feed";
import Profile from "./(components)/pages/Profile";
import StartedPage from "./(components)/pages/StartedPage";

const router = createBrowserRouter(
  [
    {
      path: "/app",
      element: <StartedPage />,
    },
    {
      path: "/app/profile",
      element: <Profile />,
    },
    {
      path: "/app/feed",
      element: <Feed />,
    },
  ],
  {
    basename: "/app",
  }
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
