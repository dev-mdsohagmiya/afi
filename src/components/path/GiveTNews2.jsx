import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import "../../styles/path/GiveTNews2.css";
import "../../styles/FullPath.css";
export default function GiveTNews2(props) {
  const { done } = props;
  const delay = 1350;
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
    setTimeout(() => setLinkColor("processh2"), delay + 700);
  };

  if (done) {
    handleFillColor();
  }

  return (
    <div id="gt-news2">
      <h2>
        <NavLink className={linkColor}>Donner et prendre des nouvelles</NavLink>
      </h2>
      <div className={`svg-1 ${fillColor1}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
        >
          <path
            d="M0.977539 3.77613C0.977539 2.91079 1.36661 2.05748 2.10834 1.49481C3.36661 0.537479 5.163 0.784126 6.11767 2.04146C9.54167 6.54813 13.3906 10.7121 17.5603 14.4188C18.7427 15.4681 18.8494 17.2775 17.7974 18.4601C16.7479 19.6415 14.939 19.7481 13.7573 18.6961C9.31087 14.7441 5.20833 10.3055 1.56034 5.50679C1.1682 4.98812 0.977539 4.38013 0.977539 3.77613Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-2 ${fillColor2}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="14"
          viewBox="0 0 23 14"
          fill="none"
        >
          <path
            d="M0.905273 3.75075C0.905273 3.26542 1.02821 2.77343 1.28808 2.32409C2.07768 0.95476 3.82821 0.484076 5.19754 1.27341C10.0897 4.09208 15.2563 6.37874 20.5522 8.06941C22.0575 8.54941 22.8869 10.1587 22.4082 11.6654C21.9282 13.1721 20.3189 14.0041 18.8121 13.5228C13.1266 11.7094 7.58554 9.2574 2.33914 6.2334C1.41888 5.70274 0.905273 4.74142 0.905273 3.75075Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-3 ${fillColor3}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="7"
          viewBox="0 0 25 7"
          fill="none"
        >
          <path
            d="M0.87793 3.23452C0.87793 3.14918 0.881925 3.06519 0.889925 2.97986C1.02726 1.40519 2.41659 0.241195 3.99126 0.379861C6.21926 0.574528 8.48325 0.674523 10.7179 0.674523L21.1686 0.674524C22.7486 0.674524 24.0299 1.95585 24.0299 3.53585C24.0299 5.11852 22.7486 6.39985 21.1686 6.39985L10.7179 6.39985C8.31525 6.39985 5.88326 6.2932 3.48993 6.0812C2.00059 5.95053 0.877929 4.69985 0.87793 3.23452Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-4 ${fillColor4}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="7"
          viewBox="0 0 24 7"
          fill="none"
        >
          <path
            d="M0.747558 3.53613C0.747559 1.95613 2.02889 0.674805 3.61022 0.674805L21.0515 0.674806C22.6315 0.674806 23.9129 1.95613 23.9129 3.53613C23.9129 5.1188 22.6315 6.40013 21.0515 6.40013L3.61022 6.40013C2.02889 6.40013 0.747558 5.1188 0.747558 3.53613Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-5 ${fillColor5}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="7"
          viewBox="0 0 24 7"
          fill="none"
        >
          <path
            d="M0.631348 3.53613C0.631348 1.95613 1.91268 0.674805 3.49401 0.674805L20.9353 0.674806C22.5153 0.674806 23.7967 1.95613 23.7967 3.53613C23.7967 5.1188 22.5153 6.40013 20.9353 6.40013L3.49401 6.40013C1.91268 6.40013 0.631347 5.1188 0.631348 3.53613Z"
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
            d="M0.514648 3.53613C0.514648 1.95613 1.79598 0.674805 3.37731 0.674805L20.8186 0.674806C22.3986 0.674806 23.68 1.95613 23.68 3.53613C23.68 5.1188 22.3986 6.40013 20.8186 6.40013L3.37731 6.40013C1.79598 6.40013 0.514648 5.1188 0.514648 3.53613Z"
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
            d="M0.396973 3.53613C0.396973 1.95613 1.6783 0.674805 3.25964 0.674805L20.7023 0.674806C22.2823 0.674806 23.5636 1.95613 23.5636 3.53613C23.5636 5.1188 22.2823 6.40013 20.7023 6.40013L3.25963 6.40013C1.6783 6.40013 0.396972 5.1188 0.396973 3.53613Z"
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
            d="M0.280762 3.53613C0.280762 1.95613 1.56209 0.674805 3.14342 0.674805L20.5848 0.674806C22.1661 0.674806 23.4474 1.95613 23.4474 3.53613C23.4474 5.1188 22.1661 6.40013 20.5848 6.40013L3.14342 6.40013C1.56209 6.40013 0.280762 5.1188 0.280762 3.53613Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-9 ${fillColor9}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="7"
          viewBox="0 0 15 7"
          fill="none"
        >
          <path
            d="M0.164551 3.53613C0.164551 1.95613 1.44588 0.674805 3.02588 0.674805L11.6139 0.674805C13.1939 0.674805 14.4752 1.95613 14.4752 3.53613C14.4752 5.1188 13.1939 6.40013 11.6139 6.40013L3.02588 6.40013C1.44588 6.40013 0.164551 5.1188 0.164551 3.53613Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-10 ${fillColor10}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="8"
          viewBox="0 0 16 8"
          fill="none"
        >
          <path
            d="M0.75 3.73864C0.75 2.15731 2.03266 0.875977 3.614 0.875977C6.56866 0.875977 9.55798 1.03732 12.494 1.35599C14.066 1.52666 15.1993 2.91998 15.0313 4.51064C14.8593 6.08264 13.4473 7.21865 11.8767 7.04798C9.14333 6.75065 6.36333 6.59997 3.614 6.59997C2.03266 6.59997 0.75 5.31864 0.75 3.73864Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-11 ${fillColor11}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
        >
          <path
            d="M0.214355 2.9494C0.214355 2.64274 0.262341 2.33341 0.366341 2.02675C0.875674 0.530747 2.50101 -0.269274 3.99834 0.238726C9.61034 2.14539 15.0743 4.68139 20.2397 7.77339C21.5957 8.58539 22.037 10.3441 21.225 11.6987C20.413 13.0561 18.6557 13.4974 17.2983 12.6854C12.481 9.80007 7.38636 7.43741 2.1557 5.65874C0.96503 5.25475 0.214355 4.14007 0.214355 2.9494Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
      <div className={`svg-12 ${fillColor12}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
        >
          <path
            d="M0.767578 3.57988C0.767578 2.89055 1.0156 2.19588 1.5196 1.64788C2.5876 0.481213 4.39691 0.402535 5.56224 1.4692C9.92224 5.46253 13.9396 9.92654 17.5022 14.7412C18.4436 16.0132 18.1729 17.8052 16.9022 18.7452C15.6316 19.6865 13.8382 19.4172 12.8982 18.1479C9.55557 13.6279 5.78491 9.43722 1.69691 5.69189C1.08091 5.12789 0.767578 4.35454 0.767578 3.57988Z"
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
