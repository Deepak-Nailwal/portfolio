import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const services = [
  'Web Development',
  'UI Design',
  'UX Design',
  'Identify & Branding',
  'Mobile App Development',
  'iOS Development',
  'Front End Development',
];

const industries = [
  'E-Learning',
  'Healthcare',
  'Fintech',
  'Real Estate',
  'E-commerce',
  'Travel',
  'Logistics',
  'Media',
];

const companyLinks = [
  'About Us',
  'Careers',
  'Blog',
  'Contact',
  'Privacy Policy',
  'Terms of Service',
];

const Footer = () => {
  return (
    <footer className="bg-dark text-white-50 py-5">
      <Container>
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <h6 className="text-white mb-3">Services</h6>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-decoration-none text-white small">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 small">© 2025 Shakuro. All rights reserved.</p>
          </Col>

          <Col md={6}>
            <h6 className="text-white mb-3">Industries</h6>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a href="#" className="text-decoration-none text-white small">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>

            <h6 className="text-white mt-5 mb-3">Company</h6>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-decoration-none text-white small">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
