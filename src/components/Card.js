import React from "react";
export const Card = ({ title, svg, text, actions }) => {
  return (
    <div>
      <div className="cardComponent">
        <div className="cardHeader">
          {/* <svg width='30px' height='30px' xmlns={svg}></svg> */}
          <img src={svg} alt="icon" />
          <h3>{title}</h3>
        </div>
        <div className="cardBody">
          <div className="cardText">{text}</div>
          {actions}
        </div>
      </div>
    </div>
  );
};

export default Card;
