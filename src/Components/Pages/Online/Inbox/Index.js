import React, { useState, useEffect } from "react";
import Form from "../Form/Index";
import Default from "../Default/Index";
import Footer from "../Footer/Index";
import Submitted from "../Submitted/Index";
import "./style.css";

const Inbox = () => {
  const [suggestionClicked, setSuggestionClicked] = useState(false);
  const [suggestionSelected, setSuggestionSelected] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
  });

  return (
    <div className="inbox">
      <div className="inbox-heading">Talha Consultancy</div>
      {suggestionClicked ? (
        <div className="form">
          <Form
            setSuggestionClicked={setSuggestionClicked}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      ) : !suggestionClicked && formData.username === "" ? (
        <>
          <Default
            setSuggestionClicked={setSuggestionClicked}
            setSuggestionSelected={setSuggestionSelected}
          />
        </>
      ) : (
        <Submitted suggestion={suggestionSelected} user={formData.username} />
      )}
      <Footer />
    </div>
  );
};

export default Inbox;
