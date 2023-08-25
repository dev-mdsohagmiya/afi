import React from "react";
import "../styles/FullPath.css";
import Greetings from "./path/Greetings";
import GiveTNews from "./path/GiveTNews";
import GiveTNews2 from "./path/GiveTNews2";
import Blessings from "./path/Blessings";
import Blessings2 from "./path/Blessings2";
import Intro from "./path/Intro";
import Intro2 from "./path/Intro2";
import NumberAndDigits from "./path/NumberAndDigits";
import Presentative from "./path/Presentative";
import WhatDoYouLike from "./path/WhatDoYouLike";
import WhatDoYouLike2 from "./path/WhatDoYouLike2";
import WhatDoYouLike3 from "./path/WhatDoYouLike3";
export default function Lessions() {
  return (
    <div id="fullpath">
      <div>
        <Greetings done={false} />
        <GiveTNews done={false} />
        <GiveTNews2 done={false} />
        <Blessings done={false} />
        <Blessings2 />
        <Intro />
        <Intro2 />
        <NumberAndDigits />
        <Presentative />
        <WhatDoYouLike />
        <WhatDoYouLike2 />
        <WhatDoYouLike3 />
      </div>
    </div>
  );
}
