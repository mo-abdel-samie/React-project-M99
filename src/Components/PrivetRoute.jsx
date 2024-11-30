import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export default function PrivetRoute() {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}
