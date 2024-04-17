import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export class Purchase extends Component {
  constructor() {
    super();
    this.state = {
      purchase: "",
    };
  }
  
  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((response) => {
        let statusCode = response.status; // Use lowercase for consistency
        if (statusCode === 200) {
          let purchaseData = response.data[0].purchase_guide; // Use clearer variable name
          this.setState({ purchase: purchaseData });
        } else {
          // Handle errors here (e.g., display error message)
          console.error("Error fetching purchase data:", response.statusText);
        }
      })
      .catch((error) => {
        // Handle network errors here (e.g., display a fallback message)
        console.error("Error fetching purchase data:", error);
      });
  }

  render() {
    const { purchase } = this.state; // Destructuring for cleaner code
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
              <h4 className="section-title-login">Purchase Page </h4>
              <p className="section-title-contact">
              {purchase === "" ? (
                  <span>Fetching purchase information...</span>
                ) : (
                  ReactHtmlParser(purchase)
                )}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Purchase;
