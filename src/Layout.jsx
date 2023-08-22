import React from "react";
import Navber from "./components/Navber";
import Process from "./components/Process";

export default function Layout() {
  return (
    <div>
      <div>
        <Navber />
      </div>

      <div className=" container">
        <div className="row mt-4">
          <div className="col-8"></div>
          <div className="col-4">
            {" "}
            <Process />
          </div>
        </div>
      </div>
    </div>
  );
}
