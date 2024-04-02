import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import "./style.css"; // Import CSS for styling

const GroupOfCompanies = () => {
  const companies = [
    {
      name: "A & A ASSOCIATE LLC",
      address:
        "Level 12, Rolex Tower, Sheikh Zayed Road, Near Financial Centre Metro Station, Dubai, UAE",
    },
    {
      name: "XYZ Corporation",
      address: "123 Main Street, Suite 200, New York, NY, USA",
    },
    {
      name: "ABC Enterprises",
      address: "45 Queen's Road, Central, Hong Kong",
    },
    {
      name: "DEF Ltd.",
      address: "1 Market Street, Sydney, NSW, Australia",
    },
    {
      name: "DEF Ltd.",
      address: "1 Market Street, Sydney, NSW, Australia",
    },
  ];

  return (
    <div className="group-of-companies">
      <div className="wrapper">
        <h1 className="company-heading">Group of Companies</h1>
        <div className="company-container">
          {companies.map((company, index) => (
            <div key={index} className="company-card">
              <div className="company-icon">
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faBuilding} className="fa-icon" />
                </div>
              </div>
              <div className="company-details">
                <h4 className="company-name">{company.name}</h4>
                <p className="company-address">{company.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupOfCompanies;
