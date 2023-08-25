import React, { useEffect, useState } from "react";
import "../../styles/path/Blessings.css";
import "../../styles/FullPath.css";

import { NavLink } from "react-bootstrap";

export default function (props) {
  const { done } = props;
  const delay = 2050;
  const [linkColor, setLinkColor] = useState("");
  const [fillColor1, setFillColor1] = useState("");
  const [fillColor2, setFillColor2] = useState("");
  const [fillColor3, setFillColor3] = useState("");
  const [fillColor4, setFillColor4] = useState("");
  const [fillColor5, setFillColor5] = useState("");
  const [fillColor6, setFillColor6] = useState("");
  const [fillColor7, setFillColor7] = useState("");
  const [fillColor8, setFillColor8] = useState("");
  const [fillColor9, setFillColor9] = useState("");
  const [fillColor10, setFillColor10] = useState("");
  const [fillColor11, setFillColor11] = useState("");
  const [fillColor12, setFillColor12] = useState("");
  const [fillColor13, setFillColor13] = useState("");
  const [fillColor14, setFillColor14] = useState("");
  const [fillColor15, setFillColor15] = useState("");

  const handleFillColor = () => {
    setTimeout(() => setFillColor1("fill-color"), delay + 50);
    setTimeout(() => setFillColor2("fill-color"), delay + 100);
    setTimeout(() => setFillColor3("fill-color"), delay + 150);
    setTimeout(() => setFillColor4("fill-color"), delay + 200);
    setTimeout(() => setFillColor5("fill-color"), delay + 250);
    setTimeout(() => setFillColor6("fill-color"), delay + 300);
    setTimeout(() => setFillColor7("fill-color"), delay + 350);
    setTimeout(() => setFillColor8("fill-color"), delay + 400);
    setTimeout(() => setFillColor9("fill-color"), delay + 450);
    setTimeout(() => setFillColor10("fill-color"), delay + 500);
    setTimeout(() => setFillColor11("fill-color"), delay + 550);
    setTimeout(() => setFillColor12("fill-color"), delay + 600);
    setTimeout(() => setFillColor13("fill-color"), delay + 650);
    setTimeout(() => setFillColor14("fill-color"), delay + 750);
    setTimeout(() => setFillColor15("fill-color"), delay + 750);
    setTimeout(() => setLinkColor("processh2"), delay + 800);
  };

  if (done) {
    handleFillColor();
  }

  return (
    <div id="blessings">
      <h2>
        <NavLink className={linkColor}>Bennedictions</NavLink>
      </h2>
      <div className={`svg-1  ${fillColor1}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="23"
          viewBox="0 0 13 23"
          fill="none"
        >
          <path
            d="M0.546874 19.8134C0.546874 19.396 0.638861 18.972 0.833528 18.5707C3.25886 13.548 5.23885 8.25601 6.72152 2.84267C7.13752 1.31867 8.71353 0.421335 10.2375 0.837335C11.7602 1.256 12.6615 2.82138 12.2415 4.35472C10.6709 10.1027 8.56552 15.7227 5.98818 21.0601C5.30018 22.4841 3.58953 23.08 2.16686 22.392C1.14286 21.8987 0.546874 20.8787 0.546874 19.8134Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-2 ${fillColor2}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <path
            d="M0.00244072 15.7422C0.00244075 14.9676 0.313102 14.1969 0.930436 13.6316C5.02244 9.88089 8.7891 5.68492 12.1291 1.16092C13.0678 -0.109749 14.8584 -0.379117 16.1318 0.55955C17.4024 1.49688 17.6744 3.28755 16.7331 4.56222C13.1758 9.38089 9.15977 13.8516 4.79977 17.8516C3.63444 18.9196 1.82376 18.8409 0.754426 17.6756C0.250426 17.1262 0.00244069 16.4342 0.00244072 15.7422Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-3 ${fillColor3}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
        >
          <path
            d="M0.270019 10.4196C0.270019 9.22896 1.02069 8.11695 2.21136 7.71162C7.43803 5.93028 12.53 3.56365 17.3434 0.676981C18.6994 -0.137686 20.4567 0.302296 21.27 1.6583C22.0847 3.0103 21.6447 4.77029 20.2874 5.58362C15.1287 8.68095 9.66737 11.2183 4.0567 13.1303C2.55937 13.6396 0.934007 12.841 0.424674 11.3436C0.320674 11.037 0.270019 10.7263 0.270019 10.4196Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-4 ${fillColor4}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="7"
          viewBox="0 0 16 7"
          fill="none"
        >
          <path
            d="M0.75 3.65174C0.75 2.0704 2.03266 0.789105 3.614 0.789105C6.36333 0.789106 9.14333 0.637093 11.8767 0.342426C13.4473 0.17176 14.8593 1.30643 15.0313 2.87843C15.1993 4.43843 14.066 5.86245 12.494 6.03312C9.55798 6.35178 6.56866 6.51443 3.614 6.51443C2.03266 6.51443 0.75 5.23307 0.75 3.65174Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-5 ${fillColor5}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="7"
          viewBox="0 0 15 7"
          fill="none"
        >
          <path
            d="M0.164551 3.85317C0.164551 2.27184 1.44588 0.990479 3.02588 0.990479L11.6139 0.990479C13.1939 0.990479 14.4752 2.27184 14.4752 3.85317C14.4752 5.43317 13.1939 6.7145 11.6139 6.7145L3.02588 6.7145C1.44588 6.7145 0.164551 5.43317 0.164551 3.85317Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-6 ${fillColor6}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="7"
          viewBox="0 0 24 7"
          fill="none"
        >
          <path
            d="M0.132812 3.85317C0.132812 2.27184 1.41414 0.990479 2.99548 0.990479L20.4608 0.990479C22.0421 0.990479 23.3235 2.27184 23.3235 3.85317C23.3235 5.43317 22.0421 6.7145 20.4608 6.7145L2.99547 6.7145C1.41414 6.7145 0.132812 5.43317 0.132812 3.85317Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-7 ${fillColor7}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="7"
          viewBox="0 0 24 7"
          fill="none"
        >
          <path
            d="M0.201172 3.85317C0.201172 2.27184 1.4825 0.990479 3.06383 0.990479L20.5292 0.990479C22.1118 0.990479 23.3918 2.27184 23.3918 3.85317C23.3918 5.43317 22.1118 6.7145 20.5292 6.7145L3.06383 6.7145C1.4825 6.7145 0.201172 5.43317 0.201172 3.85317Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-8 ${fillColor8}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="7"
          viewBox="0 0 24 7"
          fill="none"
        >
          <path
            d="M0.270508 3.85317C0.270508 2.27184 1.55185 0.990479 3.13185 0.990479L20.5985 0.990479C22.1785 0.990479 23.4598 2.27184 23.4598 3.85317C23.4598 5.43317 22.1785 6.7145 20.5985 6.7145L3.13185 6.7145C1.55185 6.7145 0.270508 5.43317 0.270508 3.85317Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-10 ${fillColor9}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="7"
          viewBox="0 0 24 7"
          fill="none"
        >
          <path
            d="M0.33789 3.85317C0.337891 2.27184 1.61922 0.990479 3.20055 0.990479L20.6672 0.990479C22.2472 0.990479 23.5286 2.27184 23.5286 3.85317C23.5286 5.43317 22.2472 6.7145 20.6672 6.7145L3.20055 6.7145C1.61922 6.7145 0.33789 5.43317 0.33789 3.85317Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-11 ${fillColor10}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="7"
          viewBox="0 0 24 7"
          fill="none"
        >
          <path
            d="M0.404785 3.85317C0.404785 2.27184 1.68612 0.990479 3.26878 0.990479L20.7328 0.990479C22.3154 0.990479 23.5968 2.27184 23.5968 3.85317C23.5968 5.43317 22.3154 6.7145 20.7328 6.7145L3.26878 6.7145C1.68612 6.7145 0.404785 5.43317 0.404785 3.85317Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-12 ${fillColor12}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="8"
          viewBox="0 0 24 8"
          fill="none"
        >
          <path
            d="M0.487305 4.19049C0.487305 2.73182 1.60063 1.48384 3.0833 1.34518C5.61397 1.10918 8.1833 0.989157 10.7193 0.99049L20.802 0.99049C22.3833 0.99049 23.6646 2.27185 23.6646 3.85319C23.6646 5.43319 22.3833 6.71451 20.802 6.71451L10.718 6.71451C8.3593 6.71451 5.96865 6.82518 3.61532 7.04518C2.04198 7.19051 0.647301 6.03453 0.500635 4.46119C0.492635 4.37053 0.487305 4.28116 0.487305 4.19049Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-13 ${fillColor13}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="14"
          viewBox="0 0 23 14"
          fill="none"
        >
          <path
            d="M0.52832 10.8556C0.52832 9.87298 1.03513 8.91427 1.94713 8.38227C7.18153 5.32761 12.719 2.84365 18.4029 0.996988C19.907 0.507655 21.5217 1.33029 22.0097 2.83429C22.495 4.33296 21.6763 5.95163 20.171 6.4423C14.8753 8.16097 9.71485 10.477 4.83352 13.3263C3.46685 14.125 1.71485 13.6623 0.917919 12.297C0.653919 11.845 0.52832 11.3476 0.52832 10.8556Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-14 ${fillColor14}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M0.682617 16.0036C0.682617 15.4063 0.869153 14.801 1.25715 14.2863C4.88529 9.45963 8.97062 4.99428 13.4014 1.01162C14.5785 -0.0443817 16.3878 0.0503007 17.4451 1.22763C18.5025 2.40363 18.405 4.21298 17.2279 5.26898C13.0717 9.00497 9.23834 13.1943 5.83314 17.7263C4.88421 18.9889 3.08941 19.2436 1.82541 18.2943C1.07741 17.7316 0.682616 16.8716 0.682617 16.0036Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-15 ${fillColor15}`}>
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
        </span>
        <div className="ex">
          <h2>
            <NavLink className={linkColor}>Bennedictions</NavLink>
          </h2>
        </div>
      </div>
    </div>
  );
}
