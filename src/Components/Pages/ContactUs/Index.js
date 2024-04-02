import React from "react";
import Slider from "../../Pages/Home/Slider/Computer/Index"
import ContactUsForm from "../../CommonComponents/ContactUseForm/Index";
import "./style.css";

const Index = () => {
  return (
    <>
    <Slider />
      <div className="contact-form-container">
        <ContactUsForm />
      </div>
    </>
  );
};

export default Index;
