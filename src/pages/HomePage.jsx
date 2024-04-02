import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Categories />
        <FeaturedProducts/>
      </Fragment>
    )
  }
}

export default HomePage
