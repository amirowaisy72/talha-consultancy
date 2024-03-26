import React, { useState, useEffect } from "react";
import "./Index.css"; // Assuming you have a CSS file named Index.css for styling

const Index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      }
    }, 50); // Adjust the interval as needed for the counting speed

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="team-component">
      <img
        src="https://via.placeholder.com/1500x500" // Sample image source with reduced height
        alt="Team Members"
        className="background-image"
      />
      <div className="counter-container">
        <div className="counter-box">
          <center>
            <p className="counter">
              {count} +
            </p>
            <p className="counter-label">
              Vibrant Team Members
            </p>
          </center>
        </div>
      </div>
      <div className="team-members-text" style={{ color: "green" }}>
        <p>TEAM MEMBERS</p>
      </div>
    </div>
  );
};

export default Index;
