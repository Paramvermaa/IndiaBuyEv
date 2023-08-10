import React from "react";
import prod from "../../../assets/image1.jpeg";
import "./Product.scss";
function Product() {
  return (
    <div className="productCard">
      <div className="thumbnail">
        <img src={prod} alt="" />
      </div>
      <div className="productDetails">
        <span className="name">Name</span>
        <span className="price">&#8377;Price</span>
      </div>
    </div>
  );
}
export default Product;
