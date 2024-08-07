import React from "react";
import Image from "next/image";
import giftsImage from "../public/images/gifts.png";
const Gifts = () => {
  return (
    <div className="gifts">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="box">
          <Image src={giftsImage} alt="Gifts Image" />
        </div>
        <div className="box info">
          <div className="box-info text-white">
            <h3 className="uppercase font-bold text-[35px]">
              Gifts for your <br /> loved ones
            </h3>
            <p className="mt-4 text-[18px]">
              Omnis ex nam laudantium odit illum harum, excepturi accusamus at
              corrupti, velit blanditiis <br /> unde perspiciatis, vitae minus
              culpa? Beatae at aut consequuntur porro adipisci aliquam <br />{" "}
              eaque iste ducimus expedita accusantium?
            </p>
            <div className="buttons mt-8">
              <button className="first-btn">Buy Now</button>
              <button className="last-btn">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
