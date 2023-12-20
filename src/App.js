import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import BlogDetails from "./pages/BlogDetails";
import Footer from "./components/Footer";
import ProductsDetails from "./pages/ProductsDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";


export default class App extends Component {

  constructor (props){
    super(props);

    this.state = {
      cartProducts: [],
      CheckOuts: [],
    };
  }

  addToCart = (Item) => {

    this.setState({cartProducts:[...this.state.cartProducts, Item]});
    console.log(this.state.cartProducts);
  };

  clear = () => {
    this.setState({cartProducts:[]});
    console.log(this.state.cartProducts);
  };

  cartToCheckout = (cartProductItems) => {
    this.setState({
      CheckOuts: cartProductItems,

    });
    
  };

  render() {
    return (
      <div className="App">
        <Header  cartProducts={this.state.cartProducts}/>
        <Routes>
          <Route exact path="/" element={<Main addToCart = {this.addToCart}/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart cartProducts = {this.state.cartProducts} cartToCheckout ={this.cartToCheckout}/>} />
          <Route path="/checkout" element={<Checkout cartCheckOuts = {this.state.CheckOuts} clearCart = {this.clear}/>} />
          <Route path="/order" element={<Order />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/product/:slug" element={<ProductsDetails addToCart = {this.addToCart}/>} />
          </Routes>
        <Footer />

        
      </div>
    );
  }
}
