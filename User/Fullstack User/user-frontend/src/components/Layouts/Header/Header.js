import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const MenuList = [
    { id: 1, name: "Home", path: "/home", icon: "bi-house-door" },
    { id: 2, name: "Menu", path: "/menu", icon: "bi-book-fill" },
    { id: 2, name: "Pemesanan", path: "/pemesanan", icon: "bi-cart" },
  ];
  const location = useLocation();
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light nav-bg fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={require("../../../images/projectakhir.png")} alt="logo-wm" style={{ height: "3rem" }} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <ul className="navbar-nav">
              {MenuList.map((v) => {
                if (v.name) {
                  const isActive = location.pathname === v.path;
                  const navClass = isActive ? "nav-link active" : "nav-link";
                  const navStyle = isActive ? { backgroundColor: "white", color: "black" } : { color: "white" };

                  return (
                    <li className="nav-item" key={v.id}>
                      <NavLink className={navClass} style={navStyle} to={v.path}>
                        <i className={`bi ${v.icon} me-2`}></i>
                        {v.name}
                      </NavLink>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
