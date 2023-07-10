import React, { useState, Redirect } from "react";
import FormRegister from "./widget/FormRegister";

export default function Register() {
  const [successSubmit, setSuccseesSubmit] = useState(false);
  return successSubmit ? (
    <Redirect to="signin" />
  ) : (
    <div id="register" className="d-flex flex-column flex-root justify-content-center align-items-center">
      <div className="d-flex flex-column flex-column-fluid justify-content-center">
        <FormRegister />
        <div className="d-flex flex-center flex-column-auto p-10"></div>
      </div>
    </div>
  );
}
