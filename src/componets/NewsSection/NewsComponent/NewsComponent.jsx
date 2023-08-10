import React from "react";
import "./NewsComponent.scss";
function NewsComponent() {
  return (
    <div className="NewsComponent">
      <div className="NewsComponentImg">
        <img />
      </div>
      <div className="NewsComponentText">
        <div className="NewsComponentTextMain">
          <h2>HeadLine</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id numquam magnam nisi. Reprehenderit, sequi labore.</p>
        </div>
        <div className="NewsComponentTextInner">
          <img />
          <div className="NewsComponentTextInfo">
            <h2>Name</h2>
            <p>Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsComponent;
