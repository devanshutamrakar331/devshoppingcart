import React, { useState, useEffect } from "react";
import Axios from "axios";
import { faker } from "@faker-js/faker";
import CartItem from "./CartItem";
import { v4 } from "uuid";
const BuySection = ({ addCartItem }) => {
  const [products, setProducts] = useState([]);
  const localurl = "http://myjson.dit.upm.es/api/bins/i8xr";
  const fetchDetails = async () => {
    const { data } = await Axios.get(localurl, {});
    const { photos } = data;
    const allproducts = photos.map((item) => ({
      smallImage: item.src.medium,
      tinyImage: item.src.tiny,
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      id: v4(),
    }));
    setProducts(allproducts);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div id="buypage">
      <h1 id="heading">Deals of the Day</h1>
      <div id="totalCart">
        {products.map((item) => (
          <span id="cardbox" key={item.id}>
            <CartItem product={item} addCartItem={addCartItem} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default BuySection;
