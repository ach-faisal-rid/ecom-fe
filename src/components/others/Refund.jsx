import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

class Refund extends Component {
  constructor() {
    super();
    this.state = {
      refund: "",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((response) => {
        let statusCode = response.status; // Use lowercase for consistency
        if (statusCode === 200) {
          let refundData = response.data[0].refund; // Use clearer variable name
          this.setState({ refund: refundData });
        } else {
          // Handle errors here (e.g., display error message)
          console.error("Error fetching refund data:", response.statusText);
        }
      })
      .catch((error) => {
        // Handle network errors here (e.g., display a fallback message)
        console.error("Error fetching refund data:", error);
      });
  }

  render() {
    const { refund } = this.state; // Destructuring for cleaner code
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
              <h4 className="section-title-login">Refund Page </h4>
              <p className="section-title-contact">
                {refund === "" ? (
                  <span>Fetching refund information...</span>
                ) : (
                  ReactHtmlParser(refund)
                )}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Refund;
