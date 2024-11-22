import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import HomePage from "../components/HomePage";
import Layout from "../layouts/Layout";
import LayoutUser from "../layouts/LayoutUser";
import ContactPage from "../components/ContactPage";
import AccoutPage from "../components/AccoutPage";
import DetailPage from "../components/DetailPage";
import SettingPage from "../components/SettingPage";
import BookingPage from "../components/BookingPage";
import UpdateProfilePage from "../components/UpdateProfilePage";
import UpdatePasswordPage from "../components/UpdatePasswordPage";
import RoomPage from "../components/RoomPage";
import BookingDetailPage from "../components/BookingDetailPage";
import PaymentPage from "../components/PaymentPage";
import LayoutAdmin from "../layouts/LayoutAdmin";
import EmployeePage from "../components/admin/employee/EmployeePage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "room", element: <RoomPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "detail/:id", element: <DetailPage /> },
      { path: "payment/:id", element: <PaymentPage /> },
    ],
  },
  {
    path: "/user",
    element: <LayoutUser />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "room", element: <RoomPage /> },
      { path: "contact", element: <ContactPage /> },
      {
        path: "setting",
        element: <SettingPage />,
        children: [
          { index: true, element: <AccoutPage /> },

          { path: "booking", element: <BookingPage /> },
          { path: "detail/:id", element: <BookingDetailPage /> },
          { path: "update-profile", element: <UpdateProfilePage /> },
          { path: "update-password", element: <UpdatePasswordPage /> },
        ],
      },
      { path: "detail/:id", element: <DetailPage /> },
      { path: "payment/:id", element: <PaymentPage /> },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      { index: true, element: <EmployeePage /> },
      {
        path: "room",
        element: <HomePage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "update", element: <HomePage /> },
          { path: "create", element: <HomePage /> },
        ],
      },

      {
        path: "booking",
        element: <HomePage />,
        children: [
          { index: true, element: <BookingPage /> },
          { path: "confirm", element: <HomePage /> },
          { path: "update", element: <HomePage /> },
          { path: "create", element: <HomePage /> },
          { path: "get-room", element: <HomePage /> },
        ],
      },
      {
        path: "employee",
        element: <HomePage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "update", element: <HomePage /> },
          { path: "create", element: <HomePage /> },
        ],
      },
      { path: "checkin", element: <HomePage /> },
      { path: "checkout", element: <HomePage /> },
    ],
  },
]);
const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default AppRoutes;
