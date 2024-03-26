import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserTie, FaBriefcase, FaHome, FaBuilding, FaIdCard, FaFileAlt } from 'react-icons/fa'; // Import icons from react-icons library

const Index = () => {
  return (
    <Container className="py-5">
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {/* Investor Visa */}
        <Col>
          <div className="card h-100 d-flex align-items-center justify-content-center p-4">
            <FaUserTie className="fs-4 fs-lg-5 mb-3 text-primary" />
            <h3 className="card-title text-center">Investor Visa</h3>
          </div>
        </Col>
        
        {/* Work Visa for your team */}
        <Col>
          <div className="card h-100 d-flex align-items-center justify-content-center p-4">
            <FaBriefcase className="fs-4 fs-lg-5 mb-3 text-primary" />
            <h3 className="card-title text-center">Work Visa for your team</h3>
          </div>
        </Col>
        
        {/* Residence Permits for your family */}
        <Col>
          <div className="card h-100 d-flex align-items-center justify-content-center p-4">
            <FaHome className="fs-4 fs-lg-5 mb-3 text-primary" />
            <h3 className="card-title text-center">Residence Permits for your family</h3>
          </div>
        </Col>
        
        {/* Licensing & Documentation */}
        <Col>
          <div className="card h-100 d-flex align-items-center justify-content-center p-4">
            <FaBuilding className="fs-4 fs-lg-5 mb-3 text-primary" />
            <h3 className="card-title text-center">Licensing & Documentation</h3>
          </div>
        </Col>
        
        {/* Labour Cards */}
        <Col>
          <div className="card h-100 d-flex align-items-center justify-content-center p-4">
            <FaIdCard className="fs-4 fs-lg-5 mb-3 text-primary" />
            <h3 className="card-title text-center">Labour Cards</h3>
          </div>
        </Col>
        
        {/* Immigration Cards */}
        <Col>
          <div className="card h-100 d-flex align-items-center justify-content-center p-4">
            <FaBuilding className="fs-4 fs-lg-5 mb-3 text-primary" />
            <h3 className="card-title text-center">Immigration Cards</h3>
          </div>
        </Col>
        
        {/* Approvals from Government */}
        <Col>
          <div className="card h-100 d-flex align-items-center justify-content-center p-4">
            <FaBuilding className="fs-4 fs-lg-5 mb-3 text-primary" />
            <h3 className="card-title text-center">Approvals from Government</h3>
          </div>
        </Col>
        
        {/* Renewal of Business License */}
        <Col>
          <div className="card h-100 d-flex align-items-center justify-content-center p-4">
            <FaFileAlt className="fs-4 fs-lg-5 mb-3 text-primary" />
            <h3 className="card-title text-center">Renewal of Business License</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
