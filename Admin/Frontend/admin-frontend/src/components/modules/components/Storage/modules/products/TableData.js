import React from "react";
export default function TableData() {
  const ItemProduct = () => {
    return (
      <div className="card item mb-8">
        <div className="card-body p-0">
          <div className="img">
            <img src={require("../../../../../../images/products/icon-box.png")} alt="logo-product" className="w-100" />
          </div>
          <div className="desc">
            <p className="title ps-7 mb-2 px-2">Menu Makanan</p>
            <p className="fw-bolder mb-2 px-2 fs-6">Rp 0</p>
            <div className="info px-2 mb-2">
              <div className="d-flex justify-content-start align-items-center">
                <div className="stock me-2">
                  <i className="bi bi-star-fill"></i>
                  <span className="ms-2">Stock 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="list-product">
      <div className="row">
        <div className="col-3">
          <ItemProduct />
        </div>
      </div>
    </div>
  );
}
