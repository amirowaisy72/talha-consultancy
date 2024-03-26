import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="swiper-wrapper" style={{ display: "flex" }}>
        <div
          className="sp-testimonial-pro-item swiper-slide"
          style={{ display: "flex" }}
        >
          <div className="sp-testimonial-pro">
            <div className="tpro-client-image tpro-image-style-two">
              <a href="https://vimeo.com/656537859" className="sp-tpro-video">
                <img
                  decoding="async"
                  src="wp-content/uploads/2021/12/tomas-gremlica.jpg"
                  width="300"
                  height="300"
                  alt="Tomas Gremlica"
                  className="tpro-img-tag tpro-grayscale-none"
                />
              </a>
            </div>
            <div style={{ marginLeft: "70px" }}>
              <h4 className="tpro-client-name">Tomas Gremlica</h4>
              <div className="tpro-client-designation-company">CZECH</div>
            </div>
          </div>
          <div className="sp-testimonial-pro">
            <div className="tpro-client-image tpro-image-style-two">
              <a href="https://vimeo.com/656537859" className="sp-tpro-video">
                <img
                  decoding="async"
                  src="wp-content/uploads/2021/12/tomas-gremlica.jpg"
                  width="300"
                  height="300"
                  alt="Tomas Gremlica"
                  className="tpro-img-tag tpro-grayscale-none"
                />
              </a>
            </div>
            <div style={{ marginLeft: "70px" }}>
              <h4 className="tpro-client-name">Amir Owaisy</h4>
              <div className="tpro-client-designation-company">
                Web developer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tpro-button-next tpro-arrow swiper-button-next vertical_center">
        <i className="fa fa-angle-right"></i>
      </div>
      <div className="tpro-button-prev tpro-arrow swiper-button-prev vertical_center">
        <i className="fa fa-angle-left"></i>
      </div>
    </>
  );
};

export default Testimonials;
