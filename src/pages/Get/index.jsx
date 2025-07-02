import React, { useState } from "react";
import { Col, Container, Row, Button, Form, InputGroup, Card } from "react-bootstrap";
import Section4 from "../../components/section4";
import Footer from "../../components/footer/footer";

const Touch = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="mb-4">
          <Col>
            <h2 className="text-center fw-bold">💬 Get in Touch</h2>
            <p className="text-center text-muted">
              Let’s understand your project before we begin. We'll review your input and schedule
              <br />
              a free estimation call with our team.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="p-4 shadow-lg border-0 rounded-4 bg-light">
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label className="fw-semibold">First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your first name"
                      className="rounded-3"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="validationCustom02">
                    <Form.Label className="fw-semibold">Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your last name"
                      className="rounded-3"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="validationCustomUsername">
                    <Form.Label className="fw-semibold">Username</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text>@</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Choose a username"
                        required
                        className="rounded-3"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="validationCustom03">
                    <Form.Label className="fw-semibold">City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your city"
                      required
                      className="rounded-3"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="validationCustom04">
                    <Form.Label className="fw-semibold">State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your state"
                      required
                      className="rounded-3"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="validationCustom05">
                    <Form.Label className="fw-semibold">Zip Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="123456"
                      required
                      className="rounded-3"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Check
                      required
                      label="I agree to the terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>

                  <Button type="submit" variant="dark" className="w-100 rounded-pill">
                    🚀 Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Section4 />
      <Footer />
    </>
  );
};

export default Touch;
