import React from "react";
import "../styles/GrettingLession.css";
import { NavLink } from "react-router-dom";

export default function GrettingLession() {
  const cardData = [
    {
      id: 1,
      image: "/assets/lession/img-1.png",
      title: "Í ní sɔ̀gɔma. (de 5h à 11h)",
      dec: "Commencer la leçon",
    },
    {
      id: 2,
      image: "/assets/lession/img-2.png",
      title: "Í ní tìle. (de 11h à 16h)",
      dec: "Commencer la leçon",
    },
    {
      id: 3,
      image: "/assets/lession/img-3.png",
      title: "Áw ní wúla. (de 16h à 19h)",
      dec: "Commencer la leçon",
    },
    {
      id: 4,
      image: "/assets/lession/img-4.png",
      title: "Áw ní sú. (de 19h à 5h)",
      dec: "Commencer la leçon",
    },
    {
      id: 5,
      image: "/assets/lession/img-1.png",
      title: "Í ní sɔ̀gɔma. (de 5h à 11h)",
      dec: "Commencer la leçon",
    },
    {
      id: 6,
      image: "/assets/lession/img-1.png",
      title: "Í ní sɔ̀gɔma. (de 5h à 11h)",
      dec: "Commencer la leçon",
    },
  ];
  return (
    <div id="gt">
      <div>
        <div className="row ">
          {cardData.map((result) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <NavLink to={"/lession/gretting/learn"}>
                <div className=" mt-5 card-box w-100 text-center align-self-center">
                  <div className="card ">
                    <img
                      className="card-img-top"
                      src={`${result.image}`}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <h2>{result.title}</h2>
                      </div>
                      <div className="d-flex justify-content-center">
                        <span>{result.dec}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
