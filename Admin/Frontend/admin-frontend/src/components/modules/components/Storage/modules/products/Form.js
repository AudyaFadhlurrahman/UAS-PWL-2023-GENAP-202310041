import axios from "axios";
import React, { useState } from "react";

export function Form() {
  const [formData, setFormData] = useState({
    nama_menu: "",
    stock: 0,
    harga: 0,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:8000/menu", formData);
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };

  return (
    <div className="card bg-white">
      <div className="card-header border-0 py-3">
        <div className="card-title d-flex flex-column">
          <h3 className="text-dark">Menu Hari ini</h3>
        </div>
      </div>
      <div className="card-body pt-0">
        <form method="post" autoComplete="off" id="form-product" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nama Menu</label>
            <input type="text" name="nama_menu" className="form-control" value={formData.nama_menu} onChange={handleChange} />
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input type="number" name="stock" className="form-control" value={formData.stock} onChange={handleChange} />
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="mb-3">
                <label className="form-label">Harga</label>
                <div className="input-group">
                  <span className="input-group-text">Rp</span>
                  <input type="number" name="harga" className="form-control" value={formData.harga} onChange={handleChange} />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Gambar</label>
            <input type="file" name="image" className="form-control" onChange={handleImageChange} />
          </div>

          <div className="text-end mt-3">
            <button className="btn btn-light" type="button">
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
