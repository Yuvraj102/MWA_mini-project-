import React from "react";
import "../styles/OrderComplete.css";
const OrderCompletePage = ({ earnedPoints }) => {
  return (
    <div className="order-card">
      <h1 className="order-title">Order Successful</h1>
      <img
        src="https://cdn-icons-png.flaticon.com/512/5637/5637272.png"
        alt="Checkmark"
        className="checkmark-image"
      />
      <p className="order-message">
        Your item will be delivered to your address.
      </p>
      <p className="order-points">You earned {earnedPoints} points.</p>
      <button className="continue-button">Continue</button>
    </div>
  );
};

export default OrderCompletePage;
