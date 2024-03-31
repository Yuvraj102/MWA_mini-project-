// OrganizationView.js

import React from 'react';
import '../css/Donations.css'; // Import CSS file for styling

const Donation= ({ imageUrl, itemName, onDonateClick }) => {
    return (
        <div className="organization-view">
            <img src={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"} alt="Organization" />
            <div className="info">
                <h3>{itemName}</h3>
                <div><button onClick={onDonateClick}>Donate</button></div>
            </div>
        </div>
    );
}

export default Donation;
