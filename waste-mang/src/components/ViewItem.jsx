import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/ViewItem.css";
const ViewItem = ({ name, price, userName, description, imageList }) => {
  return (
    <>
      <h2>View Item</h2>
      <div className="view-main">
        <div className="image-view">
          <Carousel showThumbs={false}>
            {imageList.map((imageUrl, index) => (
              <div key={index}>
                <img src={imageUrl} alt={`Image ${index + 1}`} />
                {/* <p className="legend">{`Image ${index + 1}`}</p> */}
              </div>
            ))}
          </Carousel>
        </div>
        <div className="detail-view">
          <div className="item-details border">
            <h2>{name}</h2>
            <h6>{userName}</h6>

            <p>{description}</p>
          </div>
          <div className="border">
            <p className="price">${price}</p>
            <button className="buy-button">Buy</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewItem;
