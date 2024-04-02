import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // Import custom styles

const Index = () => {
  // Array to store article information
  const articles = [
    {
      title: "Sales Executive",
      link: "https://www.aaconsultancy.ae/dubai/sales-executive/",
      description:
        "Sales Executive A & A Associates LLC Dubai, UAE Duties and responsibilities: Cold calling potential customers Researching the target market",
      date: "Mar 29, 2022",
    },
    {
      title: "Account Manager",
      link: "https://www.aaconsultancy.ae/dubai/account-manager/",
      description:
        "Account Manager A & A Associates LLC Dubai, UAE Responsibilities : Manage the organization relationship with existing customers as well",
      date: "Mar 29, 2022",
    },
    {
      title: "Receptionist cum Secretary",
      link: "https://www.aaconsultancy.ae/dubai/receptionist-cum-secretary/",
      description:
        "Receptionist cum Secretary A & A Associates LLC Dubai, UAE Job description / Role: Employment : Full Time To provide",
      date: "Mar 29, 2022",
    },
  ];

  return (
    <div className="container">
      {/* Mapping through each article and displaying it within a Bootstrap card */}
      {articles.map((article, index) => (
        <div key={index} className="card my-3 animated-card">
          <div className="card-body">
            <h5 className="card-title text-success">{article.title}</h5>
            <p className="card-text">{article.description}</p>
          </div>
          <div className="card-footer text-muted">
            <small>{article.date}</small>
          </div>
        </div>
      ))}
      <div
        className="elementor-element elementor-element-4ac00df elementor-widget elementor-widget-text-editor"
        data-id="4ac00df"
        data-element_type="widget"
        data-widget_type="text-editor.default"
      >
        <div className="elementor-widget-container">
          <p>
            send your CV directly to us{" "}
            <a href="/cdn-cgi/l/email-protection#f39b81b39292909c9d80869f87929d908add9296">
              &nbsp;
              <span
                className="__cf_email__"
                data-cfemail="abc3d9ebcacac8c4c5d8dec7dfcac5c8d285cace"
              >
                [email&nbsp;protected]
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
