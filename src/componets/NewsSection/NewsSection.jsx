import React from "react";
import NewsComponent from "./NewsComponent/NewsComponent";
import "./NewsSection.scss";
function NewsSection() {
  return (
    <div className="NewsSection">
      <h1>News To Help Choose Your Car</h1>
      <div className="NewsSectionInner">
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
      </div>
    </div>
  );
}
export default NewsSection;
