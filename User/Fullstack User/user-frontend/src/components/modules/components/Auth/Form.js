import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { openModal } from "../../../Layouts/Modals/ModalsPopUp";

export default function FormRegister() {
  const objProfile = {
    email: "",
    password: "",
  };

  const [profile, setProfile] = useState(objProfile);
  const [successSubmit, setSuccseesSubmit] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    var formid = e.target.id;
    var target = document.getElementById(formid);
    var myButton = target.getElementsByClassName("btn-submit")[0];
    myButton.textContent = "Processing...";
    myButton.disabled = true;
    if (profile.email && profile.password) {
      openModal({ header: "Information", message: <RenderMessage profile={profile} /> });
      setSuccseesSubmit(true);
    } else {
      openModal({ header: "Information", message: <p className="text-danger">Please fill up the form with correctly</p> });
    }
    myButton.textContent = "Continue";
    myButton.disabled = false;
  };

  return successSubmit ? (
    <Navigate to="/home" replace={true} />
  ) : (
    <div className="py-10">
      <div className="card d-flex flex-column flex-center bg-white">
        <div className="d-flex justify-content-center align-items-center nav-form w-full w-lg-500px">
          <div className="card-header justify-content-center w-full">
            <h3 className="card-title flex-column w-full">
              <span className="card-label fw-bolder font-form text-light">Login</span>
            </h3>
          </div>
        </div>
        <div className="card-body shadow-lg w-lg-500px">
          <form className="form-profile" method="post" onSubmit={(e) => handlerSubmit(e)} id="form-profile">
            <div className="fv-row mb-10 fv-plugins-icon-container">
              <label className="required form-label fs-6 fw-bolder text-dark">Email</label>
              <input type="email" name="email" required className="form-control form-control-lg form-control-solid" defaultValue={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
            </div>
            <div className="fv-row mb-10 fv-plugins-icon-container">
              <label className="required form-label fs-6 fw-bolder text-dark">Password</label>
              <input type="password" name="password" required className="form-control form-control-lg form-control-solid" defaultValue={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-lg btn-primary mx-2 btn-submit">
                Continue
              </button>
            </div>

            <div className="text-center mb-lg-2 py-3">
              <div className="text-gray-400 fw-bold fs-4">
                Belum Punya Akun ?
                <Link to={"/register"} className="ms-2 text-decoration-none">
                  Create an account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const RenderMessage = ({ profile }) => {
  return (
    <div className="profile">
      <p className="text-dark">Email: {profile.email}</p>
      <p className="text-dark">Password: {profile.password}</p>
    </div>
  );
};
