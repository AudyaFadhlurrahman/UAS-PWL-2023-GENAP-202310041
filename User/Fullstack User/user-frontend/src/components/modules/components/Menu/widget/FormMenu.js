import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormMenu = ({ addToCart }) => {
  const [cardData, setCardData] = useState([]);
  const [noMeja, setNoMeja] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const getMenu = async () => {
    try {
      const response = await axios.get("http://localhost:8000/menu");
      setCardData(response.data);
      setSelectedItems(response.data.map((card) => ({ ...card, count: 0 })));
    } catch (error) {
      console.log(error);
    }
  };

  const postPesanan = async () => {
    const filteredItems = selectedItems.filter((item) => item.count !== 0);

    try {
      for (const item of filteredItems) {
        const pesananItem = {
          id_menu: item.id,
          quantity: item.count,
          no_meja: parseInt(noMeja),
        };

        const response = await axios.post("http://localhost:8000/pesanan", pesananItem);
        console.log(response);
        sessionStorage.setItem("no_meja", parseInt(noMeja));
        navigate("/pemesanan");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const incrementCount = (index) => {
    const updatedItems = [...selectedItems];
    updatedItems[index].count++;
    setSelectedItems(updatedItems);
  };

  const decrementCount = (index) => {
    const updatedItems = [...selectedItems];
    if (updatedItems[index].count > 0) {
      updatedItems[index].count--;
      setSelectedItems(updatedItems);
    }
  };

  const handleAddToCart = () => {
    postPesanan();
  };

  return (
    <div>
      <form className="form-profile d-flex" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <div className="fv-row mb-10 fv-plugins-icon-container">
          <label className="required form-label fs-6 fw-bolder text-dark">No Meja</label>
          <input type="text" name="noMeja" required className="form-control form-control-lg form-control-solid" value={noMeja} onChange={(e) => setNoMeja(e.target.value)} />
        </div>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {selectedItems.map((item, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt="Card" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div className="card-body">
              <h5 className="card-title">{item.nama_menu}</h5>
              <h5 className="card-title">{item.stock}</h5>
              <h5 className="card-title">{item.harga}</h5>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button className="btn btn-danger" onClick={() => decrementCount(index)} disabled={item.count === 0}>
                  -
                </button>
                <span style={{ margin: "0 10px" }}>{item.count}</span>
                <button className="btn btn-primary" onClick={() => incrementCount(index)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
        <button className="btn btn-primary" style={{ marginRight: "30px" }} onClick={postPesanan}>
          Tambahkan ke Pemesanan
        </button>
      </div>
    </div>
  );
};

export default FormMenu;
