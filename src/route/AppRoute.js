import React, { Component, Fragment } from "react";
import { Router, Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/userLoginPage";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<UserLoginPage />} />
          </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
