import React, { Component, Fragment } from "react";
import {Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/userLoginPage";
import ContactPage from '../pages/ContactPage';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<UserLoginPage />} />
            <Route exact path="/contact" element={<ContactPage/>} />
          </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
