
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img1 from "../../assets/img/girl.webp";
import img2 from "../../assets/img/laptop.webp";
import img3 from "../../assets/img/void.webp";
import img4 from "../../assets/img/car.webp";
import Footer from "../../components/footer/footer";
import Section4 from "../../components/section4";
import Header from "../../components/appnavbar";
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
const Menu = () => {
    return (
        <>
        <Header/>
            <div className="mt-5">
                <Container>
                    <p className="fs-4 text-black-50 fw-bold">Our Works</p>
                    <p className="font-1">Helping businesses achieve goals.<br /> Solving people’s problems</p>
                    <p className="py-3">Shakuro is a multidisciplinary design and development agency <br />
                        working with individual startups and enterprises worldwide.</p>
                    <ul className="d-flex flex-wrap gap-5">
                        <li className="list-unstyled hover-2"><a className="text-decoration-none fw-bold fs-4 text-black" href="#">Feautured</a></li>
                        <li className="list-unstyled hover-2"><a className="text-decoration-none fw-bold fs-4 text-black-50" href="#">Web</a></li>
                        <li className="list-unstyled hover-2"><a className="text-decoration-none fw-bold fs-4 text-black-50" href="#">Mobile</a></li>
                        <li className="list-unstyled hover-2"><a className="text-decoration-none fw-bold fs-4 text-black-50" href="#">Branding</a></li>
                    </ul>
                    <Container className="py-5 section-dark">
                        <Row>
                            <Col xs={12} md={6}>
                                <Testimonial
                                    img={img1}
                                    title="AJP: World’s fastest growing jiu jitsu tournament organization"
                                    author="Stan Prokopenko"
                                    role="Founder, Proko"
                                />
                                <Testimonial
                                    img={img1}
                                    title="AJP: World’s fastest growing jiu jitsu tournament organization"
                                    author="Stan Prokopenko"
                                    role="Founder, Proko"
                                />
                                <Testimonial
                                    img={img2}
                                    title="AJP: World’s fastest growing jiu jitsu tournament organization"  
                                    author="Stan Prokopenko"
                                    role="Founder, Proko"
                                />
                                <Testimonial
                                    img={img4}
                                    title="AJP: World’s fastest growing jiu jitsu tournament organization"
                                    author="Stan Prokopenko"
                                    role="Founder, Proko"
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <Testimonial
                                    img={img1}
                                    title="AJP: World’s fastest growing jiu jitsu tournament organization"
                                    author="Stan Prokopenko"
                                    role="Founder, Proko"
                                />
                                <Testimonial
                                    img={img4}
                                    title="AJP: World’s fastest growing jiu jitsu tournament organization"
                                    author="Stan Prokopenko"
                                    role="Founder, Proko"
                                />
                                <Testimonial
                                    img={img3}
                                    title="AJP: World’s fastest growing jiu jitsu tournament organization"
                                    author="Stan Prokopenko"
                                    role="Founder, Proko"
                                />
                                <Testimonial
                                    img={img3}
                                    title="AJP: World’s fastest growing jiu jitsu tournament organization"
                                    author="Stan Prokopenko"
                                    role="Founder, Proko"
                                />
                            </Col>
                        </Row>
                       
                    </Container>
                </Container>
            </div>
            <Section4/>
            <Footer/>
        </>
    )
}
export default Menu;