import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import vid1 from "../../assets/img/logo-video.mp4";

const industries = [
  "Gaming", "E-learning", "Social Platform", "Fintech",
  "Healthcare", "Web 3", "Real Estate", "SaaS", "E-commerce"
];

const Section2 = () => {
  return (
    <Container  className="py-5">
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <h1 className="fw-bold">
            We are committed to finding <br className="d-none d-md-block" />
            innovative and unconventional <br className="d-none d-md-block" />
            solutions. Pushing boundaries <br className="d-none d-md-block" />
            to exceed client goals.
          </h1>

          <ul className="d-flex flex-wrap mt-4 ps-0">
            {industries.map((item, idx) => (
              <li key={idx} className="list-unstyled">
                <Button className="rounded-pill px-4 py-2 m-2" variant="outline-dark">
                  {item}
                </Button>
              </li>
            ))}
          </ul>

          <Row className="mt-4">
            <Col xs={12} sm={4} className="mb-3 mb-sm-0 text-center">
              <h2 className="mb-1">150+</h2>
              <p className="mb-0 fs-6">Team Members</p>
            </Col>
            <Col xs={12} sm={4} className="mb-3 mb-sm-0 text-center">
              <h2 className="mb-1">500+</h2>
              <p className="mb-0 fs-6">Completed Projects</p>
            </Col>
            <Col xs={12} sm={4} className="text-center">
              <h2 className="mb-1">18 Years</h2>
              <p className="mb-0 fs-6">In the Business</p>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={6} className="mt-4 mt-md-0 text-center ">
          <video  autoPlay muted loop className="w-100" src={vid1} />
        </Col>
      </Row>
    </Container>
  );
};

export default Section2;
