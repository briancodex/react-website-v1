import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignUp";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div classname="main-background">
        <div className="form-container">
          <span className="close-btn">×</span>
          {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
