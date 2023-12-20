import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <>
        {/*=======  header navigation wrapper  =======*/}
        <div className="header-navigation-area header-navigation-area--extra-space d-none d-lg-block">
          <div className="container wide">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-info-wrapper header-info-wrapper--alt-style">
                  <div className="header-logo">
                    <a href="index.html">
                      <img
                        src="assets/img/logo.png"
                        className="img-fluid"
                        alt=""
                      />
                      <img
                        src="assets/img/logo-alt.png"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="header-navigation-wrapper">
                    <nav>
                      <ul>
                        <li className="has">
                          <a href="/">HOME</a>
                        </li>
                        <li className="has-children">
                          <a href="javascript:void(0)">PRODUCTS</a>
                          <ul className="submenu submenu--column-1">
                            <li>
                              <a href="/">Products</a>
                            </li>
                            <li>
                              <a href="/order">Order</a>
                            </li>
                            <li>
                              <a href="/contact">Contact Us</a>
                            </li>
                            
                          </ul>
                        </li>
                        <li className="has-children">
                          <a href="javascript:void(0)">BLOG</a>
                          <ul className="submenu submenu--column-1">
                            <li>
                              <a href="/blog">Blog</a>
                            </li>
                            <li>
                              <a href="/about">About</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="header-icon-area">
                   
                    <div className="header-icon d-flex align-items-center">
                      <ul className="header-icon__list">
                        <li>
                          <a href="javascript:void(0)" id="search-icon">
                            <i className="fa fa-search" />
                          </a>
                        </li>
                        <li>
                          <a href="/cart">
                            <i className="fa fa-heart-o" />
                            {/* <span className="item-count"></span> */}
                          </a>
                        </li>
                        <li>
                          <Link  to="/cart">
                            <i className="fa fa-shopping-basket" />
                            <span className="item-count">{this.props.cartProducts.length}</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=======  End of header navigation wrapper  =======*/}
        {/*=======  mobile navigation area  =======*/}
        <div className="header-mobile-navigation d-block d-lg-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-md-6">
                <div className="header-logo">
                  <a href="index.html">
                    <img
                      src="assets/img/logo.png"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="mobile-navigation text-end">
                  <ul className="header-icon__list header-icon__list">
                    <li>
                      <a href="wishlist.html">
                        <i className="fa fa-heart-o" />
                        <span className="item-count">1</span>
                      </a>
                    </li>
                    <li>
                      <a href="cart.html">
                        <i className="fa fa-shopping-basket" />
                        <span className="item-count">3</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="mobile-menu-icon"
                        id="mobile-menu-trigger"
                      >
                        <i className="fa fa-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=======  End of mobile navigation area  =======*/}

        {/*====================  End of header area  ====================*/}
      </>
    );
  }
}
