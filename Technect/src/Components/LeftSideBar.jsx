import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";


const LeftSideBar = () => {
  return (
    <div className="tabs_wrapper">
      <div className="tabs active">
        <IoHomeOutline />
        <p>Home</p>
      </div>
      <div className="tabs">
        <MdOutlineSpaceDashboard/>
        <p>Dashboard</p>
      </div>
      <div className="tabs">
        <IoHomeOutline />
        <p>Add</p>
      </div>
      <div className="tabs">
        <IoHomeOutline />
        <p>Add</p>
      </div>
      <div className="tabs">
        <IoHomeOutline />
        <p>Add</p>
      </div>

      <div>
        <div className="left_notify">
          <CiSettings />
          <p>Settings</p>
        </div>
        <div className="left_notify">
          <IoIosNotificationsOutline />
          <p>Settings</p>
        </div>
      </div>

      <div className="upgrade_box">
        <p>Upgrade to pro</p>
        <p>One year support, monthly updates for up to 5 team members.</p>
        <button className="upgrade_btn">Upgrade Now</button>
      </div>
    </div>
  );
};

export default LeftSideBar;
