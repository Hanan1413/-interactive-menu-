import React from "react";
import { GiPriceTag } from "react-icons/gi";

const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article>
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5><GiPriceTag /></h5>
          <div className="item-price">${price}</div>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
