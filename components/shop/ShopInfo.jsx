import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa";
const ShopInfo = (props) => {
  return (
    <div className="shopInfo">
      <FaHandHoldingMedical />
      <h3 className="mt-4">{props.title}</h3>
      <p className="mt-4">variations of passages of Lorem Ipsum <br /> available</p>
    </div>
  );
};

export default ShopInfo;
