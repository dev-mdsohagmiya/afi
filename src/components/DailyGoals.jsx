import React from "react";
import "../styles/DailyGoals.css";
export default function DailyGoals() {
  return (
    <div id="d-goals">
      <div>
        <div>
          <h3 className="h3-1">Objectif quotidiens :</h3>
          <div className="hours">
            <small>Réviser 1h par jours</small>
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
                  <small>14 CIWARA</small>{" "}
                </div>
              </div>
              <div>
                <div className="">
                  <img className="image-1" src="/assets/e.svg" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                  <div>
                    <small>14 pieces</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ranking">
            <h3>Classement de la semaine EN BAMBARA</h3>
            <div>
              <div className="btn-tabs">
                <button className="btn-1">Mois</button>
                <button className="btn-2 mx-4">semaine</button>
                <button className="btn-3">Jours</button>
              </div>
            </div>
            <div>
              <div>
                <div className="rank-1 d-flex">
                  <div className="d-inline-block">
                    <button className="d-flex d-flex rf-btn justify-content-between align-items-center ">
                      <div className="number">1</div>
                      <div>
                        <img src="/assets/path346.svg" alt="" />
                      </div>
                      <div>ROSIE762</div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="15"
                          viewBox="0 0 24 15"
                          fill="none"
                        >
                          <path
                            d="M22.295 8.21883L20.1177 15C12.8616 14.8166 15.1332 14.8516 11.8327 14.8516C8.53257 14.8516 6.54122 15 3.05966 15L0.882324 8.21883C0.882324 8.21883 7.24185 16.027 4.95869 4.66419C4.95869 4.66419 10.4873 16.3046 11.5885 0.183533C12.692 16.3046 18.2186 4.66419 18.2186 4.66419C15.9355 16.027 22.295 8.21883 22.295 8.21883Z"
                            fill="#FE9700"
                          />
                          <ellipse
                            cx="0.808414"
                            cy="7.78909"
                            rx="0.808414"
                            ry="0.800812"
                            fill="#FE9700"
                          />
                          <ellipse
                            cx="4.92365"
                            cy="4.29544"
                            rx="0.808414"
                            ry="0.800812"
                            fill="#FE9700"
                          />
                          <ellipse
                            cx="11.5384"
                            cy="0.800812"
                            rx="0.808414"
                            ry="0.800812"
                            fill="#FE9700"
                          />
                          <ellipse
                            cx="18.2996"
                            cy="4.58548"
                            rx="0.808414"
                            ry="0.800812"
                            fill="#FE9700"
                          />
                          <ellipse
                            cx="22.2689"
                            cy="7.78909"
                            rx="0.808414"
                            ry="0.800812"
                            fill="#FE9700"
                          />
                          <rect
                            x="3.08691"
                            y="13.6865"
                            width="17.0502"
                            height="1.31042"
                            fill="#FE9700"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                  <button className="d-inline-block">hello</button>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
