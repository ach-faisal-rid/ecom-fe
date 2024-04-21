import React, { useState, useEffect } from "react";
import { Container, Row, Col, h4, p } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

const About = () => {
  const [about, setAbout] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(AppURL.AllSiteInfo)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode === 200) {
          let JsonData = response.data[0]["about"];
          setAbout(JsonData);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, []);

  return (
    <Container>
      <Row className="p-2">
        <Col
          className="shadow-sm bg-white mt-2"
          md={12}
          lg={12}
          sm={12}
          xs={12}
        >
          <div className={about ? "" : "loading"}>
            <h4 className="section-title-login">About Us Page </h4>
            {about && (
              <p className="section-title-contact">{ReactHtmlParser(about)}</p>
            )}
            {error && <p className="text-danger">{error}</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
