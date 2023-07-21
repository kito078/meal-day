import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="container relative mx-auto p-6">
      {/* flex container for Nav Items */}
      <div className="flex items-center justify-between space-x-20 my-6">
        {/* logo */}
        <div className="z-30">
          <h5 id="logo">MealsDay</h5>
        </div>
        {/* Menu Items */}
        <div className="hidden items-center space-x-10 uppercase text-grayisBlue md:flex">
          <a href="#home" className="tracking-widest hover:text-softRed">
            Home |
          </a>
          <a href="#about" className="tracking-widest hover:text-softRed">
            About |
          </a>
          <a href="#services" className="tracking-widest hover:text-softRed">
            Services |
          </a>
          <a href="#services" className="tracking-widest hover:text-softRed">
            Block |
          </a>
          <a href="#services" className="tracking-widest hover:text-softRed">
            Menu
          </a>
          {/* <a
            href=""
            className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white
          "
          >
            download
          </a> */}
        </div>
        {/* hamburger Button */}
        <button
          id="menu-btn"
          className={`${
            isOpen ? "open" : "block"
          } z-30  md:hidden focus:outline-none hamburger`}
          onClick={toggleHandler}
        >
          {/* humburger lines */}
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        id="menu"
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed inset-0 z-20 md:hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
      >
        <div className="w-full py-3 text-center">
          <a href="#home" className="block hover:text-softRed">
            Home
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#about" className="block hover:text-softRed">
            About
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#services" className="block hover:text-softRed">
            Services
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
