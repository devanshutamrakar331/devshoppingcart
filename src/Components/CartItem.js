import React from "react";
const CartItem = ({ product, addCartItem }) => {
  return (
    <div id="totalCart2" style={{ display: "flex", flexDirection: "column" }}>
      <div id="card">
        <div id="photo">
          <img src={product.smallImage} alt="" />
        </div>
        <div id="cardData">
          <h1>{product.productName}</h1>
          <h3>Rs.{product.productPrice * 500}</h3>
          <button
            onClick={() => {
              addCartItem(product);
            }}
          >
            <i class="ri-shopping-cart-2-fill"></i>
            <h3>Add To Cart</h3>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
