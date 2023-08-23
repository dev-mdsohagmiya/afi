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
        <div className="d-none d-xl-block">
          <div className="row mt-4">
            <div className="col-xl-6"></div>
            <div className="col-xl-6 d-flex justify-content-end">
              {" "}
              <Process />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
