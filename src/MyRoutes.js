import React from "react";
import EditPage from "./pages/EditPage";
import Admin from "./pages/Admin";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

export const ADMIN_ROUTES = [
  {
    link: "/admin",
    element: <Admin />,
    id: 1,
  },
  {
    link: "/edit/:id",
    element: <EditPage />,
    id: 2,
  },
];

const PUBLIC_ROUTES = [
  {
    link: "/",
    element: <HomePage />,
    id: 1,
  },
];

const MyRoutes = () => {
  return (
    <Routes>
      {ADMIN_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
