import React, { useEffect, useState } from "react";

const Index = ({ setSuggestionClicked, setSuggestionSelected }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      if (messageIndex === 0) {
        setMessageIndex(1);
      } else if (messageIndex === 1) {
        setMessageIndex(2);
      } else {
        setShowSuggestions(true);
        setSuggestionIndex(1); // Start showing suggestions
      }
    }, 1000);

    return () => clearTimeout(messageTimer);
  }, [messageIndex]);

  useEffect(() => {
    let suggestionTimer;
    if (showSuggestions && suggestionIndex <= 2) {
      suggestionTimer = setTimeout(() => {
        setSuggestionIndex((prevIndex) => prevIndex + 1);
      }, 1000); // Display each suggestion after 1 second

      return () => clearTimeout(suggestionTimer);
    }

    return () => clearTimeout(suggestionTimer);
  }, [showSuggestions, suggestionIndex]);

  const messages = [
    "Welcome to Talha Consultancy! What can we do for you?",
    "Please select one of the following suggestions:",
  ];

  const suggestions = [
    "Bank Account Opening",
    "Business Setup",
    "Freezone company",
  ];

  return (
    <>
      {/* Display messages one by one */}
      {messages.slice(0, messageIndex + 1).map((message, index) => (
        <div key={index} className="message-container">
          <div className="message-sender">Talha Consultancy</div>
          <div
            className="message-box"
            style={{
              backgroundColor: "#f8f1f1",
            }}
          >
            <div className="message">{message}</div>
          </div>
        </div>
      ))}
      {/* Display suggestions one by one */}
      {showSuggestions && (
        <div className="suggestions">
          <ul>
            {suggestions.slice(0, suggestionIndex).map((suggestion, index) => (
              <li
                key={index}
                onClick={()=>{
                  setSuggestionSelected(suggestion);
                  setSuggestionClicked(true);
                }}
                className="suggestion"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Index;
