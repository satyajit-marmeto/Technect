import React from "react";
import { CiChat1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../assets/Ellipse.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* <img src="/Ellipse 319" alt="Logo" /> */}
        <p>Construction Technect</p>
      </div>

      <div>
        <div className="right_box">
          <div className="logo">
            <img src={logo} alt="" />
            <div className="name_box_add">
              <h6>Adarsh</h6>
              <p>Jp nagar</p>
            </div>
          </div>
          <div className="notification">
            <div className="circlr">
              <CiChat1 />
            </div>
            <div className="circlr">
              <IoIosNotificationsOutline />
            </div>
            <div className="circlr">
              <IoIosNotificationsOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
