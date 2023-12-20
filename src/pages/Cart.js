import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart  ({ cartProducts, cartToCheckout }) {
  const [localCartProducts, setLocalCartProducts] = useState([]);

  useEffect(() => {
    console.log("Cart products güncellendi:", cartProducts);
    setLocalCartProducts(cartProducts);
    
  }, [cartProducts]);

  const changeQuantity = (id, value) => {
    const updatedCartProducts = localCartProducts.map(product => {
      if (product.id === id) {
        return { ...product, quantity: value };
      }
      return product;
    });

    setLocalCartProducts(updatedCartProducts);
  };

  const calculateTotalPrice = () => {
    return localCartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };
    return (
      <div>
        <>
          <div className="breadcrumb-area section-space--breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="breadcrumb-wrapper">
                    <h2 className="page-title">Shopping Cart</h2>
                    <ul className="breadcrumb-list">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li className="active">Shopping Cart</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content-wrapper">
            <div className="shopping-cart-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-table-container">
                      <table className="cart-table">
                        <thead>
                          <tr>
                            <th className="product-name" colSpan={2}>
                              Product
                            </th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Total</th>
                            <th className="product-remove">&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* DÖNGÜ AÇ */}
                          {localCartProducts &&
                            localCartProducts.map((product) => (
                              <tr>
                                <td className="product-thumbnail">
                                  <a href="product-details-basic.html">
                                    <img
                                      src={
                                        process.env.PUBLIC_URL +
                                        "/" +
                                        product.image[0]
                                      }
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </a>
                                </td>
                                <td className="product-name">
                                  <a href="product-details-basic.html">
                                    {product.productName}
                                  </a>
                                  <span className="product-variation">
                                    Color: {product.color}
                                  </span>
                                </td>
                                <td className="product-price">
                                  <span className="price">
                                    ${product.price}
                                  </span>
                                </td>
                                <td className="product-quantity">
                                  <div className="pro-qty d-inline-block mx-0">
                                    <input
                                      className="p-1"
                                      type="number"
                                      min={0}
                                      max={15}
                                      defaultValue={1}
                                      onChange={(e) =>
                                        changeQuantity(
                                          product.id,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </td>
                                <td className="total-price">
                                  <span className="price">
                                    ${product.quantity * product.price}
                                  </span>
                                </td>
                                <td className="product-remove">
                                  <a href="#">
                                    <i className="pe-7s-close" />
                                  </a>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

              

                  <div className="col-lg-6 offset-lg-6">
                    <div className="cart-calculation-area">
                      <h2 className="cart-calculation-area__title">
                        Cart totals
                      </h2>
                      <table className="cart-calculation-table " >
                        <tbody>
                        
                          <tr>
                            <th>TOTAL</th>
                            <td className="total">${calculateTotalPrice()}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="cart-calculation-button">

                          <Link to="/checkout" className="theme-button theme-button--alt theme-button--checkout" onClick={() => cartToCheckout(localCartProducts)}>
                          PROCEED TO CHECKOUT
                          </Link>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }