import React from "react";
import Image from "next/image";
import contactImage from "../public/images/contact.png"
const Contact = () => {
  return (
    <div className="contact">
      <h3 className="text-center uppercase text-[30px] font-bold">Contact Us</h3>
      <div className="container grid grid-cols-1 lg:grid-cols-2 mt-10">
        <div className="box">
          <Image src={contactImage} alt="Contact Image"/>
        </div>
        <div className="box form">
          <input type="text" placeholder="Name" required/><br />
          <input type="email" placeholder="Email" required/><br />
          <input type="text" placeholder="Phone" required/><br />
          <textarea placeholder="Message"></textarea><br />
          <button className="uppercase">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
