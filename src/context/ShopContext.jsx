import { createContext, useState, useEffect } from "react";
import { products } from "../assets/frontend_assets/assets.js";
import { toast } from "react-toastify";
import { use } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = async (itemId, productSize) => {
    let cartData = structuredClone(cartItems);

    if (!productSize) {
      toast.error("Please select a size");
      return;
    }

    if (cartData[itemId]) {
      if (cartData[itemId][productSize]) {
        cartData[itemId][productSize] += 1;
      } else {
        cartData[itemId][productSize] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][productSize] = 1;
    }
    setCartItems(cartData);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getCartCount = () => {
    let totalCount = 0;

    {
      /* Iterates over items */
    }
    for (const items in cartItems) {
      
        /* Iterates over product size */
      
      for (const item in cartItems[items]) {
        try {
            if (cartItems[items][item] > 0) {
                totalCount += cartItems[items][item];
            }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for(const items in cartItems){
        let itemInfo = products.find((product) => product._id === items);
      for(const item in cartItems[items]){
        try{
          if(cartItems[items][item] > 0){
            totalAmount += (itemInfo.price * cartItems[items][item]);
          }
        }catch(error){}
      }
    }
    return totalAmount;
  }

  const updateQuantity = async (itemId, size, quantity) => {
    let tempCartData = structuredClone(cartItems);
    tempCartData[itemId][size] = quantity;

    setCartItems(tempCartData);
  };

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount, 
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
