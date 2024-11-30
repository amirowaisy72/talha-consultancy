import React from "react";
import "./styles.css"

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "John Doe",
      designation: "CEO, ABC Corp",
      testimonial:
        "This team has been incredible. Their services are unmatched, and they truly care about delivering quality.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Jane Smith",
      designation: "Marketing Manager, XYZ Ltd",
      testimonial:
        "Professional and reliable! They exceeded our expectations and helped us achieve our goals efficiently.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Michael Brown",
      designation: "Entrepreneur",
      testimonial:
        "I highly recommend them. They provide outstanding support and attention to detail. A joy to work with!",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/201/201634.png",
      name: "Emily Davis",
      designation: "Creative Director, Studio Pro",
      testimonial:
        "Their creativity and commitment to excellence are second to none. Absolutely amazing experience!",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Chris Wilson",
      designation: "Freelancer",
      testimonial:
        "They delivered beyond my expectations. I am thoroughly impressed with their professionalism.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/201/201634.png",
      name: "Sarah Miller",
      designation: "Product Manager, Tech Solutions",
      testimonial:
        "A team of experts who are easy to work with and truly understand client needs. Highly recommended!",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Daniel White",
      designation: "Business Consultant",
      testimonial:
        "Working with them was seamless. Their insights and guidance made a huge impact on our project.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/201/201634.png",
      name: "Olivia Taylor",
      designation: "Startup Founder",
      testimonial:
        "This team is amazing. They helped us launch our product and ensured everything went smoothly.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      name: "Liam Johnson",
      designation: "Investor",
      testimonial:
        "Their attention to detail and understanding of the market are truly impressive. Exceptional service!",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/201/201634.png",
      name: "Sophia Martinez",
      designation: "Designer",
      testimonial:
        "Highly creative and professional! I loved every step of the collaboration with this team.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body text-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-circle mb-3"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                        <h5 className="card-title mb-0">{testimonial.name}</h5>
                        <p className="text-muted">{testimonial.designation}</p>
                        <p className="card-text text-secondary">
                          <i>"{testimonial.testimonial}"</i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
