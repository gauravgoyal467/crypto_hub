import React, { useState } from "react";
import "./style.css";

const CoinInfo = ({ name, desc }) => {
  const [status, setStatus] = useState(false);
  let shortPara = "";
  let longPara = "";
  if (desc) {
    shortPara =
      desc.slice(0, 800) +
      "<span style=color:var(--white)> Read More...</span>";
    longPara = desc + "<span style=color:var(--white)> Read less...</span>";
  }

  return (
    <div className="CoinPageInfo">
      <h3>{name}</h3>
      {desc &&
      (  desc.length > 800 ? (
        <p
          onClick={() => setStatus(!status)}
          dangerouslySetInnerHTML={{ __html: !status ? shortPara : longPara }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      ))
}
    </div>
  );
};

export default CoinInfo;
