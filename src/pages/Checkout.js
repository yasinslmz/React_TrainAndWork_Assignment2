import React from "react";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Checkout({cartCheckOuts, clearCart}) {
    const generateUniqueId = () => {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
      };

    useEffect(() => {
      console.log(cartCheckOuts);
      setCartProducts(cartCheckOuts);
      console.log(cartProducts);
    }, [cartCheckOuts])

    const [cartProducts, setCartProducts] = useState([]);
    
    
  const [billingAddress, setBillingAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    townCity: "",
    state: "",
    zipCode: "",
  });

  const handleBillingInputChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
    console.log(billingAddress);
  };

  const calculateTotalPrice = (cartProducts) => {
    let totalPrice = 0;
  
    cartProducts.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
  
    return totalPrice;
  };
  
  const grandTotal = calculateTotalPrice(cartProducts);

  const handlePlaceOrder = async () => {
    const rand=generateUniqueId();
    const orderData = {
        id: rand,
      cartProducts,
      billingAddress,
      grandTotal,
    };

    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log("Order placed successfully!");
      } else {
        console.error("Failed to place order");
      }
    } catch (error) {
      console.error("Error during place order:", error);
    }
    clearCart();
    alert("Sipariş Kodunuz: "+rand);
  };


  return (
    <div>
      <>
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Checkout</h2>
                  <ul className="breadcrumb-list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="active">Checkout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content-wrapper">
          <div className="checkout-page-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="checkout-form">
                    <form action="#">
                      <div className="row row-40">
                        <div className="col-lg-7">
                          <div id="billing-form" className="billing-form">
                            <h4 className="checkout-title">Billing Address</h4>
                            <div className="row">
                              <div className="col-md-6 col-12">
                                <label>First Name*</label>
                                <input
                                  type="text"
                                  name="firstName"
                                  placeholder="First Name"
                                  value={billingAddress.firstName}
                                  onChange={handleBillingInputChange}
                                />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Last Name*</label>
                                <input type="text" 
                               name="lastName"
                                placeholder="Last Name"
                                value={billingAddress.lastName}
                                  onChange={handleBillingInputChange} />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Email Address*</label>
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Email Address"
                                  value={billingAddress.email}
                                  onChange={handleBillingInputChange}
                                />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Phone no*</label>
                                <input type="text"
                                name="phone"
                                 placeholder="Phone number" 
                                value={billingAddress.phone}
                                onChange={handleBillingInputChange}/>
                              </div>
                              <div className="col-12">
                                <label>Company Name</label>
                                <input type="text"
                                name="companyName" placeholder="Company Name"
                                value={billingAddress.companyName}
                                onChange={handleBillingInputChange} />
                              </div>
                              <div className="col-12">
                                <label>Address*</label>
                                <input
                                  type="text"
                                  name="addressLine1"
                                  placeholder="Address line 1"
                                  value={billingAddress.addressLine1}
                                  onChange={handleBillingInputChange}
                                />
                                <input
                                  type="text"
                                  name="addressLine2"
                                  placeholder="Address line 2"
                                  value={billingAddress.addressLine2}
                                  onChange={handleBillingInputChange}
                                />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Country*</label>
                                <select className="nice-select">
                                  <option>Bangladesh</option>
                                  <option>China</option>
                                  <option>country</option>
                                  <option>India</option>
                                  <option>Japan</option>
                                </select>
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Town/City*</label>
                                <input type="text" placeholder="Town/City" />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>State*</label>
                                <input type="text" placeholder="State" />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Zip Code*</label>
                                <input type="text" placeholder="Zip Code" />
                              </div>
                              <div className="col-12">
                                <div className="check-box">
                                  <input type="checkbox" id="create_account" />
                                  <label htmlFor="create_account">
                                    Create an Acount?
                                  </label>
                                </div>
                                <div className="check-box">
                                  <input
                                    type="checkbox"
                                    id="shiping_address"
                                    data-shipping=""
                                  />
                                  <label htmlFor="shiping_address">
                                    Ship to Different Address
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div id="shipping-form" className="shipping-form">
                            <h4 className="checkout-title">Shipping Address</h4>
                            <div className="row">
                              <div className="col-md-6 col-12">
                                <label>First Name*</label>
                                <input type="text" placeholder="First Name" />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Last Name*</label>
                                <input type="text" placeholder="Last Name" />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Email Address*</label>
                                <input
                                  type="email"
                                  placeholder="Email Address"
                                />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Phone no*</label>
                                <input type="text" placeholder="Phone number" />
                              </div>
                              <div className="col-12">
                                <label>Company Name</label>
                                <input type="text" placeholder="Company Name" />
                              </div>
                              <div className="col-12">
                                <label>Address*</label>
                                <input
                                  type="text"
                                  placeholder="Address line 1"
                                />
                                <input
                                  type="text"
                                  placeholder="Address line 2"
                                />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Country*</label>
                                <select className="nice-select">
                                  <option>Bangladesh</option>
                                  <option>China</option>
                                  <option>country</option>
                                  <option>India</option>
                                  <option>Japan</option>
                                </select>
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Town/City*</label>
                                <input type="text" placeholder="Town/City" />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>State*</label>
                                <input type="text" placeholder="State" />
                              </div>
                              <div className="col-md-6 col-12">
                                <label>Zip Code*</label>
                                <input type="text" placeholder="Zip Code" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-5">
                          <div className="row">
                            <div className="col-12">
                              <h4 className="checkout-title">Cart Total</h4>
                              <div className="checkout-cart-total">
                                <h4>
                                  Product <span>Total</span>
                                </h4>
                                <ul>
                                {
                                  cartProducts&&(
                                    cartProducts.map((item)=>(
                                      <li>
                                      {item.productName} x {item.quantity} {" "}
                                      <span>${item.price*item.quantity}</span>
                                    </li>
                                  ))
                                  )
                                   
                                }
                                 
                                
                                </ul>
                                
                                <h4>
                                  Grand Total <span>${grandTotal}</span>
                                </h4>
                              </div>
                            </div>
                            <div className="col-12">
                              <h4 className="checkout-title">Payment Method</h4>
                              <div className="checkout-payment-method">
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_check"
                                    name="payment-method"
                                    defaultValue="check"
                                  />
                                  <label htmlFor="payment_check">
                                    Check Payment
                                  </label>
                                  <p data-method="check">
                                    Please send a Check to Store name with Store
                                    Street, Store Town, Store State, Store
                                    Postcode, Store Country.
                                  </p>
                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_bank"
                                    name="payment-method"
                                    defaultValue="bank"
                                  />
                                  <label htmlFor="payment_bank">
                                    Direct Bank Transfer
                                  </label>
                                  <p data-method="bank">
                                    Please send a Check to Store name with Store
                                    Street, Store Town, Store State, Store
                                    Postcode, Store Country.
                                  </p>
                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_cash"
                                    name="payment-method"
                                    defaultValue="cash"
                                  />
                                  <label htmlFor="payment_cash">
                                    Cash on Delivery
                                  </label>
                                  <p data-method="cash">
                                    Please send a Check to Store name with Store
                                    Street, Store Town, Store State, Store
                                    Postcode, Store Country.
                                  </p>
                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_paypal"
                                    name="payment-method"
                                    defaultValue="paypal"
                                  />
                                  <label htmlFor="payment_paypal">Paypal</label>
                                  <p data-method="paypal">
                                    Please send a Check to Store name with Store
                                    Street, Store Town, Store State, Store
                                    Postcode, Store Country.
                                  </p>
                                </div>
                                <div className="single-method">
                                  <input
                                    type="radio"
                                    id="payment_payoneer"
                                    name="payment-method"
                                    defaultValue="payoneer"
                                  />
                                  <label htmlFor="payment_payoneer">
                                    Payoneer
                                  </label>
                                  <p data-method="payoneer">
                                    Please send a Check to Store name with Store
                                    Street, Store Town, Store State, Store
                                    Postcode, Store Country.
                                  </p>
                                </div>
                                <div className="single-method">
                                  <input type="checkbox" id="accept_terms" />
                                  <label htmlFor="accept_terms">
                                    I’ve read and accept the terms &amp;
                                    conditions
                                  </label>
                                </div>
                              </div>
                              <Link to="/order" className="theme-button place-order-btn" onClick={handlePlaceOrder }>                                    
                                PLACE ORDER
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
