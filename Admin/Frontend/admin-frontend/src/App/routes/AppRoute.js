import React from "react";
import { Navigate, Router, Route, Routes } from "react-router-dom";
import Signin from "../../components/modules/components/Signin/Signin";
import BasePages from "./BasePages";
import Layouts from "../../components/Layouts/Layouts";
import Home from "../../components/modules/components/Home/Home";

export default function AppRoute() {
  return (
    <Routes>
      <Route index element={<Navigate to="/home" />} />
      <Route path="signin" element={<Signin />} />
      <Route
        path="*"
        element={
          <Layouts>
            <BasePages />
          </Layouts>
        }
      />
    </Routes>
  );
}
