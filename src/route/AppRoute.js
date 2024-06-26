import React, { Component, Fragment } from "react";
import {Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";

import UserLoginPage from "../pages/userLoginPage";
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';

import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import AboutPage from '../pages/AboutPage';
import ProductCategoryPage from '../pages/ProductCategoryPage'

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<UserLoginPage />} />
            <Route exact path="/contact" element={<ContactPage/>} />
            
            <Route exact path="/cart" element={<CartPage/>} />
            <Route exact path="/" element={<ProductCategoryPage/>}/>
            
            <Route exact path="/privacy" element={<PrivacyPage/>} />
            <Route exact path="/purchase" element={<PurchasePage/>} />
            <Route exact path="/refund" element={<RefundPage/>} />
            <Route exact path="/about" element={<AboutPage/>} />
          </Routes>
      </Fragment>
    );
  }
}

export default AppRoute;
