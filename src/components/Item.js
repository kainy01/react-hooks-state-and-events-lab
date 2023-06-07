import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const handleCartToggle = () => {
    setIsInCart(!isInCart);
  };

  const cartButtonText = isInCart ? "Remove From Cart" : "Add to Cart";
  const cartClass = isInCart ? "in-cart" : "";
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>{cartButtonText}</button>
    </li>
  );
}

export default Item;
