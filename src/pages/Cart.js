// import { useLocation } from "react-router-dom";
import MainButton from "../components/MainButton";

const Cart = () => {
  return (
    <>
      <div>
        <h2>Cart Summary</h2>
        <div>The cart should be here</div>

      </div>
        <MainButton to="/checkout">Go to checkout</MainButton>
    </>
  );
};
export default Cart;
