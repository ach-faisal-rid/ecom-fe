import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Purchase extends Component {
  constructor() {
    super();
    this.state = {
      purchase: "",
      purchaseFromLocalStorage: "", // State for localStorage value
    };
  }

  componentDidMount() {
    // Check localStorage for purchase information first
    const purchaseFromLocalStorage = localStorage.getItem("purchaseGuide");
    if (purchaseFromLocalStorage) {
      this.setState({ purchase: purchaseFromLocalStorage });
    } else {
      // Fetch from API if not found in localStorage
      axios
        .get(AppURL.AllSiteInfo)
        .then((response) => {
          let statusCode = response.status;
          if (statusCode === 200) {
            let purchaseData = response.data[0].purchase_guide;
            this.setState({ purchase: purchaseData });
            localStorage.setItem("purchaseGuide", purchaseData); // Store in localStorage
          } else {
            console.error("Error fetching purchase data:", response.statusText);
            toast.error("Failed to fetch purchase information.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              toastId: "purchaseFetchError", // Unique ID for potential dismissal
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching purchase data:", error);
          toast.error("Network error. Please try again later.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            toastId: "purchaseNetworkError", // Unique ID for potential dismissal
          });
        });
    }
  }

  render() {
    const { purchase } = this.state;
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
              <h4 className="section-title-login">Purchase Page</h4>
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
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Purchase;
