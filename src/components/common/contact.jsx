import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col md={6} className="shadow-sm bg-white p-4 rounded">
          <h4 className="text-center mb-4">CONTACT WITH US</h4>
          <h6 className="text-center mb-4">Please Contact With Us</h6>
          <Form>
            <Form.Group controlId="formBasicMobile">
              <Form.Control type="text" placeholder="Enter Mobile Number" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Control type="text" as="textarea" rows={3} placeholder="Enter Your Message" />
            </Form.Group>
            <Button variant="primary" block className="mt-3">
              Send
            </Button>
          </Form>
        </Col>
        <Col md={6} className="d-none d-md-block">
          <br />
          <br />
          <p className="section-title-contact mb-4">
            1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
            <br />
            Email: Support@easylearningbd.com
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
