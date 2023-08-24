import React, { useEffect, useState } from "react";
import Navber from "./components/Navber";
import Process from "./components/Process";
import FullPath from "./components/FullPath";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

export default function Layout() {
  return (
    <BrowserRouter>
      <div>
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
              <div className="d-flex justify-content-center">
                <Routes>
                  <Route path="/" element={<Process />}></Route>
                  <Route path="/week" element={<Process />}></Route>
                  <Route path="/month" element={<Process />}></Route>

                  <Route path="/dashboard" element={<FullPath />}></Route>
                  <Route path="/process" element={<Process />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
