import CartSummary from "../components/CartSummary";
import MainButton from "../components/MainButton";

const Cart = () => {
  return (
    <>
            <h2>Cart Summary</h2>
        <CartSummary></CartSummary>
        <MainButton to="/checkout">Go to checkout</MainButton>
    </>
  );
};
export default Cart;
