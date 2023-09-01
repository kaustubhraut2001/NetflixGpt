import React from "react";
import Brows from "./Brows";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";

const Body = () => {
  const appRouter = BrowserRouter(
    {
      path: "/",
      exact: true,
      component: <Login/>,
    },
    {
      path: "/brows",
      exact: true,
      component: <Brows/>,
    }
  );
  return (
    <div>
    <RouterProvider router={appRouter}/>






    </div>
  );
};

export default Body;
