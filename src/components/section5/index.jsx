import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img1 from "../../assets/img/ZAD-banner.webp";
import img2 from "../../assets/img/laptop.webp";
import img3 from "../../assets/img/void.webp";
import img4 from "../../assets/img/car.webp";

const Testimonial = ({ img, title, text, author, role }) => (
  <div className="mb-5">
    <a href="#">
      <img className="img-fluid  logo-animated" src={img} alt="testimonial" />
    </a>
    <h4 className="mt-4">{title}</h4>
    <p className="fs-6 mt-2">{text}</p>
    <a className="text-decoration-none text-dark" href="#">
      <h6 className="mb-0">{author}</h6>
      <small>{role}</small>
    </a>
  </div>
);

const Section5 = () => {
  const content = `As a team that consists of avid jiu jitsu practitioners, this was a dream project for us and a chance to give back to the organization that grows our sport like no other league on the planet.`;

  return (
    <Container className="py-5 section-dark">
      <Row>
        <Col xs={12} md={6}>
          <Testimonial
            img={img1}
            title="AJP: World’s fastest growing jiu jitsu tournament organization"
            text={content}
            author="Stan Prokopenko"
            role="Founder, Proko"
          />
          <Testimonial
            img={img1}
            title="AJP: World’s fastest growing jiu jitsu tournament organization"
            text={content}
            author="Stan Prokopenko"
            role="Founder, Proko"
          />
          <Testimonial
            img={img2}
            title="AJP: World’s fastest growing jiu jitsu tournament organization"
            text={content}
            author="Stan Prokopenko"
            role="Founder, Proko"
          />
          <Testimonial
            img={img2}
            title="AJP: World’s fastest growing jiu jitsu tournament organization"
            text={content}
            author="Stan Prokopenko"
            role="Founder, Proko"
          />
        </Col>
        <Col xs={12} md={6}>
          <Testimonial
            img={img3}
            title="AJP: World’s fastest growing jiu jitsu tournament organization"
            text={content}
            author="Stan Prokopenko"
            role="Founder, Proko"rounded-pill
            className=''
                      />
          <Testimonial
            img={img4}
            title="AJP: World’s fastest growing jiu jitsu tournament organization"
            text={content}
            author="Stan Prokopenko"
            role="Founder, Proko"
          />
          <Testimonial
            img={img4}
            title="AJP: World’s fastest growing jiu jitsu tournament organization"
            text={content}
            author="Stan Prokopenko"
            role="Founder, Proko"
          />
          <Testimonial
            img={img2}
            title="AJP: World’s fastest growing jiu jitsu tournament organization"
            text={content}
            author="Stan Prokopenko"
            role="Founder, Proko"
          />
        </Col>
      </Row>
      <Row className="mt-5 align-items-center text-center text-md-start">
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h5>
            If you are ready for a change or have an idea you believe in,
            let’s talk about it. Contact us and stand by for a quick reply.
          </h5>
        </Col>
        <Col xs={12} md={6}>
          <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-center gap-3">
            <a href="#">
              <Button className="rounded-pill px-4 py- 2" variant="outline-dark">
                Get in Touch
              </Button>
            </a>
            <a href="#">
              <Button className="text-dark fw-bold" variant="link">
                See some work
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section5;
