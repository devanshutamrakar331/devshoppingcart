import React, { useEffect } from "react";
const CartSection = ({ cardItem, removeItem, buyItem }) => {
  let amount = 0;

  cardItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });
  return (
    <div id="cartSection">
      <h1>Cart</h1>
      {cardItem.map((item) => {
        return (
          <div id="cartItem" key={item.id}>
            <div id="smallPhoto">
              <img src={item.tinyImage} alt="" />
            </div>
            <div id="cartText">
              <h3>{item.productName}</h3>
              <h3>Rs.{item.productPrice * 500}</h3>
            </div>
            <button
              id="remove"
              onClick={() => {
                removeItem(item);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      {cardItem.length >= 1 ? (
        <div id="totalAmount">
          <h1 className="hello">Total Amount of : Rs.{amount * 500}</h1>
          <button onClick={buyItem}>Purchase Now</button>
        </div>
      ) : (
        <h1>{""}</h1>
      )}
    </div>
  );
};

export default CartSection;
