// File Menu.js

import React, { useState } from "react";
import FormMenu from "./widget/FormMenu";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Menu() {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (items) => {
    // Logika penambahan item ke keranjang pemesanan
    // Anda dapat memperbarui state cartItems di sini
    // atau mengirimkan data ke komponen Pemesanan

    console.log("Items yang ditambahkan ke keranjang:", items);
  };

  return (
    <div>
      <h1 className="d-flex flex-center mt-5 mb-3">Menu Hari ini</h1>
      <FormMenu addtoCart={addToCart} />
    </div>
  );
}

export default Menu;
