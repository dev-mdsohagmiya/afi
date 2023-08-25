import React, { useState } from "react";
import "../../styles/path/Blessings2.css";
import { NavLink } from "react-bootstrap";
import "../../styles/FullPath.css";

export default function Blessings2(props) {
  const { done } = props;
  const delay = 2750;
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
    setTimeout(() => setLinkColor("processh2"), delay + 800);
  };

  if (done) {
    handleFillColor();
  }

  return (
    <div id="blessings2">
      <div className={`svg-1 ${fillColor1}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="23"
          viewBox="0 0 13 23"
          fill="none"
        >
          <path
            d="M0.208008 2.92252C0.208008 1.66385 1.04387 0.510494 2.31574 0.162494C3.83974 -0.254839 5.41427 0.643867 5.83187 2.1692C7.32094 7.61853 9.31574 12.9465 11.7652 18.0079C12.4533 19.4305 11.8585 21.1412 10.4356 21.8305C9.0116 22.5199 7.29961 21.9238 6.61321 20.5012C4.01054 15.1252 1.89027 9.46381 0.309074 3.67981C0.23974 3.42515 0.208008 3.17319 0.208008 2.92252Z"
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
            d="M0.353515 3.17585C0.353516 2.29985 0.753519 1.43721 1.50925 0.874544C2.78005 -0.0667895 4.57165 0.198536 5.51445 1.46654C8.89045 6.0172 12.6987 10.2319 16.832 13.9919C17.9998 15.0559 18.0869 16.8652 17.0211 18.0345C15.9571 19.2052 14.1478 19.2905 12.9784 18.2252C8.57165 14.2159 4.51445 9.72648 0.917513 4.87982C0.537246 4.36648 0.353515 3.76785 0.353515 3.17585Z"
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
            d="M0.0537108 3.47952C0.0537108 2.98352 0.180249 2.4809 0.452116 2.02223C1.25732 0.663567 3.01358 0.214231 4.37505 1.01956C9.24012 3.90356 14.3854 6.25425 19.6668 8.01025C21.1668 8.50759 21.9801 10.1249 21.4801 11.6276C20.9828 13.1289 19.3614 13.9396 17.8614 13.4409C12.1922 11.5583 6.67345 9.03556 1.45465 5.94489C0.553713 5.40889 0.0537108 4.45819 0.0537108 3.47952Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-4 ${fillColor4}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="7"
          viewBox="0 0 25 7"
          fill="none"
        >
          <path
            d="M0.939453 3.37289C0.939453 3.27822 0.94345 3.18223 0.952783 3.08356C1.11145 1.5129 2.51412 0.364901 4.08745 0.522235C6.61012 0.775568 9.17678 0.904917 11.7181 0.904917L21.2501 0.904918C22.8314 0.904918 24.1128 2.18625 24.1128 3.76625C24.1128 5.34758 22.8314 6.62888 21.2501 6.62888L11.7181 6.62888C8.98745 6.62888 6.22613 6.4902 3.51413 6.2182C2.03946 6.07153 0.939453 4.82622 0.939453 3.37289Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-5 ${fillColor5}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="7"
          viewBox="0 0 25 7"
          fill="none"
        >
          <path
            d="M0.852539 3.76611C0.852539 2.18611 2.13388 0.904785 3.71522 0.904785L21.1806 0.904786C22.7619 0.904786 24.0432 2.18611 24.0432 3.76611C24.0432 5.34745 22.7619 6.62874 21.1806 6.62874L3.71522 6.62874C2.13388 6.62874 0.852539 5.34745 0.852539 3.76611Z"
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
            d="M0.784668 3.76611C0.784668 2.18611 2.06601 0.904785 3.64735 0.904785L21.114 0.904786C22.694 0.904786 23.9753 2.18611 23.9753 3.76611C23.9753 5.34745 22.694 6.62874 21.114 6.62874L3.64735 6.62874C2.06601 6.62874 0.784668 5.34745 0.784668 3.76611Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-7 ${fillColor7}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="7"
          viewBox="0 0 16 7"
          fill="none"
        >
          <path
            d="M0.716797 3.76611C0.716797 2.18611 1.99814 0.904785 3.57814 0.904785L12.1661 0.904786C13.7461 0.904786 15.0275 2.18611 15.0275 3.76611C15.0275 5.34745 13.7461 6.62874 12.1661 6.62874L3.57814 6.62874C1.99814 6.62874 0.716797 5.34745 0.716797 3.76611Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-8 ${fillColor8}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="6"
          viewBox="0 0 24 6"
          fill="none"
        >
          <path
            d="M0.432617 2.86306C0.432617 1.28119 1.71398 5.601e-08 3.29398 1.25074e-07L20.7726 8.8909e-07C22.3526 9.58154e-07 23.634 1.2812 23.634 2.86306C23.634 4.44373 22.3526 5.72493 20.7726 5.72493L3.29398 5.72493C1.71398 5.72493 0.432617 4.44373 0.432617 2.86306Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-9 ${fillColor9}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="6"
          viewBox="0 0 24 6"
          fill="none"
        >
          <path
            d="M0.387207 2.86306C0.387207 1.28119 1.66854 5.60087e-08 3.24987 1.25131e-07L20.7259 8.89032e-07C22.3072 9.58154e-07 23.5885 1.2812 23.5885 2.86306C23.5885 4.44373 22.3072 5.72493 20.7259 5.72493L3.24987 5.72493C1.66854 5.72493 0.387207 4.44373 0.387207 2.86306Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-10 ${fillColor10}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="7"
          viewBox="0 0 24 7"
          fill="none"
        >
          <path
            d="M0.340332 2.86306C0.340332 1.28119 1.62166 5.60087e-08 3.20299 1.25131e-07L13.0537 5.55718e-07C15.675 6.703e-07 18.3297 0.127594 20.939 0.380128C22.5123 0.529728 23.6763 1.93493 23.5137 3.50253C23.363 5.07653 21.9643 6.2292 20.3897 6.07653C17.9617 5.8432 15.4937 5.72493 13.0537 5.72493L3.20299 5.72493C1.62166 5.72493 0.340332 4.44373 0.340332 2.86306Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-11 ${fillColor11}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="14"
          viewBox="0 0 23 14"
          fill="none"
        >
          <path
            d="M0.863281 3.8099C0.863281 3.51403 0.909926 3.2135 1.00726 2.91777C1.49926 1.4151 3.1166 0.597361 4.61927 1.09123C10.3019 2.95576 15.8339 5.45936 21.0633 8.5339C22.4246 9.3359 22.8793 11.0896 22.0793 12.4531C21.2766 13.8151 19.5233 14.2692 18.1606 13.4688C13.2846 10.6016 8.12859 8.26669 2.83392 6.52869C1.62859 6.13389 0.863281 5.01403 0.863281 3.8099Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-12 ${fillColor12}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
        >
          <path
            d="M0.211914 3.46095C0.211914 2.77615 0.455919 2.08962 0.950586 1.54175C2.01192 0.369885 3.82126 0.278678 4.99326 1.33854C9.41593 5.33854 13.4893 9.81881 17.1013 14.66C18.0479 15.9272 17.7879 17.7199 16.5186 18.6652C15.2519 19.6105 13.4599 19.35 12.5132 18.0833C9.12391 13.5401 5.30126 9.33601 1.15459 5.58441C0.529256 5.01934 0.211914 4.24228 0.211914 3.46095Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-13 ${fillColor13}`}>
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
      </div>
    </div>
  );
}
