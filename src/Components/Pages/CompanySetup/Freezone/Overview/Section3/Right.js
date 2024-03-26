import React, { useState, useEffect } from "react";

const Right = () => {
  const [experienceCount, setExperienceCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the counter until it reaches its final value
      if (experienceCount < 15) {
        setExperienceCount(experienceCount + 1);
      }
    }, 200); // Adjust the interval as needed

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [experienceCount]);

  return (
    <>
      <div
        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-55b02286"
        data-id="55b02286"
        data-element_type="column"
      >
        <div className="elementor-widget-wrap elementor-element-populated">
          <div
            className="elementor-element elementor-element-25f4bf1a elementor-widget__width-auto counter-big elementor-widget-tablet__width-inherit elementor-widget elementor-widget-counter"
            data-id="25f4bf1a"
            data-element_type="widget"
            data-widget_type="counter.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-counter">
                <div className="elementor-counter-number-wrapper">
                  <span className="elementor-counter-number-prefix"></span>
                  <span className="elementor-counter-number">
                    {experienceCount}
                  </span>
                  <span className="elementor-counter-number-suffix"></span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-226a90d9 elementor-widget elementor-widget-heading"
            data-id="226a90d9"
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
        </div>
      </div>
    </>
  );
};

export default Right;
