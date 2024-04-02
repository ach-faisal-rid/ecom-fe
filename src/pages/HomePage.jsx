import React, { Component, Fragment } from 'react'
import HomeTop from '../components/home/homeTop'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import FeaturedProducts from '../components/home/FeaturedProducts'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeTop/>
        <Categories />
        <FeaturedProducts/>
        <NewArrival />
        <Collection />
      </Fragment>
    )
  }
}

export default HomePage
