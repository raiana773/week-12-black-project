import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ActivatePage from "../pages/ActivatePage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/activate" element={<ActivatePage />} />
    </Routes>
  );
}

export default MainRoutes;
