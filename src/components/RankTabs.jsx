import React from "react";
import "../styles/DailyGoals.css";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import RankDay from "./RankDay";

export default function RankTabs() {
  const rankuserData = [
    {
      id: 1,
      name: "ROSIE762",
      number: "2700",
    },
    ,
    {
      id: 2,
      name: "ROSIE762",
      number: "2700",
    },
    {
      id: 3,
      name: "ROSIE762",
      number: "2700",
    },
  ];
  return (
    <BrowserRouter>
      <div className="ranking">
        <h3>Classement de la semaine EN BAMBARA</h3>
        <div>
          <div className="btn-tabs">
            <NavLink exact to={"/"}>
              <button className="btn-1">Mois</button>
            </NavLink>
            <NavLink to={"/week"}>
              <button className="btn-2  mx-2 mx-xxl-4">semaine</button>
            </NavLink>
            <NavLink to={"/month"}>
              <button className="btn-3">Jours</button>
            </NavLink>
          </div>
        </div>
        <div>
          <div>
            {/* tabs data */}
            <div>
              <Routes>
                <Route path="/" element={<RankDay />}></Route>
                <Route path="/day" element={<RankDay />}></Route>
                <Route path="/week" element={<RankDay />}></Route>

                <Route path="/month" element={<RankDay />}></Route>
              </Routes>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </BrowserRouter>
  );
}
