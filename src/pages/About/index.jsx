import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import vid2 from "../../assets/img/vid2.webm";
import Section4 from "../../components/section4";
const About =() => {
    return(
        <>
       <div className="bg-black">
         <Container className="mt-5">
            <Row>
            <p className="fs-4 text-black-50 fw-bold text-light-emphasis">About Us</p>
                    <p className="font-1 text-light">Helping businesses achieve goals.<br /> Solving people’s problems</p>
                    <p className="py-3 fs-4 text-light-emphasis">Shakuro is a multidisciplinary design and development agency <br />
                        working with individual startups and enterprises worldwide.</p>
                         <Row className="mt-4">
            <Col xs={12} sm={4} className="mb-3 mb-sm-0 text-center text-white">
              <h2 className="mb-1">150+</h2>
              <p className="mb-0 fs-6">Team Members</p>
            </Col>
            <Col xs={12} sm={4} className="mb-3 mb-sm-0 text-center text-white">
              <h2 className="mb-1">500+</h2>
              <p className="mb-0 fs-6">Completed Projects</p>
            </Col>
            <Col xs={12} sm={4} className="text-center text-white">
              <h2 className="mb-1">18 Years</h2>
              <p className="mb-0 fs-6">In the Business</p>
            </Col>
      </Row>
      </Row>
        </Container>
        </div>
        <div className="mt-5">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                    <p className="fs-3 text-black-50">Companies hire us</p>
                    <h2>When it’s time for a key change</h2>
                    <p className="fs-2">Reinvention</p>
                    <p className="text-black-50 fs-5">When businesses outgrow their markets and need to scale, we provide 
                        solutions for this growth and expansion.</p>
                    <p className="fs-2">Transformation</p>
                    <p className="text-black-50 fs-5">When established brands search for ways to reinvent themselves
                         for the modern internet culture while maintaining their personality.</p>
                    <p className="fs-2">Breakthrough</p>
                    <p className="text-black-50 fs-5">We help startup first-timers design and build their product,
                         roll it out, and get funded.</p>
                    </Col>
                   
                    <Col xs={12} md={6} className="mt-4 mt-md-0 text-center ">
                              <video  autoPlay muted loop className="w-100" src={vid2} />
                            </Col>
                
                </Row>
            </Container>
            <Section4/>
        </div>
        </>
    )
}

export default About;