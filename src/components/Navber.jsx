import React, { useState, useRef, useEffect } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Dropdown, NavLink } from "react-bootstrap";
// import Manu from "./Manu";
import "../styles/Navber_Manu.css";
import Manu from "./Manu";

export default function Navber() {
  const [profileToggle, setProfileToggle] = useState("");
  const [langToggle, setLangToggle] = useState("");

  const [toggle, setToggle] = useState("");
  const handleToggle = () => {
    setToggle("toggler-class");
    if (toggle === "toggler-class") {
      setToggle("remove-toggle");
    }
    setProfileToggle("");
    setLangToggle("");
  };

  const onToggleData = (data) => {
    setToggle(data);
  };

  const profileClickHandler = () => {
    console.log("profile card");
    if (langToggle === "lang-toggle") {
      setLangToggle("");
    }
    if (profileToggle === "profile-toggle") {
      setProfileToggle("");
    } else {
      setProfileToggle("profile-toggle");
    }
  };

  const langClickHandler = () => {
    console.log("lang");
    if (profileToggle === "profile-toggle") {
      setProfileToggle("");
    }
    if (langToggle === "lang-toggle") {
      setLangToggle("");
    } else {
      setLangToggle("lang-toggle");
    }
  };

  const outerContainerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      outerContainerRef.current &&
      !outerContainerRef.current.contains(event.target)
    ) {
      setProfileToggle("");
      setLangToggle("");
    }
  };

  const handleScroll = () => {
    setProfileToggle("");
    setLangToggle("");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={outerContainerRef}>
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
                <div className="lang d-inline-block">
                  <div onClick={langClickHandler} className="pointer">
                    <img
                      src="assets/flags/france.svg"
                      className="flag"
                      alt="kigi"
                    />
                    <span className="mx-2">
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
                  <div className={`lang-manu  text-center  ${langToggle}`}>
                    <div className="">
                      <NavLink onClick={langClickHandler} className="link">
                        ENGLISH (ENG)
                      </NavLink>
                    </div>
                    <div>
                      <NavLink onClick={langClickHandler} className="link">
                        FRANCH (FR)
                      </NavLink>
                    </div>
                  </div>
                </div>
              </li>
              <li className="d-inline-block  d-xl-inline-block">
                <div className="profile ">
                  <span onClick={profileClickHandler}>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    </span>
                    <span className="">
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
                  </span>

                  <div
                    className={`profile-manu  text-center  ${profileToggle}`}
                  >
                    <div className="">
                      <NavLink onClick={profileClickHandler} className="link">
                        TABLEAU DE BORD
                      </NavLink>
                    </div>
                    <div>
                      <NavLink onClick={profileClickHandler} className="link">
                        PROGRESSION
                      </NavLink>
                    </div>
                    <div>
                      <NavLink onClick={profileClickHandler} className="link">
                        SE DÉCONNECTER
                      </NavLink>
                    </div>
                  </div>
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
      <div className={`manu-toggle ${toggle} z-2`}>
        <Manu onToggleData={onToggleData} />
      </div>
    </div>
  );
}
