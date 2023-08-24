import React, { useEffect, useState } from "react";
import "../../styles/path/Greetings.css";
import "../../styles/FullPath.css";
import { NavLink } from "react-router-dom";
export default function Greetings(props) {
  const { done } = props;
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
  if (done) {
    setTimeout(() => setFillColor1("fill-color"), 50);
    setTimeout(() => setFillColor2("fill-color"), 100);
    setTimeout(() => setFillColor3("fill-color"), 150);
    setTimeout(() => setFillColor4("fill-color"), 200);
    setTimeout(() => setFillColor5("fill-color"), 250);
    setTimeout(() => setFillColor6("fill-color"), 300);
    setTimeout(() => setFillColor7("fill-color"), 400);
    setTimeout(() => setFillColor8("fill-color"), 350);
    setTimeout(() => setFillColor9("fill-color"), 400);
    setTimeout(() => setFillColor10("fill-color"), 450);
    setTimeout(() => setFillColor11("fill-color"), 500);
    setTimeout(() => setFillColor12("fill-color"), 550);
    setTimeout(() => setLinkColor("processh2"), 600);
  }

  return (
    <div id="gtns">
      <div className="gtns-container">
        <h2>
          <NavLink className={linkColor}>Salutations</NavLink>
        </h2>
        <div className={`svg-1 ${fillColor1} `}>
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
        <div className={`svg-2 ${fillColor2}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
          >
            <path d="M1.38489 0.585965C2.70189 -0.290295 4.47835 0.0668049 5.35358 1.38224C6.2288 2.69768 15.0357 15.9342 15.0357 15.9342C15.9109 17.2496 15.554 19.0261 14.237 19.9024C12.9211 20.778 11.1446 20.4209 10.2694 19.1055L0.587253 4.55351C-0.287972 3.23807 0.0689007 1.46156 1.38489 0.585965Z" />
          </svg>
        </div>
        <div className={`svg-3 ${fillColor3}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="13"
            viewBox="0 0 23 13"
            fill="none"
          >
            <path
              d="M1.00549 2.68151C1.55982 1.19995 3.2089 0.449024 4.68871 1.0027L21.059 7.1277C22.5388 7.68137 23.29 9.33034 22.7356 10.8119C22.1817 12.2923 20.5327 13.0433 19.0529 12.4896L2.68254 6.36461C1.20273 5.81093 0.451585 4.16195 1.00549 2.68151Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className={`svg-4 ${fillColor4}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="6"
            viewBox="0 0 24 6"
            fill="none"
          >
            <path
              d="M0.00244128 2.86282C0.00244135 1.28095 1.2838 -0.000244085 2.8638 -0.000244016L20.3424 -0.000243252C21.9224 -0.000243182 23.2038 1.28095 23.2038 2.86282C23.2038 4.44348 21.9224 5.72468 20.3424 5.72468L2.8638 5.72468C1.2838 5.72468 0.00244121 4.44348 0.00244128 2.86282Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className={`svg-5 ${fillColor5}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="6"
            viewBox="0 0 24 6"
            fill="none"
          >
            <path
              d="M0.00244128 2.86257C0.00244135 1.28071 1.2838 -0.000488225 2.8638 -0.000488156L20.3424 -0.000487392C21.9224 -0.000487323 23.2038 1.28071 23.2038 2.86257C23.2038 4.44324 21.9224 5.72444 20.3424 5.72444L2.8638 5.72444C1.2838 5.72444 0.00244121 4.44324 0.00244128 2.86257Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className={`svg-6 ${fillColor6}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="7"
            viewBox="0 0 15 7"
            fill="none"
          >
            <path
              d="M0.157715 3.26296C0.157715 1.6811 1.43904 0.399902 3.02038 0.399902L11.607 0.399903C13.187 0.399903 14.4697 1.6811 14.4697 3.26296C14.4697 4.84363 13.187 6.12483 11.607 6.12483L3.02038 6.12483C1.43904 6.12483 0.157715 4.84363 0.157715 3.26296Z"
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
              d="M0.223144 3.26296C0.223144 1.6811 1.50451 0.399902 3.08451 0.399902L20.5632 0.399903C22.1432 0.399903 23.4245 1.6811 23.4245 3.26296C23.4245 4.84363 22.1432 6.12483 20.5632 6.12483L3.0845 6.12483C1.5045 6.12483 0.223144 4.84363 0.223144 3.26296Z"
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
              d="M0.177734 3.26296C0.177734 1.6811 1.45906 0.399902 3.0404 0.399902L20.5164 0.399903C22.0977 0.399903 23.3791 1.6811 23.3791 3.26296C23.3791 4.84363 22.0977 6.12483 20.5164 6.12483L3.0404 6.12483C1.45906 6.12483 0.177734 4.84363 0.177734 3.26296Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className={`svg-9 ${fillColor9}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="7"
            viewBox="0 0 24 7"
            fill="none"
          >
            <path
              d="M0.130859 3.26296C0.130859 1.6811 1.41219 0.399902 2.99352 0.399902L12.8442 0.399903C15.4655 0.399903 18.1202 0.527497 20.7295 0.78003C22.3029 0.92963 23.4669 2.33483 23.3042 3.90243C23.1535 5.47643 21.7549 6.6291 20.1802 6.47643C17.7522 6.2431 15.2842 6.12483 12.8442 6.12483L2.99352 6.12483C1.41219 6.12483 0.130859 4.84363 0.130859 3.26296Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className={`svg-10 ${fillColor10}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="14"
            viewBox="0 0 23 14"
            fill="none"
          >
            <path
              d="M0.653808 3.2098C0.653808 2.91393 0.700453 2.6134 0.797786 2.31767C1.28979 0.815001 2.90713 -0.00273716 4.4098 0.49113C10.0925 2.35566 15.6245 4.85926 20.8538 7.9338C22.2151 8.7358 22.6698 10.4895 21.8698 11.853C21.0671 13.215 19.3138 13.6691 17.9511 12.8687C13.0751 10.0015 7.91911 7.6666 2.62445 5.9286C1.41911 5.5338 0.653808 4.41393 0.653808 3.2098Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className={`svg-11 ${fillColor11}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M0.00244128 2.86109C0.00244131 2.1763 0.246447 1.48976 0.741113 0.941898C1.80245 -0.229969 3.61179 -0.321175 4.78379 0.738691C9.20646 4.73869 13.2798 9.21896 16.8918 14.0602C17.8385 15.3274 17.5784 17.12 16.3091 18.0654C15.0424 19.0107 13.2504 18.7502 12.3038 17.4835C8.91444 12.9403 5.09178 8.73616 0.945117 4.98456C0.319784 4.41949 0.00244125 3.64243 0.00244128 2.86109Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className={`svg-12 ${fillColor12}`}>
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
    </div>
  );
}
