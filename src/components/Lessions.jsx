import React, { useEffect } from "react";
import "../styles/Lessions.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  bonusPointIncrement,
  lessionIncrement,
} from "../services/actions/lessionActions";

export default function Lessions() {
  const changeLessionState = useDispatch();

  useEffect(() => {
    //completed lessions
    changeLessionState(lessionIncrement(53));

    // bonus points
    changeLessionState(bonusPointIncrement(9));
  }, []);

  return (
    <div id="fullpath">
      <div>
        <div className="lsvg-1">
          <NavLink className={"lession-link"}>
            <div className="div">
              <span className="cmt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="91"
                  viewBox="0 0 97 91"
                  fill="none"
                >
                  <path
                    d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <h2>Salutations</h2>
              </span>
            </div>
          </NavLink>
        </div>
        <div className="lsvg-2">
          <NavLink className={"lession-link"}>
            <div className="div">
              <span className="cmt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="91"
                  viewBox="0 0 97 91"
                  fill="none"
                >
                  <path
                    d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <h2>Donner et prendre des nouvelles</h2>
              </span>
            </div>
          </NavLink>
        </div>
        <div className="lsvg-3">
          <NavLink className={"lession-link"}>
            <div className="div">
              <span className="cmt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="91"
                  viewBox="0 0 97 91"
                  fill="none"
                >
                  <path
                    d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <h2>Donner et prendre des nouvelles</h2>
              </span>
            </div>
          </NavLink>
        </div>
        <div className="lsvg-4">
          <NavLink className={"lession-link"}>
            <div className="div">
              <span className="cmt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="91"
                  viewBox="0 0 97 91"
                  fill="none"
                >
                  <path
                    d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <h2>Bennedictions</h2>
              </span>
            </div>
          </NavLink>
        </div>
        <div className="lsvg-5">
          <NavLink className={"lession-link"}>
            <div className="div">
              <span className="cmt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="91"
                  viewBox="0 0 97 91"
                  fill="none"
                >
                  <path
                    d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <h2>Bennedictions</h2>
              </span>
            </div>
          </NavLink>
        </div>
        <div className="lsvg-6">
          <NavLink className={"lession-link"}>
            <div className="div">
              <span className="cmt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="91"
                  viewBox="0 0 97 91"
                  fill="none"
                >
                  <path
                    d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <h2>Se présenter 1</h2>
              </span>
            </div>
          </NavLink>
        </div>
        <div className="lsvg-7">
          <NavLink className={"lession-link"}>
            <div className="div">
              <span className="cmt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="91"
                  viewBox="0 0 97 91"
                  fill="none"
                >
                  <path
                    d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <h2>Se présenter 2</h2>
              </span>
            </div>
          </NavLink>
        </div>
        <div className="lsvg-8">
          <NavLink className={"lession-link"}>
            <div className="div">
              <span className="cmt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="91"
                  viewBox="0 0 97 91"
                  fill="none"
                >
                  <path
                    d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <h2>Chiffres et nombres</h2>
              </span>
            </div>
          </NavLink>
        </div>
        <div className="lsvg-9">
          <NavLink className={"lession-link"}>
            <div className="div">
              <span className="cmt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="91"
                  viewBox="0 0 97 91"
                  fill="none"
                >
                  <path
                    d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <h2>Le présentatif </h2>
              </span>
            </div>
          </NavLink>
        </div>
        <div className="lsvg-10">
          <NavLink className={"lession-link"}>
            <div className="div">
              <span className="cmt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="97"
                  height="91"
                  viewBox="0 0 97 91"
                  fill="none"
                >
                  <path
                    d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <h2>Qu’aimes-tu ?</h2>
              </span>
            </div>
          </NavLink>
        </div>

        <NavLink className={" lession-link-e"}>
          <div className="lsvg-11">
            <NavLink className={""}>
              <div className="div">
                <span className="cmt">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </div>
                </span>
              </div>
            </NavLink>
          </div>
          <div className="lsvg-12">
            <NavLink className={""}>
              <div className="div">
                <span className="cmt">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </div>
                </span>
              </div>
            </NavLink>
          </div>
        </NavLink>
        <NavLink className={"lession-link-e"}>
          <div className="lsvg-13">
            <NavLink className={""}>
              <div className="div">
                <span className="cmt">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </div>
                </span>
              </div>
            </NavLink>
          </div>
          <div className="lsvg-14">
            <NavLink className={""}>
              <div className="div">
                <span className="cmt">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </div>
                </span>
              </div>
            </NavLink>
          </div>
        </NavLink>
        <div className="lsvg-15">
          <NavLink className={"lession-link-e"}>
            <div className="div">
              <span className="cmt">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="97"
                    height="91"
                    viewBox="0 0 97 91"
                    fill="none"
                  >
                    <path
                      d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </div>
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
