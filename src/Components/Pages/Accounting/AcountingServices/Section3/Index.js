import React from "react";
import Counter from "./Counter";

const Index = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-1fecd15 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="1fecd15"
        data-element_type="section"
      >
        {" "}
        <div className="elementor-container elementor-column-gap-default">
          {" "}
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-880b64f"
            data-id="880b64f"
            data-element_type="column"
          >
            {" "}
            <div className="elementor-widget-wrap elementor-element-populated">
              {" "}
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-f126692 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="f126692"
                data-element_type="section"
              >
                {" "}
                <div className="elementor-container elementor-column-gap-default">
                  {" "}
                  <div
                    className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-eb5bc26"
                    data-id="eb5bc26"
                    data-element_type="column"
                    data-settings='{"background_background":"classic"}'
                  >
                    {" "}
                    <div className="elementor-widget-wrap elementor-element-populated">
                      {" "}
                      <div
                        className="elementor-element elementor-element-64bd5fe elementor-widget elementor-widget-text-editor"
                        data-id="64bd5fe"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        {" "}
                        <div className="elementor-widget-container">
                          {" "}
                          <p>
                            <a
                              href="https://www.aaconsultancy.ae/"
                              target="_blank"
                              rel="noopener"
                            >
                              <strong>A&amp;A Associate</strong>
                            </a>{" "}
                            is providing accounting support for more than 250
                            clients in Trading, Construction and Real estate,
                            Healthcare, Logistics and other services.
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </section>{" "}
             <Counter />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
};

export default Index;
