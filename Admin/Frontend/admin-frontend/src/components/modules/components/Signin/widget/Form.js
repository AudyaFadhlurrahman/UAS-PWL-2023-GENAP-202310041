import axios from "axios";
import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

export default function FormSignin() {
  const objProfile = {
    email: "",
    password: "",
  };

  const [profile, setProfile] = useState(objProfile);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const isLoggedIn = () => {
    return successSubmit;
  };

  async function checkDuplicateEmail(email) {
    try {
      const response = await fetch("http://localhost:8000/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error(error);
      // Handle error case, such as displaying an error message
    }
  }

  const signinAdmin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/signin", profile);
      console.log(response);
      const adminId = response.data.admin.id;
      localStorage.setItem("adminId", adminId);
      navigate("/home");
    } catch (error) {
      console.error(error);
      // Tambahkan logika atau respons yang sesuai di sini, misalnya menampilkan pesan error
    }
  };

  return isLoggedIn() ? (
    <Navigate to="/home" replace={true} />
  ) : (
    <div className="py-10" style={{ marginTop: "4rem" }}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col">
          <div className="card d-flex justify-content-center shadow">
            <div className="card-header text-center justify-content-center" style={{ backgroundColor: "#545454" }}>
              <h3 className="card-title text-white">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={signinAdmin}>
                <div className="form-group mb-3">
                  <label>Email:</label>
                  <input type="email" name="email" required className="form-control" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                </div>
                <div className="form-group mb-3">
                  <label>Password:</label>
                  <input type="password" name="password" required className="form-control" value={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
                </div>

                {errorMessage && <div className="text-danger mb-2">{errorMessage}</div>}

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Continue
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center">
              <p>
                Belum Punya Akun? <Link to="/register">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
