import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

import logoSelect from "../../assets/img/logo-select.svg";
import logoCGMA from "../../assets/img/logo-cgma.svg";
import logoProko from "../../assets/img/logo-proko.svg";
import logoCubebrush from "../../assets/img/logo-cubebrush.svg";
import logoSwyft from "../../assets/img/logo-swyft.svg";
import logoZad from "../../assets/img/logo-zad.svg";
import logoGoogle from "../../assets/img/logo-google.svg";
import logoAurox from "../../assets/img/logo-aurox.svg";

// Array of logo data
const logos = [
  { src: logoSelect, alt: "Select" },
  { src: logoCGMA, alt: "CGMA" },
  { src: logoProko, alt: "Proko" },
  { src: logoCubebrush, alt: "Cubebrush" },
  { src: logoSwyft, alt: "Swyft" },
  { src: logoZad, alt: "Zad" },
  { src: logoGoogle, alt: "Google" },
  { src: logoAurox, alt: "Aurox" },
  { src: logoGoogle, alt: "Google" },
  { src: logoAurox, alt: "Aurox" },
];

const Section3 = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Left Text */}
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <h2 className="mb-4">Trust is earned, not given</h2>
          <p className="fs-5">
            Every project is a chance to change someone’s life. <br />
            Courtesy of our clients, we impact millions of lives <br />
            and create a better future for everyone.
          </p>
          <a href="#">
            <Button className="rounded-pill px-5 py-2 mt-3" variant="outline-dark">
              Read all Testimonials
            </Button>
          </a>
        </Col>

        {/* Logo Grid */}
        <Col xs={12} md={6}>
          <div className="p-4 bg-white rounded-4 shadow">
            <Row xs={2} sm={3} md={3} className="g-3">
              {logos.concat(logos).map((logo, index) => (
                <Col key={index} className="text-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="img-fluid logo-animated"
                    style={{ maxHeight: "50px", objectFit: "contain" }}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section3;
