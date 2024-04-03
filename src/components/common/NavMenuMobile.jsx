import React, { useState, Fragment } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link } from "react-router-dom";

const NavMenuMobile = () => {
  const [sideNavState, setSideNavState] = useState("sideNavClose");
  const [contentOverlayState, setContentOverlayState] = useState(
    "ContentOverlayClose"
  );

  const menuBarClickHandler = () => {
    setSideNavState(sideNavState === "sideNavOpen" ? "sideNavClose" : "sideNavOpen");
    setContentOverlayState(
      contentOverlayState === "ContentOverlayOpen" ? "ContentOverlayClose" : "ContentOverlayOpen"
    );
  };

  const contentOverlayClickHandler = () => {
    setSideNavState("sideNavClose");
    setContentOverlayState("ContentOverlayClose");
  };

  return (
    <Fragment>
      <div className="TopSectionDown">
        <Container fluid className="fixed-top shadow-sm p-2 mb-0 bg-white">
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Button onClick={menuBarClickHandler} className="btn">
                <i className="fa fa-bars"></i> Menu
              </Button>
              <Link to="/">
                <img className="nav-logo" src={Logo} alt="EasyShop Logo" />
              </Link>
              <Button className="cart-btn">
                <i className="fa fa-shopping-cart"></i> 3 Items
              </Button>
            </Col>
          </Row>
        </Container>

        <div className={sideNavState}>
          <hr className="w-80" />
          <div className="list-group">
            <Link
              to="/"
              className="list-group-item nav-font nav-itemmenu list-group-item-action"
            >
              <i className="fa mr-2 fa-home"></i>
              Home
            </Link>
            {/* Add more navigation links here */}
          </div>
        </div>

        <div
          onClick={contentOverlayClickHandler}
          className={contentOverlayState}
        ></div>
      </div>
    </Fragment>
  );
};

export default NavMenuMobile;
