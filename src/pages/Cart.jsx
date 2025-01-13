import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempCartData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempCartData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    console.log(tempCartData);
    setCartData(tempCartData);
  }, [cartItems]);

  return (
    <div>
      <h1>Cart</h1>
      <p>Welcome to the Cart page!</p>
    </div>
  );
};

export default Cart;
