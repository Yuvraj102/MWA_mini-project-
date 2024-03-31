import React from "react";
import "../styles/ItemCard.css";
const ItemCard = ({ name, userName, imageURI, price }) => {
  return (
    <div className="item-card">
      {/* <a href=""> */}
        <div>
          <img className="card-img" src={imageURI} alt={name} />
        </div>
        <div className="text-items">
          <p className="price">${price}</p>
          <div className="name">{name}</div>
          <div className="username">@{userName}</div>
        </div>
      {/* </a> */}
    </div>
  );
};

export default ItemCard;
