import React from "react";

const DonationSuccessPage = ({earnedPoints}) => {
  return (
    <div className="order-card">
    <h1 className="order-title">Donation Success</h1>
    <img
      src="https://cdn-icons-png.flaticon.com/512/14900/14900771.png"
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

export default DonationSuccessPage;
