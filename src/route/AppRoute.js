import React, { Component, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>  {/* Wrap your routes directly in Routes */}
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here */}
        </Routes>

      </Fragment>
    )
  }
}

export default AppRoute
