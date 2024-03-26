import React, { useState, useEffect } from "react";

const Experience = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 15) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust the interval for smoother animation

    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <div
        className="elementor-element elementor-element-22f85e68 elementor-widget__width-auto elementor-widget elementor-widget-counter"
        data-id="22f85e68"
        data-element_type="widget"
        data-widget_type="counter.default"
      >
        <div className="elementor-widget-container">
          <div className="elementor-counter">
            <div className="elementor-counter-number-wrapper">
              <span className="elementor-counter-number-prefix"></span>
              <span
                className="elementor-counter-number"
                data-duration="2000"
                data-to-value="15"
                data-from-value="0"
              >
                {count}
              </span>
              <span className="elementor-counter-number-suffix"></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-3f5f5128 elementor-widget elementor-widget-heading"
        data-id="3f5f5128"
        data-element_type="widget"
        data-widget_type="heading.default"
      >
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default">
            Years of
            <br />
            Experience
          </h2>
        </div>
      </div>
    </>
  );
};

export default Experience;
