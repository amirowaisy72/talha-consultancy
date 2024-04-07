import React, { useEffect } from "react";
import AccountingHeader from "../CommonComponents/AccountingHeader/Index";
import Section1 from "./Section1/Index";
import Section2 from "./Section2/Index";
import Section3 from "./Section3/Index";
import ContactusForm from "../../../CommonComponents/ContactUseForm/Form";

const Index = () => {
  useEffect(() => {
    const element = document.getElementById("start");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  }, []);
  return (
    <>
      <AccountingHeader />
      <Section1 />
      <Section2 />
      <Section3 />
      <center>
        <div
          style={{
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            padding: "50px",
            borderRadius: "5px",
            maxWidth: "900px",
            width: "100%",
            marginBottom: "30px",
          }}
        >
          <ContactusForm />
        </div>
      </center>
    </>
  );
};

export default Index;
