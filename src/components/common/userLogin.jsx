import React from "react"; // Only import necessary components
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import LoginImage from "../../assets/images/login.png"; // Use a descriptive name

const UserLogin = () => {
  return (
    <Container>
      <Row className="p-2">
        <Col className="shadow-sm bg-white mt-2" md={12} lg={12}>
          <Row className="justify-content-center align-items-center">
            <Col md={6} xs={12}>
              <Form className="onboardForm">
                <h4 className="section-title-login">USER SIGN IN</h4>
                <h6 className="section-sub-title">
                  Please Enter Your Mobile Number
                </h6>
                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="Enter Mobile Number"
                />
                <Button className="btn btn-block m-2 site-btn-login">
                  Next
                </Button>
              </Form>
            </Col>
            <Col md={6} xs={12} className="p-0">
              <img className="onboardBanner" src={LoginImage} alt="Login" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
