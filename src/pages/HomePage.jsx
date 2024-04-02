import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import FeaturedProducts from '../components/home/FeaturedProducts'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Categories />
        <FeaturedProducts/>
        <NewArrival />
        <Collection />
      </Fragment>
    )
  }
}

export default HomePage
