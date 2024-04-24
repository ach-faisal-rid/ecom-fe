import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";
import axios from "axios";

class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllProductListByRemark("FEATURED"))
      .then((response) => {
        this.setState({ ProductData: response.data });
      })
      .catch((error) => {});
  }

  render() {
    const FeaturedList = this.state.ProductData;
    const MyView = FeaturedList.map((featuredProduct, i) => (
      <Col className="p-2" key={featuredProduct.id} 
      xl={3} 
      lg={3} 
      md={4} 
      sm={4} 
      xs={6}>
        <Link to="/productdetails">
          <Card className="featured-product-card shadow image-box card">
            <img className="card-img-top img-fluid" 
            src={featuredProduct.image} 
            alt={featuredProduct.title} />
            <Card.Body>
              <p className="product-name-on-card">
                {featuredProduct.title}
              </p>
              <p className="product-price-on-card">
                Price :{" "}
                {featuredProduct.special_price === "na" ? (
                  `${featuredProduct.price}`
                ) : (
                  <>
                    <strike className="text-secondary">{featuredProduct.price}</strike> ${featuredProduct.special_price}
                  </>
                )}
              </p>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    ));

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCT</h2>
            <p>
                Some Of Our Exclusive Collection, You May Like
            </p>
          </div>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
