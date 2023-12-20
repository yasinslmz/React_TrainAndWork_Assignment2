import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class ProductsCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json });
        console.log(json);
      });
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <>
        {/*=======  tab product content  =======*/}
        <div className="product-double-row-tab-area section-space">
          <div className="container wide">
            <div className="row">
              <div className="col-lg-12">
                <div className="product-double-row-tab-wrapper">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="product-series-1"
                      role="tabpanel"
                      aria-labelledby="product-tab-1"
                    >
                      {/*=======  product row wrapper  =======*/}
                      <div className="product-row-wrapper">
                        <div className="row">
                          {/* DÖNGÜYÜ BURADA AÇ */}

                          {this.state.products.map((product) => (
                            <div className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                              {/*=======  single short view product  =======*/}
                              <div className="single-grid-product">
                                <div className="single-grid-product__image">
                                  <div className="product-badge-wrapper">
                                    <span className="onsale">-17%</span>
                                    <span className="hot">Hot</span>
                                  </div>
                                  <Link to={"/product/" + product.slug}
                                    className="image-wrap"
                                  >
                                    <img
                                      src={product.image[0]}
                                      className="img-fluid"
                                      alt=""
                                    />
                                    <img
                                      src={product.image[1]}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </Link>
                                  <div className="product-hover-icon-wrapper">
                                    <span className="single-icon single-icon--quick-view">
                                      <a
                                        className="cd-trigger"
                                        href="#qv-1"
                                        data-tippy="Quick View"
                                        data-tippy-inertia="true"
                                        data-tippy-animation="shift-away"
                                        data-tippy-delay={50}
                                        data-tippy-arrow="true"
                                        data-tippy-theme="sharpborder"
                                      >
                                        <i className="fa fa-search" />
                                      </a>
                                    </span>
                                    <span className="single-icon single-icon--add-to-cart">
                                      <a
                                      onClick={() => this.props.addToCart(product)}
                                        href="#"
                                        data-tippy="Add to cart"
                                        data-tippy-inertia="true"
                                        data-tippy-animation="shift-away"
                                        data-tippy-delay={50}
                                        data-tippy-arrow="true"
                                        data-tippy-theme="sharpborder"
                                      >
                                        <i className="fa fa-shopping-basket" />{" "}
                                        <span>ADD TO CART</span>
                                      </a>
                                    </span>
                                    <span className="single-icon single-icon--compare">
                                      <a
                                        href="#"
                                        data-tippy="Compare"
                                        data-tippy-inertia="true"
                                        data-tippy-animation="shift-away"
                                        data-tippy-delay={50}
                                        data-tippy-arrow="true"
                                        data-tippy-theme="sharpborder"
                                      >
                                        <i className="fa fa-exchange" />
                                      </a>
                                    </span>
                                  </div>
                                </div>
                                <div className="single-grid-product__content">
                                  <h3 className="title">
                                    <a href="product-details-basic.html">
                                      {product.productName}
                                    </a>
                                  </h3>
                                  <div className="price">
                                    <span className="main-price discounted">
                                      $145
                                    </span>{" "}
                                    <span className="discounted-price">
                                      ${product.price}
                                    </span>
                                  </div>
                                  <div className="rating">
                                    <i className="fa fa-star active" />
                                    <i className="fa fa-star active" />
                                    <i className="fa fa-star active" />
                                    <i className="fa fa-star active" />
                                    <i className="fa fa-star" />
                                  </div>
                                  <div className="color">
                                    <ul>
                                      <li>
                                        <a
                                          className="active"
                                          href="#"
                                          data-tippy="Black"
                                          data-tippy-inertia="true"
                                          data-tippy-animation="shift-away"
                                          data-tippy-delay={50}
                                          data-tippy-arrow="true"
                                          data-tippy-theme="roundborder"
                                        >
                                          <span className="color-picker black" />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          data-tippy="Blue"
                                          data-tippy-inertia="true"
                                          data-tippy-animation="shift-away"
                                          data-tippy-delay={50}
                                          data-tippy-arrow="true"
                                          data-tippy-theme="roundborder"
                                        >
                                          <span className="color-picker blue" />
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          data-tippy="Brown"
                                          data-tippy-inertia="true"
                                          data-tippy-animation="shift-away"
                                          data-tippy-delay={50}
                                          data-tippy-arrow="true"
                                          data-tippy-theme="roundborder"
                                        >
                                          <span className="color-picker brown" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <a
                                    href="#"
                                    className="favorite-icon"
                                    data-tippy="Add to Wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay={50}
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                    data-tippy-placement="left"
                                  >
                                    <i className="fa fa-heart-o" />
                                    <i className="fa fa-heart" />
                                  </a>
                                </div>
                              </div>
                              {/*=======  End of single short view product  =======*/}
                            </div>
                          ))}
                          
                        </div>
                      </div>
                      {/*=======  End of product row wrapper  =======*/}
                    </div>
                    {/*=======  End of tab product content  =======*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      
    );
  }
}
