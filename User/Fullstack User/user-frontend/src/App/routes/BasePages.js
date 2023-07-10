import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/modules/components/Home/Home";
import Error from "../../components/Layouts/Error/Error";
import Menu from "../../components/modules/components/Menu/Menu";
import Pemesanan from "../../components/modules/components/Pemesanan/Pemesanan";

export default function BasePages() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="pemesanan" element={<Pemesanan />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
