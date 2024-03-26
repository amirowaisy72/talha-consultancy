import React, { useState, useEffect } from "react";
import "./Index.css"; // Assuming you have a CSS file named Index.css for styling

const ScrollableImage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrollable-image-container">
      <img
        src="https://media.bizj.us/view/img/8190162/istock000050895978medium*750xx1784-1001-0-73.jpg" // Sample image source
        alt="Sample Image"
        className="scrollable-image"
      />
    </div>
  );
};

const Index = () => {
  return (
    <div className="custom-component">
      <center>
        <h3>Fueled by Inspiration</h3>
        <h2>Accelerating Growth</h2>
      </center>
      <div className="custom-component-content">
        <div className="left-content">
          <p>
            Our team of experts do more than just be a part of the answer – they
            become part of the solution. Instead of focusing only on business
            advisory services, our consultants help implement change at your
            organization. And they do not rest until the objectives they started
            out to accomplish have been achieved. They leave no stone unturned
            in their quest for excellence, and bring their vast expertise to the
            table, providing you with fresh insights into your business. Driven
            by a culture of innovation, they help you lower costs and enter new
            markets by leading the way with unique perspectives into operational
            and strategic matters.
          </p>
        </div>
        <div className="right-content">
          <ScrollableImage />
        </div>
      </div>
    </div>
  );
};

export default Index;
