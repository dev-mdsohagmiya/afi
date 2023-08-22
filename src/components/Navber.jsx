import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Dropdown } from "react-bootstrap";
// import Manu from "./Manu";
import "../styles/Navber_Manu.css";
import Manu from "./Manu";

export default function Navber() {
  const [toggle, setToggle] = useState("");
  const handleToggle = () => {
    setToggle("toggler-class");
    if (toggle === "toggler-class") {
      setToggle("remove-toggle");
    }
  };
  const onToggleData = (data) => {
    setToggle(data);
  };

  return (
    <div>
      <div className="container py-4 ">
        <div className="row ">
          <div className="col-1">
            <img className="logo" src="/assets/logo.svg" alt="Logo" />
          </div>
          <div className="col-11  justify-content-end d-flex   ">
            <ul className="nav-list">
              <li className="d-inline-block d-none d-xl-inline-block">
                <a href="/"> MES COURS</a>
              </li>
              <li className="d-inline-block d-none d-xl-inline-block">
                <a href="/"> RÉVISION</a>
              </li>
              <li className="d-inline-block d-none d-xl-inline-block">
                <a href="/"> DICTIONNAIRE</a>
              </li>
              <li className="d-inline-block d-none d-xl-inline-block">
                <a href="/">AIDECOURS EN DIRECT</a>
              </li>
              <li className="d-inline-block d-none d-xl-inline-block">
                <a href="/">COURS EN DIRECT</a>
              </li>
              <li className="d-inline-block d-none d-xl-inline-block">
                <a href="/">AIDE</a>
              </li>
              <li className="d-inline-block  d-xl-inline-block">
                <div className="lang">
                  <img
                    src="assets/flags/france.svg"
                    className="flag"
                    alt="kigi"
                  />
                  <span className="ml-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="6"
                      viewBox="0 0 13 6"
                      fill="none"
                    >
                      <path
                        d="M6.5 6L0.00480895 -2.69824e-07L12.9952 8.65831e-07L6.5 6Z"
                        fill="#1E1E1E"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="d-inline-block  d-xl-inline-block">
                <div className="profile">
                  <img src="assets/profile.svg" className="flag" alt="kigi" />
                  <span className="">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="6"
                      viewBox="0 0 13 6"
                      fill="none"
                    >
                      <path
                        d="M6.5 6L0.00480895 -2.69824e-07L12.9952 8.65831e-07L6.5 6Z"
                        fill="#1E1E1E"
                      />
                    </svg>
                  </span>
                </div>
              </li>

              <li className="d-inline-block  d-xl-none  toggle-btn">
                <span>
                  <HiOutlineMenuAlt1
                    className="toggle-btn"
                    id="toggle-btn"
                    onClick={handleToggle}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`manu-toggle ${toggle} z-3`}>
        <Manu onToggleData={onToggleData} />
      </div>
    </div>
  );
}
