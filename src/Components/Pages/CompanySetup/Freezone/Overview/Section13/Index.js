import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  return (
    <>
      <section
        data-id="32574b68"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
        className="elementor-section elementor-top-section elementor-element elementor-element-32574b68 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default nitro-lazy"
        style={{
          background: "linear-gradient(to right, #333333, #dddddd)", // Adjust colors as needed
          padding: "50px",
        }}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4e992b09"
            data-id="4e992b09"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-7171bd2b elementor-widget elementor-widget-heading"
                data-id="7171bd2b"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2
                    className="elementor-heading-title elementor-size-default"
                    style={{ color: "white" }}
                  >
                    Have a question?
                    <br />
                    Get in touch today
                  </h2>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-1a08737b elementor-widget elementor-widget-heading"
                data-id="1a08737b"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h5
                    className="elementor-heading-title elementor-size-default"
                    style={{ color: "white" }}
                  >
                    Our experts are always available to answer your queries.
                  </h5>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <a
                  className="elementor-button elementor-button-link elementor-size-sm"
                  href="https://api.whatsapp.com/send?phone=+971564086728&amp;text=Hello..."
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    marginBottom: "10px", // Add margin to create space between buttons
                  }}
                >
                  <FaWhatsapp style={{ marginRight: "5px" }} />{" "}
                  {/* WhatsApp icon */}
                  WhatsApp {/* Button text */}
                </a>
                <a
                  className="elementor-button elementor-button-link elementor-size-sm"
                  href="tel:+971564086728"
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    padding: "8px 20px",
                    border: "2px solid white",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontSize: "18px", // Increase font size
                  }}
                >
                  <span
                    className="elementor-button-content-wrapper"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <span
                      className="elementor-button-icon elementor-align-icon-left"
                      style={{ marginRight: "5px", color: "white" }} // Set color to white
                    >
                      <FaPhoneAlt />
                    </span>
                    <span
                      style={{ color: "white" }}
                      className="elementor-button-text"
                    >
                      +971 56 408 6728
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
