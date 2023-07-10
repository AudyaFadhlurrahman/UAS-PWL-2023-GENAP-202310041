import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Pesanan() {
  const [pesanan, setPesanan] = useState([]);

  const order = async () => {
    try {
      const response = await axios.get("http://localhost:8000/pesanan");
      console.log(response);
      setPesanan(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    order();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No.Meja</th>
            <th scope="col">Pesanan</th>
            <th scope="col">Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {pesanan.map((v, index) => (
            <tr key={index}>
              <th scope="row">{v.no_meja}</th>
              <td>{v.Menu.nama_menu}</td>
              <td>{v.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
