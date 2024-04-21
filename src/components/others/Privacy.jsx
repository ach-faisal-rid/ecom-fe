import React, { useState, useEffect } from "react";
import { Container, Row, Col, h4, p } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

const Privacy = () => {
  const [privacy, setPrivacy] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(AppURL.AllSiteInfo)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode === 200) {
          let JsonData = response.data[0]["privacy"];
          setPrivacy(JsonData);
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
          <div className={privacy ? "" : "loading"}>
            <h4 className="section-title-login">Privacy Us Page </h4>
            {privacy && (
              <p className="section-title-contact">{ReactHtmlParser(privacy)}</p>
            )}

            {/* Placeholder with Animation (CSS required) */}
            {!privacy && (
              <div className="ph-item">
                <div className="ph-col-12">
                  <div className="ph-row">
                    <div className="ph-col-4"></div>
                    <div className="ph-col-8 empty"></div>
                    <div className="ph-col-6"></div>
                    <div className="ph-col-6 empty"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                    <div className="ph-col-12"></div>
                  </div>
                </div>
              </div>
            )}

            {error && <p className="text-danger">{error}</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Privacy;
