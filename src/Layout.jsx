import React, { useEffect, useState } from "react";
import Navber from "./components/Navber";
import Process from "./components/Process";

import "./App.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Lessions from "./components/Lessions";

export default function Layout() {
  return (
    <BrowserRouter>
      <div id="layout">
        <div>
          <section className="sec-nav">
            <Navber />
          </section>

          <div className=" container">
            <div className="d-none d-xl-block">
              <div className="row mt-4   ">
                <div className="col-6 col-xl-8 d-flex justify-content-center position-relative">
                  <section className="sec-lessions d-flex justify-content-center">
                    <div className="col-card">
                      <Lessions />
                    </div>
                  </section>
                </div>

                <div className="col-6 col-xl-4 d-flex justify-content-end">
                  <section className="sec-process ">
                    <div className="col-card">
                      <Process />
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="d-block d-xl-none">
              <div className="d-flex justify-content-center">
                <Routes>
                  <Route path="/" element={<Process />}></Route>
                  <Route path="/week" element={<Process />}></Route>
                  <Route path="/month" element={<Process />}></Route>

                  <Route
                    path="/dashboard"
                    element={
                      <section className="sec-m-lessions">
                        <Lessions />
                      </section>
                    }
                  ></Route>
                  <Route
                    path="/process"
                    element={
                      <section className="sec-m-process">
                        <Process />
                      </section>
                    }
                  ></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
