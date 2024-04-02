import React, { useEffect, useState } from "react";

const Index = ({ user, suggestion }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      if (messageIndex === 0) {
        setMessageIndex(1);
      } else if (messageIndex === 1) {
        setMessageIndex(2);
      } else {
        //
      }
    }, 1000);

    return () => clearTimeout(messageTimer);
  }, [messageIndex]);

  const messages = [
    {
      sender: user,
      role: "User",
      msg: suggestion,
    },
    {
      sender: "Talha Consultancy",
      role: "Admin",
      msg: "Thank you for reaching out. We will be in touch shortly.",
    },
  ];

  return (
    <>
      {/* Display messages one by one */}
      {messages.slice(0, messageIndex + 1).map((message, index) => (
        <div key={index} className="message-container">
          <div className="message-sender">{message.sender}</div>
          <div
            className="message-box"
            style={{
              backgroundColor: message.role === "User" ? "#b5b1b1" : "#f8f1f1",
            }}
          >
            <div className="message">{message.msg}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Index;
