// File Menu.js

import React, { useState } from "react";
import FormMenu from "./widget/FormMenu";

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
      <h1 className="d-flex flex-center">Menu Hari ini</h1>
      <FormMenu addtoCart={addToCart} />
    </div>
  );
}

export default Menu;
