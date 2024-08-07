import React from "react";
import Image from "next/image";
import arrivalsImage from "../public/images/arrivals.png";
const Arrivals = () => {
  return (
    <div className="arrivals">
      <div className="container flex flex-col-reverse md:flex-row justify-around items-center">
        <Image src={arrivalsImage} alt="arrivals Image" />
        <div className="box-info text-white">
          <h3 className="text-4xl font-bold">
            Best Savings on <br /> new arrivals
          </h3>
          <p className="mt-5 font-bold">
            Qui ex dolore at repellat, quia neque doloribus omnis adipisci,
            ipsum eos odio <br /> fugit ut eveniet blanditiis praesentium totam non
            nostrum dignissimos nihil <br /> eius facere et eaque. Qui, animi
            obcaecati.
          </p>
          <div className="bttons mt-5 flex flex-col md:flex-row m-4">
            <button className="first-btn">Buy Now</button>
            <button className="last-btn mt-4 md:mt-0 md:ms-5">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
