// import { useLocation } from "react-router-dom";

// import { Link } from "react-router-dom";
import MainButton from "../components/MainButton";

const Checkout = () => {
  return (
    <>
      <div>
        <h2>This is the checkout</h2>
        <div>This will be a summary of the cart</div>
        <div>Here is a form for the shopper</div>
      </div>
        <MainButton to="/cart">Back to Cart</MainButton>
    </>
  );
};
export default Checkout;
