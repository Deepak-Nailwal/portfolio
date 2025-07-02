import { useState } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/img/image.jpeg';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid className="px-4 mt-5 sticky-header">
        <Row className="align-items-center justify-content-between">
          <Col xs="6" md="4">
            <a href="#"><img src={logo} alt="logo-1" className="img-fluid responsive-logo" style={{height:'80px'}} /></a>
          </Col>
          <Col xs="6" md="4" className="text-end">
            <Button variant="" onClick={handleShow}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24">
                <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
              </svg>
            </Button>
          </Col>
        </Row>
      </Container>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="offcanvass-wide hlo">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            <ul className="list-unstyled mb-4">
              <li>
                <NavLink className='text-dark text-decoration-none fs-1' to="/menu">Menu</NavLink>
              </li>
              <li className="mt-3">
                <NavLink className='text-dark text-decoration-none fs-1' to="/blog">Blog</NavLink>
              </li>
              <li className="mt-3">
                <NavLink className='text-dark text-decoration-none fs-1' to="/about">About Us</NavLink>
              </li>
              <li className="mt-3">
                <NavLink className='text-dark text-decoration-none fs-1' to="/conceptzilla">Conceptzilla</NavLink>
              </li>
              <li className="mt-3">
                <button className="rounded-pill px-4 py-3 text-white">
                  <NavLink className='  text-decoration-none' to='/touch'>Get in Touch</NavLink>
                </button>
              </li>
            </ul>
            <Row>
              <Col md={4} sm={12} className="mb-4">
                <h6>Service</h6>
                <p>
                  Identity & Branding, Web Development<br />
                  UI/UX Design, Frontend Dev<br />
                  Mobile & iOS Apps<br />
                  Python, Android, C#, .NET, ROR<br />
                  React JS, WordPress<br />
                  Support & Maintenance
                </p>
              </Col>
              <Col md={4} sm={12} className="mb-4">
                <h6>Industries</h6>
                <p>
                  E-Learning, Fintech, Healthcare, Web3<br />
                  Social Platforms, SaaS, Real Estate, Gaming, E-Commerce
                </p>
              </Col>
              <Col md={4} sm={12} className="mb-4">
                <h6>Social</h6>
                <ul className="d-flex flex-column gap-1 p-0">
                  <li className="list-unstyled">X (Twitter)</li>
                  <li className="list-unstyled">Dribbble</li>
                  <li className="list-unstyled">Instagram</li>
                  <li className="list-unstyled">YouTube</li>
                  <li className="list-unstyled">LinkedIn</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
