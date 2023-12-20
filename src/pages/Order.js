import React, { useState, useEffect } from "react";

export default function OrderTracking() {
  const [selectedOrder, setSelectedOrder] = useState({});
  const [orders, setOrders] = useState([]);
  const [trackId, setTrackId] = useState("");

  const trackChange = (e) => {
    setTrackId(e.target.value);
    
  };

  const handleTrack = (e) => {
    setSelectedOrder(findOrderById(trackId));
    e.preventDefault();
    setTrackId("");
  };

  const findOrderById = (orderId) => {
    return orders.find((order) => order.id === orderId) || {};
  };

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((json) => {
        setOrders(json);
        console.log(json);
      });
  }, []);

  return (
    <div>
      <>
        <div className="breadcrumb-area section-space--breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="breadcrumb-wrapper">
                  <h2 className="page-title">Order Tracking</h2>
                  <ul className="breadcrumb-list">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="active">Order Tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content-wrapper">
          <div className="order-tracking-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="order-tracking-wrapper">
                    <div className="order-track-form">
                      <p>
                        To track your order please enter your Order ID in the
                        box below and press the "Track" button. This was given
                        to you on your receipt and in the confirmation email you
                        should have received.
                      </p>
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-12">
                            <label htmlFor="orderId">Order ID</label>
                            <input
                              type="text"
                              id="orderId"
                              placeholder="Found in your order confirmation email"
                              onChange={trackChange}
                            />
                          </div>

                          <div className="col-lg-12 text-center">
                            <button
                              to="/"
                              className="theme-button theme-button--order-track"
                              onClick={handleTrack}
                            >
                              TRACK
                            </button>
                          </div>

                          {
                            selectedOrder.billingAddress &&selectedOrder.cartProducts &&(
                              <div className="mt-3">
                                <h2>Selected Order</h2>
                                <p>Order ID: {selectedOrder.id}</p>
                                <p>Grand Total: {selectedOrder.grandTotal}</p>

                                <h3>Billing Address</h3>
                                <p>First Name: {selectedOrder.billingAddress.firstName}</p>
                                {/* Diğer billingAddress özellikleri buraya eklenmeli */}

                                <h3>Cart Products</h3>
                                <ul>
                                  {selectedOrder.cartProducts.map(product => (
                                    <li key={product.id}>
                                      <p>Product Name: {product.productName}</p>
                                      <p>Price: ${product.price}</p>
                                      <p>Quantity: {product.quantity}</p>
                                      {/* Diğer ürün özellikleri buraya eklenmeli */}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          }

                        </div>
                      </form>
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
