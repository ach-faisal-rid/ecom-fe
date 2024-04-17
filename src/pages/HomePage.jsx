import React, { Component, Fragment } from "react";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import HomeTop from "../components/home/homeTop";
import HomeTopMobile from "../components/home/homeTopMobile";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import FeaturedProducts from "../components/home/FeaturedProducts";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import axios from "axios";
import AppURL from "../api/AppURL";

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    this.GetVisitorDetails();
  }

  GetVisitorDetails = async () => {
    try {
      const response = await axios.get(AppURL.VisitorDetails);
      // Lakukan sesuatu dengan data pengunjung yang berhasil diambil (opsional)
    } catch (error) {
      console.error(error);
      // Tangani error dengan cara yang sesuai (misalnya, menampilkan pesan error)
    }
  };

  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>

        <Categories />
        <FeaturedProducts />
        <NewArrival />
        <Collection />

        <div className="Desktop">
          <FooterDesktop />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
