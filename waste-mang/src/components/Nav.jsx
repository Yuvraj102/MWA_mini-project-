import React from "react";
import "../styles/Nav.css";
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-upper">
        <div className="nav-appname pad">Marketplace</div>
        <div>
          <div className="pad">
            <input className="pad" placeholder="Pune"></input>
            <input placeholder="Search for something..."></input>
          </div>
        </div>
        <div className="pad">
          <button>Profile</button>
          <button> <a href="/sell"></a> Sell</button>
        </div>
      </div>

      <div className="nav-lower flex">
        <a>Electronics</a>
        <a>Decor</a>
        <a>Study</a>
        <a>Utiltiy</a>
      </div>
    </div>
  );
};

export default Nav;
