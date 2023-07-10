import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function FormRegister() {
  const objProfile = {
    nama: "",
    email: "",
    alamat: "",
    password: "",
  };

  const navigate = useNavigate();

  const [profile, setProfile] = useState(objProfile);
  const [successSubmit, setSuccseesSubmit] = useState(false);

  const registerAdmin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/register", profile);
      console.log(response);
      navigate("/signin");
    } catch (error) {
      console.error(error);
      // Tambahkan logika atau respons yang sesuai di sini, misalnya menampilkan pesan error
    }
  };

  return successSubmit ? (
    <Navigate to="/signin" replace={true} />
  ) : (
    <div className="">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col">
          <div className="card d-flex justify-content-center shadow">
            <div className="card-header text-center justify-content-center" style={{ backgroundColor: "#545454" }}>
              <h3 className="card-title text-white">Register</h3>
            </div>
            <div className="card-body">
              <form onSubmit={registerAdmin}>
                <div className="mb-3">
                  <label className="form-label">Nama</label>
                  <input type="text" name="nama" required className="form-control" defaultValue={profile.nama} onChange={(e) => setProfile({ ...profile, nama: e.target.value })} />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" required className="form-control" defaultValue={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                </div>

                <div className="mb-3">
                  <label className="form-label">Alamat</label>
                  <input type="text" name="alamat" className="form-control" defaultValue={profile.alamat} onChange={(e) => setProfile({ ...profile, alamat: e.target.value })} />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" name="password" required className="form-control" defaultValue={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
                </div>

                <div className="text-center">
                  <button type="button" className="btn btn-light">
                    Clear
                  </button>

                  <button type="submit" className="btn btn-primary mx-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
