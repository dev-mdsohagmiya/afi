import React from "react";
import "../styles/Process.css";
import ProcessPercent from "./ProcessPercent";
import DailyGoals from "./DailyGoals";
export default function Process() {
  return (
    <div id="process">
      <div className="">
        <div>
          <div>
            {" "}
            <h3>Progression</h3>
          </div>
          <div className="d-flex justify-content-end">
            <div className="lavel-box d-flex justify-content-center align-items-center">
              <h3>Niv. 1</h3>
            </div>
          </div>
          <div>
            <ProcessPercent />
          </div>
          <div className="dash-border">
            <img src="/assets/line.svg" className="img-fluid" alt="" />
          </div>
        </div>
        <div>
          <DailyGoals />
        </div>
      </div>
    </div>
  );
}
