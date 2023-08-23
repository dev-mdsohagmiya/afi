import React from "react";
import Navber from "./components/Navber";
import Process from "./components/Process";
import FullPath from "./components/FullPath";

export default function Layout() {
  return (
    <div>
      <div>
        <Navber />
      </div>

      <div className=" container">
        <div className="d-none d-xl-block">
          <div className="row mt-4">
            <div className="col-xl-6 d-flex justify-content-center">
              <FullPath />
            </div>
            <div className="col-xl-6 d-flex justify-content-end">
              <Process />
            </div>
          </div>
        </div>
        <div className="d-block d-xl-none">
          <div className="d-flex justify-content-end">
            <Process />
          </div>
        </div>
      </div>
    </div>
  );
}
