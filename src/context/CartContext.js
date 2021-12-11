import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";
let initialCart = JSON.parse(localStorage.getItem("cart"))
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartProducts: [],
      cartQuantity: 0,
    };

const Cart = createContext(initialCart);
localStorage.setItem("cart", JSON.stringify(initialCart));
const CartContext = ({ children }) => {
  console.log("init data", initialCart);
  const [state, dispatch] = useReducer(cartReducer, initialCart);
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};
export default CartContext;

export const CartState = () => {
  return useContext(Cart);
};
