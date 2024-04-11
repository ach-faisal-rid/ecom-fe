import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import HomeTop from '../components/home/homeTop'
import HomeTopMobile from '../components/home/homeTopMobile'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import FeaturedProducts from '../components/home/FeaturedProducts'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import axios from 'axios';
import AppURL from '../api/AppURL'

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0); // Gulir ke atas saat komponen dipasang
    this.GetVisitorDetails().then(() => {
      // Lakukan sesuatu setelah data pengunjung berhasil diambil
    });
  }
  
  GetVisitorDetails = async () => {
    try {
      const response = await axios.get(AppURL.VisitorDetails); // Tunggu respons
      return response.data;
    } catch (error) {
      // Tangani error
      console.error(error);
      throw error; // Rethrow error agar dapat ditangkap di componentDidMount
    }
  };
  
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
        
        <div className="Desktop">
        <FooterDesktop/>
        </div>
        <div className="Mobile">
        <FooterMobile/>
        </div>
        
      </Fragment>
    )
  }
}

export default HomePage
