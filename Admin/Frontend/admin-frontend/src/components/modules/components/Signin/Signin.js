import React from "react";
import Form from "./widget/Form";

function Signin() {
  return (
    <div id="register" className="d-flex flex-column flex-root justify-content-center align-items-center">
      <div className="d-flex flex-column flex-column-fluid justify-content-center">
        <Form />
        <div className="d-flex flex-center flex-column-auto p-10"></div>
      </div>
    </div>
  );
}

export default Signin;
