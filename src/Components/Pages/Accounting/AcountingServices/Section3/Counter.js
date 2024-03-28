import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [liquidationsCount, setLiquidationsCount] = useState(0);
  const [auditsCount, setAuditsCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update counts every 50 milliseconds until reaching the target values
      if (clientsCount < 100) {
        setClientsCount(clientsCount + 1);
      }
      if (liquidationsCount < 150) {
        setLiquidationsCount(liquidationsCount + 1);
      }
      if (auditsCount < 200) {
        setAuditsCount(auditsCount + 1);
      }
    }, 50);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [clientsCount, liquidationsCount, auditsCount]);

  return (
    <>
      <section
        className="elementor-section elementor-inner-section elementor-element elementor-element-44488b6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="44488b6"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-980cdb3"
            data-id="980cdb3"
            data-element_type="column"
            data-settings='{"background_background":"classic"}'
            style={{backgroundColor:"#209DC2", color: "white"}}
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-193c443 elementor-view-default elementor-widget elementor-widget-icon"
                data-id="193c443"
                data-element_type="widget"
                data-widget_type="icon.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-icon-wrapper">
                    <div className="elementor-icon">
                    <FontAwesomeIcon style={{color:"white"}} icon={faUsers} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-98aeb3e elementor-widget elementor-widget-counter"
                data-id="98aeb3e"
                data-element_type="widget"
                data-widget_type="counter.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-counter">
                    <div className="elementor-counter-number-wrapper">
                      <span className="elementor-counter-number-prefix" />
                      <span
                        className="elementor-counter-number"
                        data-duration={2000}
                        data-to-value={clientsCount}
                        data-from-value={0}
                        data-delimiter=","
                      >
                        {clientsCount}
                      </span>
                      <span className="elementor-counter-number-suffix" />
                    </div>
                    <div className="elementor-counter-title">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-980cdb3"
            data-id="980cdb3"
            data-element_type="column"
            data-settings='{"background_background":"classic"}'
            style={{backgroundColor:"#23CDD0", color: "white"}}
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-193c443 elementor-view-default elementor-widget elementor-widget-icon"
                data-id="193c443"
                data-element_type="widget"
                data-widget_type="icon.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-icon-wrapper">
                    <div className="elementor-icon">
                    <FontAwesomeIcon  style={{color: "white"}} icon={faHeart} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-98aeb3e elementor-widget elementor-widget-counter"
                data-id="98aeb3e"
                data-element_type="widget"
                data-widget_type="counter.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-counter">
                    <div className="elementor-counter-number-wrapper">
                      <span className="elementor-counter-number-prefix" />
                      <span
                        className="elementor-counter-number"
                        data-duration={2000}
                        data-to-value={liquidationsCount}
                        data-from-value={0}
                        data-delimiter=","
                      >
                        {liquidationsCount}
                      </span>
                      <span className="elementor-counter-number-suffix" />
                    </div>
                    <div className="elementor-counter-title">Liquidations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-980cdb3"
            data-id="980cdb3"
            data-element_type="column"
            data-settings='{"background_background":"classic"}'
            style={{backgroundColor:"#21D48B", color: "white"}}
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-193c443 elementor-view-default elementor-widget elementor-widget-icon"
                data-id="193c443"
                data-element_type="widget"
                data-widget_type="icon.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-icon-wrapper">
                    <div className="elementor-icon">
                    <FontAwesomeIcon style={{color: "white"}} icon={faStar} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-98aeb3e elementor-widget elementor-widget-counter"
                data-id="98aeb3e"
                data-element_type="widget"
                data-widget_type="counter.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-counter">
                    <div className="elementor-counter-number-wrapper">
                      <span className="elementor-counter-number-prefix" />
                      <span
                        className="elementor-counter-number"
                        data-duration={2000}
                        data-to-value={auditsCount}
                        data-from-value={0}
                        data-delimiter=","
                      >
                        {auditsCount}
                      </span>
                      <span className="elementor-counter-number-suffix" />
                    </div>
                    <div className="elementor-counter-title">Audits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar code for Liquidations and Audits */}
        </div>
      </section>
    </>
  );
};

export default Counter;
