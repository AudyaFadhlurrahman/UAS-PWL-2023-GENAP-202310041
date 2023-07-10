import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../../components/modules/components/Signin/Signin";
import Home from "../../components/modules/components/Home/Home";
import Register from "../../components/modules/components/Register/Register";
import Error from "../../components/Layouts/Error/Error";
import Menu from "../../components/modules/components/Menu/Menu";
import Storage from "../../components/modules/components/Storage/Storage";
import { Products } from "../../components/modules/components/Storage/modules/products";
import Pesanan from "../../components/modules/components/Pesanan/Pesanan";

export default function BasePages() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="signin" element={<Signin />} />
      <Route path="home" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="menu" element={<Menu />} />
      <Route path="storage" element={<Storage />}>
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="pesanan" element={<Pesanan />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
