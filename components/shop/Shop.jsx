import React from "react";
import ShopInfo from "./ShopInfo";
const Shop = () => {
  return (
    <div className="shop text-center">
      <h1 className="text-[30px] font-bold uppercase">Why Shop With Us</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        <div className="box">
          <ShopInfo title="Fast Delivery"/>
        </div>
        <div className="box">
          <ShopInfo  title="Free Shiping"/>
        </div>
        <div className="box">
          <ShopInfo  title="Best Quality"/>
        </div>
      </div>
    </div>
  );
};

export default Shop;
