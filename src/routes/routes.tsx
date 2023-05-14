/*
  / => Landing Page (HomePage)
  /todos => Todos Page
  /config => Config Page
  /profile => Profile Page
  /auth  => Auth Page
    /auth/login => Auth Login Page
    /auth/register => Auth Register Page
    /auth/resetPassword => Auth Reset Password Page
-*/
import React, { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import RegisterPage from "../pages/authorization/RegisterPage";
import ResetPasswordPage from "../pages/authorization/ResetPasswordPage";
import ProductPage from "../pages/product/ProductPage";
import ProductCreatePage from "../pages/product/ProductCreatePage";

const HomePage = React.lazy(() => import("../pages/home/HomePage"));
const TodoPage = React.lazy(() => import("../pages/todo/TodoPage"));
const NotFoundPage = React.lazy(
  () => import("../pages/not-found-page/NotFoundPage")
);
const LoadingPageIndicator = React.lazy(
  () => import("../pages/loading-page-indicator/LoadingPageIndicator")
);
const LoginPage = React.lazy(() => import("../pages/authorization/LoginPage"));
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingPageIndicator />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/todo"
          element={
            <Suspense fallback={<LoadingPageIndicator />}>
              <TodoPage />
            </Suspense>
          }
        />
        <Route
          path="/product"
          element={
            <Suspense fallback={<LoadingPageIndicator />}>
              <ProductPage />
            </Suspense>
          }
        />
        <Route
          path="/product/create"
          element={
            <Suspense fallback={<LoadingPageIndicator />}>
              <ProductCreatePage />
            </Suspense>
          }
        />
        <Route
          path="/auth/login"
          element={
            <Suspense>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="/auth/register"
          element={
            <Suspense>
              <RegisterPage />
            </Suspense>
          }
        />
        <Route
          path="/auth/resetPassword"
          element={
            <Suspense>
              <ResetPasswordPage />
            </Suspense>
          }
        />
        <Route path="/config" element={<div>Config Page</div>} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
