import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import BuySection from "./Components/BuySection";
import CartItem from "./Components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import CartSection from "./Components/CartSection";
import Navbar from "./Components/Navbar";
const App = () => {
  const [cardItem, setCardItem] = useState([]);

  const addCartItem = (item) => {
    const isAdded = cardItem.findIndex((result) => {
      return result.id === item.id;
    });
    if (isAdded !== -1) {
      return toast("Item already Exist in Cart", {
        type: "error",
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    setCardItem([...cardItem, item]);
  };
  const buyItem = (item) => {
    setCardItem([]);
    toast("Item Successfully Purchased", {
      type: "success",
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const removeItem = (item) => {
    setCardItem(cardItem.filter((arr) => arr.id !== item.id));
  };
  return (
    <div id="main">
      <Navbar />
      <ToastContainer id="toast" />
      <BuySection addCartItem={addCartItem} />
      <CartSection
        cardItem={cardItem}
        removeItem={removeItem}
        buyItem={buyItem}
      />
    </div>
  );
};

export default App;
