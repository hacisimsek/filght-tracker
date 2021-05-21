import React from "react";
import "../styles/Card.css";

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img data-testid="img-test"  src={src} alt="" />

      <div className="card_info">
        <h2 data-testid="h2-test" >{title}</h2>
        <h4 data-testid="h4-test">{description}</h4>
        <h3 >{price}</h3>
      </div>
    </div>
  );
}

export default Card;
