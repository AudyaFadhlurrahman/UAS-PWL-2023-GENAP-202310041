import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layouts(props) {
  return (
    <div id="main-layout">
      <Header />

      <main className="mt-20 py-10">{props.children}</main>

      <Footer />
    </div>
  );
}
