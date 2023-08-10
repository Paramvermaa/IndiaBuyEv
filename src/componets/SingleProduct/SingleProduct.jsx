import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import prod from "../../assets/image1.jpeg";
import "./SingleProduct.scss";
function SingleProduct() {
  return (
    <div className="singleProductMainContent">
      <div className="layout">
        <div className="singleProductPage">
          <div className="left">
            <img src={prod} alt="" />
          </div>
          <div className="right">
            <span className="name">Name</span>
            <span className="price">&#8377;&nbsp;Product Price</span>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, veniam! Similique ducimus laboriosam reprehenderit
              iure libero neque sequi asperiores ipsa quae distinctio, maxime,
              necessitatibus quod!
            </span>
            <div className="infoStats">
              <span className="textBold">
                Range:&nbsp;
                <span>XXXXX</span>
              </span>
              <span className="textBold">
                Battery:&nbsp;
                <span>XXXXX</span>
              </span>
              <span className="textBold">
                Charge Time:&nbsp;
                <span>XXXXXmin</span>
              </span>
            </div>
            <span className="divider"></span>
            <div className="infoItem">
              <span className="textBold">
                Category:&nbsp;
                <span>Category Name</span>
              </span>
              <span className="textBold">
                Share:
                <span className="socialIcons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
}
export default SingleProduct;
