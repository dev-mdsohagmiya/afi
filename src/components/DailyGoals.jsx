import React, { useState } from "react";
import "../styles/DailyGoals.css";
import RankTabs from "./RankTabs";
import { useSelector } from "react-redux";
export default function DailyGoals() {
  const { lavel, point, ciwara } = useSelector((state) => state);

  return (
    <div id="d-goals">
      <div>
        <div>
          <h3 className="h3-1">Objectif quotidiens :</h3>
          <div className="hours">
            <small>Objectif quotidien</small>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <div className="earn ">
            <h3> Cauris gagnés :</h3>
            <div className="earn-pa">
              <div>
                <div className="image-1">
                  <img className="" src="/assets/ppdille2.svg" alt="" />
                </div>
                <div>
                  <small>{ciwara} CIWARA</small>{" "}
                </div>
              </div>
              <div>
                <div className="">
                  <img className="image-1" src="/assets/e.svg" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                  <div>
                    <small>{point} pieces</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <RankTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
