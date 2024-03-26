import React, { useState, useEffect } from "react";

const Teams = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < 100) {
        setCount1((prevCount) => prevCount + 1);
      }
    }, 20); // Adjust the interval for smoother animation

    const interval2 = setInterval(() => {
      if (count2 < 150) {
        setCount2((prevCount) => prevCount + 1);
      }
    }, 20); // Adjust the interval for smoother animation

    const interval3 = setInterval(() => {
      if (count3 < 200) {
        setCount3((prevCount) => prevCount + 1);
      }
    }, 20); // Adjust the interval for smoother animation

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [count1, count2, count3]);

  return (
    <section
      className="elementor-section elementor-inner-section elementor-element elementor-element-181fcac8 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="181fcac8"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-wider">
        <div
          className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4e29b051"
          data-id="4e29b051"
          data-element_type="column"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-5ee5cae1 elementor-widget elementor-widget-image"
              data-id="5ee5cae1"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width="95"
                  height="95"
                  src="wp-content/uploads/2022/07/dedicated-team-icon.png"
                  className="attachment-full size-full wp-image-45321"
                  alt
                />
              </div>
            </div>
            <div
              className="elementor-element elementor-element-3d2e9658 elementor-widget elementor-widget-counter"
              data-id="3d2e9658"
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
                      data-to-value="100"
                      data-from-value="0"
                    >
                      {count1}
                    </span>
                    <span className="elementor-counter-number-suffix">+</span>
                  </div>
                  <div className="elementor-counter-title">Dedicated Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-43d4c7f3"
          data-id="43d4c7f3"
          data-element_type="column"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-3c34ef4b elementor-widget elementor-widget-image"
              data-id="3c34ef4b"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width="95"
                  height="95"
                  src="wp-content/uploads/2022/07/consultaions-icon.png"
                  className="attachment-full size-full wp-image-45322"
                  alt
                />
              </div>
            </div>
            <div
              className="elementor-element elementor-element-7c862f68 elementor-widget elementor-widget-counter"
              data-id="7c862f68"
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
                      data-to-value="150"
                      data-from-value="0"
                    >
                      {count2}
                    </span>
                    <span className="elementor-counter-number-suffix">+</span>
                  </div>
                  <div className="elementor-counter-title">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f95266f"
          data-id="f95266f"
          data-element_type="column"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-10d00418 elementor-widget elementor-widget-image"
              data-id="10d00418"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width="95"
                  height="95"
                  src="wp-content/uploads/2022/07/audit-completed-icon.png"
                  className="attachment-full size-full wp-image-45323"
                  alt
                />
              </div>
            </div>
            <div
              className="elementor-element elementor-element-1d75c62 elementor-widget elementor-widget-counter"
              data-id="1d75c62"
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
                      data-to-value="200"
                      data-from-value="0"
                    >
                      {count3}
                    </span>
                    <span className="elementor-counter-number-suffix">+</span>
                  </div>
                  <div className="elementor-counter-title">Audit Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
