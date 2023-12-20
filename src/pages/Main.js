import React, { Component } from "react";
import Slider from "../components/Slider";
import ProductsCards from "../components/ProductsCards";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Slider />
        <ProductsCards addToCart = {this.props.addToCart}/>
      </div>
    );
  }
}
