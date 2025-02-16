import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const[token, setToken] = useState("");

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

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

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

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list")
      // console.log(response.data);

      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() =>{
    getProductsData();
  }, [])

  useEffect( () => {
    if (!token && localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
    }
  })

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
    setCartItems,
    getCartAmount, 
    navigate,
    backendURL,
    setToken,
    token
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
