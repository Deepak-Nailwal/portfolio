import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import clutchLogo from "../../assets/img/clutch.svg";
import iconStar from "../../assets/img/icon.svg";

const Section4 = () => {
  return (
    <div className="bg-black text-white py-5">
      <Container>
        <Row className="align-items-start">
          <Col xs={12} md={6} className="mb-5">
            <h1 className="heading mb-4">Have an idea? <br />We can help.</h1>
            <div className="mb-4">
              <Button className="rounded-pill py-3 px-4 me-3" variant="light">
                Start your Project
              </Button>
              <a href="mailto:nailwaldivyanshu76@gamil.com" className="d-block mt-4 text-white text-decoration-underline">
                nailwaldivyanshu76@gmail.com
              </a>
            </div>

            <ul className="d-flex flex-wrap mt-5 ps-0">
              {["X (Twitter)", "Dribbble", "Instagram", "YouTube", "LinkedIn"].map((platform, idx) => (
                <li key={idx} className="list-unstyled me-4 mb-2">
                  <a href="#" className="text-white text-decoration-none">{platform}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={12} sm={6} className="mb-4">
                <h5 className="fw-bold">United States</h5>
                <p className="text-white-50 mb-0">16192 Coastal Highway,</p>
                <p className="text-white-50">Lewes, DE 19958</p>
              </Col>
              <Col xs={12} sm={6} className="mb-4">
                <h5 className="fw-bold">United Arab Emirates</h5>
                <p className="text-white-50 mb-0">DSO-IFZA, Dubai Digital Park,</p>
                <p className="text-white-50">Dubai Silicon Oasis</p>
              </Col>
            </Row>

            <Row className="g-3 mt-2">
              {[...Array(4)].map((_, i) => (
                <Col xs={6} sm={3} key={i}>
                  <img src={clutchLogo} alt="Clutch" className="img-fluid px-1 logo-animated" />
                </Col>
              ))}
            </Row>
            <div className="mt-4">
              <Button className="rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-start bg-dark">
                <img src={iconStar} alt="Rating icon" />
                <div>
                  <strong>5.0 ⭐</strong><br />
                  <small>Based on 59 Clutch reviews</small>
                </div>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section4;
