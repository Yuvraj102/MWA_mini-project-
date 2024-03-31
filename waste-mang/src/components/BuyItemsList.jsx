import React, { useState } from "react";
import "../styles/BuyItemsList.css";
import ItemCard from "./ItemCard";
import { makePayment } from "../stripe/stripedata";

const BuyItemsList = () => {
  const [price, setPrice] = useState(200)
  const handlePay = async  (event) => {
    await makePayment([{
      name : "sample", 
      images : ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw2aK0DMdxTRW8nebSSottLs&ust=1711964109888000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj007eZnoUDFQAAAAAdAAAAABAE'],
      price : price,
      quantity: 1
    }])
  }
  return (
    <>
      <div onClick={handlePay}>
        <ItemCard
          name="Ceramic White Vase"
          userName="vasefuluser"
          imageURI={
            "https://plus.unsplash.com/premium_photo-1681382743881-6afac0a7a556?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          price={price}
        />
      </div>
    </>
  );
};

export default BuyItemsList;
