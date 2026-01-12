import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import LeftSideBar from "./Components/LeftSideBar";
import Rightbox from "./Components/Rightbox";
import DataArea from "./Components/DataArea";
import contractor from "./assets/contractor.png";
import { IoHomeOutline } from "react-icons/io5";
import { BsMenuDown } from "react-icons/bs";
import { RiAddCircleLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { SiDavinciresolve } from "react-icons/si";
import { ImSwitch } from "react-icons/im";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="work_area">
        <LeftSideBar />
        <div className="show_data_area">
          <div className="data_area_box">
            <DataArea />
            <DataArea />
            <DataArea />
            <DataArea />
            <DataArea />
            <DataArea />
            <DataArea />
            <DataArea />
            <DataArea />

            <div>
              <div className="persong_box">
                <div>
                  <div className="name_box">
                    <h6>Merchant</h6>
                    <p>Verified</p>
                  </div>
                  <div className="num">32</div>
                </div>
                <div>
                  <img src={contractor} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="persong_box">
                <div>
                  <div className="name_box">
                    <h6>Merchant</h6>
                    <p>Verified</p>
                  </div>
                  <div className="num">32</div>
                </div>
                <div>
                  <img src={contractor} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Rightbox />
      </div>
      <div className="footer">
        <IoHomeOutline />
        <BsMenuDown />
        <RiAddCircleLine />
        <CiMenuBurger />
        <SiDavinciresolve />
        <ImSwitch />

      </div>
    </>
  );
}

export default App;
