"use client";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const addMenu = () => {
    document.querySelector(".mobile-menu").classList.toggle("hidden")
  }
  return (
    <div className="navbar">
      <div className="contaciner flex justify-between items-center px-10 h-16">
        <div className="logo">
          <Link href="/" className="uppercase font-bold text-2xl">
            Giftos
          </Link>
        </div>
        <div className="uls">
          <ul className="hidden md:flex links">
            <li className="px-1 uppercase">
              <Link href="/" className="hover:bg-white p-5">
                Home
              </Link>
            </li>
            <li className="px-1 uppercase">
              <Link href="/shop" className="hover:bg-white p-5">
                Shop
              </Link>
            </li>
            <li className="px-1 uppercase">
              <Link href="/whyus" className="hover:bg-white p-5">
                Why us
              </Link>
            </li>
            <li className="px-1 uppercase">
              <Link href="/" className="hover:bg-white p-5">
                Testimonial
              </Link>
            </li>
            <li className="px-1 uppercase">
              <Link href="/contact" className="hover:bg-white p-5">
                Contact Us
              </Link>
            </li>
          </ul>
          <button id="mobile" className="text-2xl md:hidden" onClick={addMenu}>
            <FaBars />
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <div className="mobile-menu absolute z-10 flex hidden flex-col mobile-links py-4 w-full">
          <Link href="/" className="py-3 ps-12 uppercase">Home</Link>
          <Link href="/shop" className="py-3 ps-12 uppercase">Shop</Link>
          <Link href="/whyus" className="py-3 ps-12 uppercase">Why Us</Link>
          <Link href="/" className="py-3 ps-12 uppercase">Testimonials</Link>
          <Link href="/contact" className="py-3 ps-12 uppercase">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
