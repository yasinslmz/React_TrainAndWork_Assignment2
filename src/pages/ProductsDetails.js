import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductsDetails({addToCart}) {
  const { slug } = useParams();

  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState({});

  const getProducts = () => {
    fetch(" http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  // Dizinin içindeki değişkenlerin değişmesini izler ve ona göre aksiyon alır.
  //burada bir defa izle ve sonrasında izleme diyoruz
  //bu useEffect'in işlemi bitene kadar diğer effectler çalışmayacak. Neden?
  //çünkü ilk önce fetch işlemlerinin tamamlanmasını istiyoruz
  useEffect(() => {
    getProducts();
    console.log(slug);
  }, []);

  //burada ise her defasında products değişkeninin değişimlerini izle ve çalış
  useEffect(() => {
    setSelectedProduct(products.find((product) => product.slug == slug));
    console.log(selectedProduct);
  }, [products]);

  return (
    <>
      <div className="breadcrumb-area section-space--breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="breadcrumb-wrapper">
                <h2 className="page-title">Shop</h2>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="shop-left-sidebar.html">Shop</a>
                  </li>
                  <li className="active">Shop product</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content-wrapper">
        <div className="single-product-slider-details-area">
          <div className="container">
            <div className="row">
              {/* STATE İŞLEMLERİ */}
              <div className="col-lg-6">
                <div className="product-details-slider-area product-details-slider-area--side-move">
                  <div className="product-badge-wrapper">
                    <span className="hot">Hot</span>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-9 order-1 order-md-2">
                      <div className="big-image-wrapper">
                        <div className="enlarge-icon">
                          <a
                            className="btn-zoom-popup"
                            href="javascript:void(0)"
                            data-tippy="Click to enlarge"
                            data-tippy-placement="left"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay={50}
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i className="pe-7s-expand1" />
                          </a>
                        </div>
                        <div
                          className="product-details-big-image-slider-wrapper product-details-big-image-slider-wrapper--side-space theme-slick-slider"
                          data-slick-setting='{
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "arrows": false,
              "autoplay": false,
              "autoplaySpeed": 5000,
              "fade": true,
              "speed": 500,
              "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-left" },
              "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-right" }
          }'
                          data-slick-responsive='[
              {"breakpoint":1501, "settings": {"slidesToShow": 1, "arrows": false} },
              {"breakpoint":1199, "settings": {"slidesToShow": 1, "arrows": false} },
              {"breakpoint":991, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
              {"breakpoint":767, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
              {"breakpoint":575, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} },
              {"breakpoint":479, "settings": {"slidesToShow": 1, "arrows": false, "slidesToScroll": 1} }
          ]'
                        >
                          <div class="single-image">
                            {selectedProduct && selectedProduct.image && (
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/" +
                                  selectedProduct.image[0]
                                }
                                className="img-fluid"
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 order-2 order-md-1">
                      <div
                        className="product-details-small-image-slider-wrapper product-details-small-image-slider-wrapper--vertical-space theme-slick-slider"
                        data-slick-setting='{
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "centerMode": false,
          "arrows": true,
          "vertical": true,
          "autoplay": false,
          "autoplaySpeed": 5000,
          "speed": 500,
          "asNavFor": ".product-details-big-image-slider-wrapper",
          "focusOnSelect": true,
          "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-up" },
          "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-down" }
      }'
                        data-slick-responsive='[
          {"breakpoint":1501, "settings": {"slidesToShow": 3, "arrows": true} },
          {"breakpoint":1199, "settings": {"slidesToShow": 3, "arrows": true} },
          {"breakpoint":991, "settings": {"slidesToShow": 3, "arrows": true, "slidesToScroll": 1} },
          {"breakpoint":767, "settings": {"slidesToShow": 3, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} },
          {"breakpoint":575, "settings": {"slidesToShow": 3, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} },
          {"breakpoint":479, "settings": {"slidesToShow": 2, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} }
      ]'
                      >
                        <div className="single-image">
                          {selectedProduct && selectedProduct.image && (
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/" +
                                selectedProduct.image[0]
                              }
                              className="img-fluid"
                              alt=""
                            />
                          )}
                        </div>

                        <div className="single-image">
                          {selectedProduct && selectedProduct.image && (
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/" +
                                selectedProduct.image[1]
                              }
                              className="img-fluid"
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="product-details-description-wrapper">
                  <h2 className="item-title">
                    {selectedProduct && selectedProduct.productName}
                  </h2>
                  <p className="price">
                    <span className="main-price discounted">$360.00</span>
                    <span className="discounted-price">
                      ${selectedProduct && selectedProduct.price}
                    </span>
                  </p>
                  <p className="description">
                    {selectedProduct && selectedProduct.desc}
                  </p>
                  <div className="add-to-cart-btn d-inline-block">
                    <a className="theme-button theme-button--alt" href="#" onClick={()=>addToCart(selectedProduct)}>
                      BUY NOW
                    </a>
                  </div>
                  <div className="quick-view-other-info">
                    <div className="other-info-links">
                      <a href="javascript:void(0)">
                        <i className="fa fa-heart-o" /> ADD TO WISHLIST
                      </a>
                      <a href="javascript:void(0)">
                        <i className="fa fa-exchange" /> COMPARE
                      </a>
                    </div>
                    <div className="product-brand">
                      <a href="shop-left-sidebar.html">
                        <img
                          src="assets/img/brands/brand-2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* SON */}
            </div>
          </div>
        </div>

        <div className="single-product-description-tab-area section-space">
          <div className="description-tab-navigation">
            <ul
              className="nav nav-tabs justify-content-center"
              id="nav-tab2"
              role="tablist"
            >
              <li className="nav-item">
                <button
                  className="nav-link active"
                  id="description-tab"
                  type="button"
                  data-bs-toggle="tab"
                  data-bs-target="#product-description"
                  role="tab"
                  aria-controls="product-description"
                  aria-selected="true"
                >
                  DESCRIPTION
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link"
                  id="additional-info-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#product-additional-info"
                  role="tab"
                  aria-controls="product-additional-info"
                  aria-selected="false"
                >
                  ADDITIONAL INFORMATION
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link"
                  id="review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#product-review"
                  role="tab"
                  aria-controls="product-review"
                  aria-selected="false"
                >
                  REVIEWS (3)
                </button>
              </li>
            </ul>
          </div>
          <div className="single-product-description-tab-content">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="product-description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="description-content">
                        <p className="long-desc">
                          {selectedProduct && selectedProduct.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="product-additional-info"
                role="tabpanel"
                aria-labelledby="additional-info-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="additional-info-content">
                        <table className="additional-info-table">
                          <tbody>
                            <tr>
                              <th>Dimensions</th>
                              <td className="product_dimensions">
                                300 x 24 x 32 cm
                              </td>
                            </tr>
                            <tr>
                              <th>color</th>
                              <td>
                                <p>Black, Lavender Grey, Pink, White</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="product-review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="review-content-wrapper">
                        <div className="review-comments">
                          <h4 className="review-comment-title">
                            6 REVIEWS FOR OLIVIA SHAYN COVER CHAIR
                          </h4>
                          <div className="single-review-comment">
                            <div className="single-review-comment__image">
                              <img
                                src="assets/img/review/one.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="single-review-comment__content">
                              <div className="review-time">
                                <i className="fa fa-calendar" /> June 7, 2019
                              </div>
                              <div className="rating">
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                              </div>
                              <p className="review-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, in.
                              </p>
                            </div>
                          </div>
                          <div className="single-review-comment">
                            <div className="single-review-comment__image">
                              <img
                                src="assets/img/review/two.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="single-review-comment__content">
                              <div className="review-time">
                                <i className="fa fa-calendar" /> June 8, 2019
                              </div>
                              <div className="rating">
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                              </div>
                              <p className="review-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, in.
                              </p>
                            </div>
                          </div>
                          <div className="single-review-comment">
                            <div className="single-review-comment__image">
                              <img
                                src="assets/img/review/three.jpg"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="single-review-comment__content">
                              <div className="review-time">
                                <i className="fa fa-calendar" /> June 9, 2019
                              </div>
                              <div className="rating">
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                              </div>
                              <p className="review-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Fuga, in.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="review-comment-form">
                          <h4 className="review-comment-title">Add a review</h4>
                          <p className="review-comment-subtitle">
                            Your email address will not be published. Required
                            fields are marked *
                          </p>
                          <form action="#">
                            <div className="form-group mb-3">
                              <label htmlFor="reviewerName">
                                Name <span>*</span>{" "}
                              </label>
                              <input
                                type="text"
                                id="reviewerName"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="reviewerEmail">
                                Email <span>*</span>{" "}
                              </label>
                              <input
                                type="email"
                                id="reviewerEmail"
                                required=""
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label
                                htmlFor="reviewRating"
                                className="d-inline-block mb-0"
                              >
                                Your rating
                              </label>
                              <div
                                className="rating d-inline-block"
                                id="reviewRating"
                              >
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="reviewComment">
                                Your review <span>*</span>
                              </label>
                              <textarea
                                name="reviewComment"
                                id="reviewComment"
                                cols={30}
                                rows={10}
                                defaultValue={""}
                              />
                            </div>
                            <button type="submit" className="theme-button">
                              SUBMIT
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
