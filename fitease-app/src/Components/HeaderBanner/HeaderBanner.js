import React from "react";
import "./HeaderBanner.css";
const HeaderBanner = ({ title, headline, displayType }) => {
  return (
    <div className="headerBanner" style={{ display: { displayType } }}>
      <h1>{title}</h1>
      <p>{headline}</p>
    </div>
  );
};

export default HeaderBanner;
