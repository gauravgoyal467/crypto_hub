import React, { useState } from "react";
import "./style.css";

const CoinInfo = ({ name, desc }) => {
  const [status, setStatus] = useState(false);

  let shortPara = desc.substring(0, 800) + "<span style=color:var(--white)> Read More...</span>";
  let longPara = desc + "<span style=color:var(--white)> Read less...</span>";

  return (
    <div className="CoinPageInfo">
      <h3>{name}</h3>
      {desc.length > 800 ? (
        <p 
        onClick={()=>setStatus(!status)}
        dangerouslySetInnerHTML={{ __html: !status ? shortPara : longPara }} />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
};

export default CoinInfo;
