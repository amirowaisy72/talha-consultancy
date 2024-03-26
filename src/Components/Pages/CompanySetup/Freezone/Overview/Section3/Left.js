import React, { useState, useEffect } from "react";
import { FaUsers, FaLanguage, FaUserFriends } from 'react-icons/fa';

const Left = () => {
  const [teamCount, setTeamCount] = useState(0);
  const [languagesCount, setLanguagesCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the counters until they reach their final values
      if (teamCount < 100) {
        setTeamCount(teamCount + 1);
      }
      if (languagesCount < 15) {
        setLanguagesCount(languagesCount + 1);
      }
      if (clientsCount < 10000) {
        setClientsCount(clientsCount + 1);
      }
    }, 20); // Adjust the interval as needed

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [teamCount, languagesCount, clientsCount]);

  return (
    <>
      <div
        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1d14e830"
        data-id="1d14e830"
        data-element_type="column"
      >
        <div className="elementor-widget-wrap elementor-element-populated">
          <section
            className="elementor-section elementor-inner-section elementor-element elementor-element-39d2e8be elementor-section-full_width elementor-section-height-default elementor-section-height-default"
            data-id="39d2e8be"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-15688299"
                data-id="15688299"
                data-element_type="column"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-3dc13bf elementor-widget elementor-widget-image"
                    data-id="3dc13bf"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                    <FaUsers size={95} />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-1ed1b9ca elementor-widget elementor-widget-counter"
                    data-id="1ed1b9ca"
                    data-element_type="widget"
                    data-widget_type="counter.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-counter">
                        <div className="elementor-counter-number-wrapper">
                          <span className="elementor-counter-number-prefix"></span>
                          <span className="elementor-counter-number">
                            {teamCount}
                          </span>
                          <span className="elementor-counter-number-suffix">
                            +
                          </span>
                        </div>
                        <div className="elementor-counter-title">
                          Dedicated Team
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-15688299"
                data-id="15688299"
                data-element_type="column"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-3dc13bf elementor-widget elementor-widget-image"
                    data-id="3dc13bf"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                    <FaLanguage size={95} />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-1ed1b9ca elementor-widget elementor-widget-counter"
                    data-id="1ed1b9ca"
                    data-element_type="widget"
                    data-widget_type="counter.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-counter">
                        <div className="elementor-counter-number-wrapper">
                          <span className="elementor-counter-number-prefix"></span>
                          <span className="elementor-counter-number">
                            {teamCount}
                          </span>
                          <span className="elementor-counter-number-suffix">
                            +
                          </span>
                        </div>
                        <div className="elementor-counter-title">
                          Languages Spoken
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-15688299"
                data-id="15688299"
                data-element_type="column"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-3dc13bf elementor-widget elementor-widget-image"
                    data-id="3dc13bf"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                    <FaUserFriends size={95} />
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-1ed1b9ca elementor-widget elementor-widget-counter"
                    data-id="1ed1b9ca"
                    data-element_type="widget"
                    data-widget_type="counter.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-counter">
                        <div className="elementor-counter-number-wrapper">
                          <span className="elementor-counter-number-prefix"></span>
                          <span className="elementor-counter-number">
                            {teamCount}
                          </span>
                          <span className="elementor-counter-number-suffix">
                            +
                          </span>
                        </div>
                        <div className="elementor-counter-title">Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Left;
