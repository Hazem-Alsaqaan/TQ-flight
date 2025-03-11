import React from "react";
import Logo from "../../assets/pictures/TQFlight.png";
import NavLinks from "./NavLinks.jsx";

function NavBar() {
  return (
    <div className="fixed w-screen  py-4 bg-linear-to-r from-30% from-white to-neutral-100 px-24 max-md:px-6 z-50">
      <div className="flex items-center h-full">
        <img src={Logo} alt="logo" className="w-24 h-24" />
        <NavLinks />
      </div>
    </div>
  );
}

export default NavBar;
