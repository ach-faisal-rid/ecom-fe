import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import HomeTop from '../components/home/homeTop'
import HomeTopMobile from '../components/home/homeTopMobile'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import FeaturedProducts from '../components/home/FeaturedProducts'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="Desktop">
        <NavMenuDesktop />
        <HomeTop/>
        </div>
        
        <div className='Mobile'>
        <NavMenuMobile />  
        <HomeTopMobile />
        </div>

        <Categories />
        <FeaturedProducts/>
        <NewArrival />
        <Collection />
      </Fragment>
    )
  }
}

export default HomePage
