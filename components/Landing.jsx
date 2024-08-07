import React from "react";
import Image from "next/image";
import landingImage from "../public/images/landing.png";
const Landing = () => {
  return (
    <div className="landing">
      <div className="container px-10 flex flex-col md:flex-row justify-between items-center">
        <div className="info text-white">
          <h4 className="text-5xl font-bold">
            Welcome To Our <br /> Gift Shop
          </h4>
          <p className="mt-8 text-[18px]">
            Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet
            non necessitatibus error <br /> distinctio mollitia suscipit.
            Nostrum fugit doloribus consequatur distinctio esse, possimus <br />{" "}
            maiores aliquid repellat beatae cum, perspiciatis enim, accusantium
            perferendis.
          </p>
          <button className="mt-8 px-10 py-4 rounded-lg">Contact Us</button>
        </div>
        <div className="img">
          <Image src={landingImage} alt="Landing Image"/>
        </div>
      </div>
    </div>
  );
};

export default Landing;
