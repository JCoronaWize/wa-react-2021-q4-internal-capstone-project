import styled from "styled-components";
import { CartState } from "../context/CartContext";

const StyledButton = styled.button`
  display: flex;
  /* align-self: flex-start; */
  color: white;
  font-weight: 700;
  border: none;
  background-color: rgba(80, 80, 80, 1);
  text-transform: uppercase;
  margin: 1em 0;
  max-width: 350px;
  padding: 1em;
  font-size: 0.8em;
  border-radius: 0.4em;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: rgba(80, 80, 80, 0.8);
  }

  :disabled{
    background-color: lightgray;
    color: gray;
    cursor: auto;
  }
`;

const StyledInfoLabel = styled.p`
  color: black;
`

// (globalCart.products.some((item) => item.id === theProductId))
const AddCartButton = ({ children, to, theProductId, currStock }) => {
  const { state: globalCart, dispatch } = CartState();
  const productInCart = globalCart.cartProducts.find(item => item.id === theProductId)
  const prodCartQty = productInCart ? productInCart.cartQty : 0  
  return (
    <>
    <StyledButton
      onClick={() => {
        dispatch({
          type: 'ADD_PRODUCT',
          payload: theProductId
        }) }}
        disabled={
          (globalCart.cartProducts.some((item) => item.id === theProductId && item.cartQty === currStock))
          || currStock === 0}
          >
      ADD TO CART
    </StyledButton>
      {prodCartQty > 0 && 
      <>
                <StyledInfoLabel>Quantity: </StyledInfoLabel>
                <input
                  style={{ fontSize: "1.2em", maxWidth: "50px" }}
                  type="number"
                  min="0"
                  max={currStock}
                  readOnly
                  value={prodCartQty}
                />    
      </>
  }
    </>
  );
};

export default AddCartButton;
