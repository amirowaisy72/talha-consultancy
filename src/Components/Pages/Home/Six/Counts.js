import React, { useState, useEffect } from "react";

const Counts = () => {
  const [countCustomers, setCountCustomers] = useState(0);
  const [countAuditsCompleted, setCountAuditsCompleted] = useState(0);
  const [countDedicatedTeam, setCountDedicatedTeam] = useState(0);

  useEffect(() => {
    const intervalCustomers = setInterval(() => {
      if (countCustomers < 200) {
        setCountCustomers(prevCount => prevCount + 1);
      }
    }, 20); // Adjust the interval for smoother animation

    const intervalAuditsCompleted = setInterval(() => {
      if (countAuditsCompleted < 150) {
        setCountAuditsCompleted(prevCount => prevCount + 1);
      }
    }, 20); // Adjust the interval for smoother animation

    const intervalDedicatedTeam = setInterval(() => {
      if (countDedicatedTeam < 100) {
        setCountDedicatedTeam(prevCount => prevCount + 1);
      }
    }, 20); // Adjust the interval for smoother animation

    return () => {
      clearInterval(intervalCustomers);
      clearInterval(intervalAuditsCompleted);
      clearInterval(intervalDedicatedTeam);
    };
  }, [countCustomers, countAuditsCompleted, countDedicatedTeam]);

  return (
    <div className="elementor-container elementor-column-gap-default">
      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-eb088fb" data-id="eb088fb" data-element_type="column">
        <div className="elementor-widget-wrap"></div>
      </div>
      <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b9f41d6" data-id="b9f41d6" data-element_type="column" data-settings='{"background_background":"classic"}'>
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-element-5ee7f51 elementor-widget-mobile__width-initial elementor-widget elementor-widget-counter" data-id="5ee7f51" data-element_type="widget" data-widget_type="counter.default">
            <div className="elementor-widget-container">
              <div className="elementor-counter">
                <div className="elementor-counter-number-wrapper">
                  <span className="elementor-counter-number-prefix"></span>
                  <span className="elementor-counter-number" data-duration="2000" data-to-value="2500" data-from-value="0">
                    {countCustomers}
                  </span>
                  <span className="elementor-counter-number-suffix">+</span>
                </div>
                <div className="elementor-counter-title">Customers</div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-39c7126 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="39c7126" data-element_type="widget" data-widget_type="divider.default">
            <div className="elementor-widget-container">
              <div className="elementor-divider">
                <span className="elementor-divider-separator"></span>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-8d41259 elementor-widget-mobile__width-initial elementor-widget elementor-widget-counter" data-id="8d41259" data-element_type="widget" data-widget_type="counter.default">
            <div className="elementor-widget-container">
              <div className="elementor-counter">
                <div className="elementor-counter-number-wrapper">
                  <span className="elementor-counter-number-prefix"></span>
                  <span className="elementor-counter-number" data-duration="2000" data-to-value="5000" data-from-value="0">
                    {countAuditsCompleted}
                  </span>
                  <span className="elementor-counter-number-suffix">+</span>
                </div>
                <div className="elementor-counter-title">Audits Completed</div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-e79575e elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="e79575e" data-element_type="widget" data-widget_type="divider.default">
            <div className="elementor-widget-container">
              <div className="elementor-divider">
                <span className="elementor-divider-separator"></span>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-ecda8e8 elementor-widget-mobile__width-initial elementor-widget elementor-widget-counter" data-id="ecda8e8" data-element_type="widget" data-widget_type="counter.default">
            <div className="elementor-widget-container">
              <div className="elementor-counter">
                <div className="elementor-counter-number-wrapper">
                  <span className="elementor-counter-number-prefix"></span>
                  <span className="elementor-counter-number" data-duration="2000" data-to-value="100" data-from-value="0">
                    {countDedicatedTeam}
                  </span>
                  <span className="elementor-counter-number-suffix">+</span>
                </div>
                <div className="elementor-counter-title">Dedicated Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counts;
