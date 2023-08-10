import React from "react";
import PopularBrandCard from "./PopularBrandCard/PopularBrandCard";
import "./PopularBrands.scss";
function PopularBrand() {
  return (
    <div className="PopularBrand">
      <h1>Choose Your Brands</h1>
      <div className="PopularBrandInner">
        <PopularBrandCard />
        <PopularBrandCard />
        <PopularBrandCard />
        <PopularBrandCard />
        <PopularBrandCard />
        <PopularBrandCard />
        <PopularBrandCard />
      </div>
    </div>
  );
}
export default PopularBrand;
