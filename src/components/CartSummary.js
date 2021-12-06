import styled from "styled-components";
import { CartState } from "../context/CartContext";
import AddCartButton from "./AddCartButton";

export const VerticalCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: ${props => props.footer ? 'right' : 'left'};
  border: solid 1px black;
  border-radius: 5px;
  margin: 1em;
  align-content: center;
`;
export const VerticalCardSection = styled.div`
  flex-direction: column;
  padding: 2em;
  margin-right: 0 1em;
`;

const CartSummary = () => {
  const { state: globalCart } = CartState();
  return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '850px'}}>
      {console.log(globalCart.cartProducts)}
      {globalCart.cartProducts.length === 0 && <p>The cart is empty.</p>}
      {globalCart.cartProducts.length > 0 && (
        <>
          {globalCart.cartProducts.map((item) => (
            <VerticalCard>
              <VerticalCardSection>
            The image smal

              </VerticalCardSection>
              <VerticalCardSection>
                <p>The ID</p>
                <p>{item.id}</p>
              </VerticalCardSection>
              <VerticalCardSection>
              <AddCartButton
                  currStock={6}
                  theProductId={item.id}
                  ></AddCartButton>
              </VerticalCardSection>              
                  <VerticalCardSection>
                      the Subtotal
              </VerticalCardSection>
              <p></p>
            </VerticalCard>
          ))}
        </>
      )}
      <VerticalCard footer>
          <VerticalCardSection style={{aligself: 'right'}}>
              <p>Total</p>
              <p>Quantity: <span>20</span></p>
              <p>Amount: <span>$ {12} US</span></p>              
          </VerticalCardSection>
      </VerticalCard>
    </div>
    </div>
  );
};
export default CartSummary;
