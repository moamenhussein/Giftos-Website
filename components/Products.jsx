import React from "react";
import ProductsInfo from "./ProductsInfo";
import productOne from "../public/images/p1.png";
import productTwo from "../public/images/p2.png";
import productThree from "../public/images/p3.png";
import productFour from "../public/images/p4.png";
import productFive from "../public/images/p5.png";
import productSix from "../public/images/p6.png";
import productSiven from "../public/images/p7.png";
import productEight from "../public/images/p8.png";
const products = () => {
  return (
    <div className="products">
      <div className="container px-10">
        <h1 className="text-center text-4xl font-bold">Latest Products</h1>
        <div className="container boxs mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="box">
            <ProductsInfo image={productOne} title="Ring" price="200" />
          </div>
          <div className="box">
            <ProductsInfo image={productTwo} title="Watch" price=" 300" />
          </div>
          <div className="box">
            <ProductsInfo
              image={productThree}
              title="Teddy Bear"
              price=" 110"
            />
          </div>
          <div className="box">
            <ProductsInfo
              image={productFour}
              title="Flower Bouquet"
              price=" 45"
            />
          </div>
          <div className="box mt-20">
            <ProductsInfo image={productFive} title="Teddy Bear" price=" 95" />
          </div>
          <div className="box mt-20">
            <ProductsInfo
              image={productSix}
              title="Flower Bouquet"
              price=" 70"
            />
          </div>
          <div className="box mt-20">
            <ProductsInfo image={productSiven} title="Watch" price="400" />
          </div>
          <div className="box mt-20">
            <ProductsInfo image={productEight} title="Ring" price="450" />
          </div>
        </div>
        <button className="view-btn">View All Products</button>
      </div>
    </div>
  );
};

export default products;
