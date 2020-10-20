import React from "react";
import "./Form.css";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your request!</h1>
      <img
        className="form-img-2"
        src="https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/5ef341840cd1d2f8183c4e2f_thank-you-message-after-form-submission-MightyForms.png"
        alt="success-image"
      />
    </div>
  );
};

export default FormSuccess;
