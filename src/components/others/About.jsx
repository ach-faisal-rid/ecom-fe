import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";

class About extends Component {
  constructor() {
    super();
    this.state = {
      about: "",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((response) => {
        let statusCode = response.status; // Use lowercase for consistency
        if (statusCode === 200) {
          let aboutData = response.data[0].about; // Use clearer variable name
          this.setState({ about: aboutData });
        } else {
          // Handle errors here (e.g., display error message)
          console.error("Error fetching about data:", response.statusText);
        }
      })
      .catch((error) => {
        // Handle network errors here (e.g., display a fallback message)
        console.error("Error fetching about data:", error);
      });
  }

  render() {
    const { about } = this.state; // Destructuring for cleaner code
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <h4 className="section-title-login">About Us Page </h4>
              <p className="section-title-contact">
                {about || ( // Display default content if about is empty
                  <span>Fetching about information...</span>
                )}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default About;
