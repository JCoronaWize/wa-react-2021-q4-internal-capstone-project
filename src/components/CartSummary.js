import styled from "styled-components";
import { useCartState } from "../context/CartContext";
import AddCartButton from "./AddCartButton";
import RemoveCartButton from "./RemoveCartButton";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;

export const VerticalCard = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1;
  align-items: flex-start;
  justify-content: ${(props) => (props.footer ? "right" : "flex-start")};
  border: solid 1px black;
  border-radius: 5px;
  margin: 1em;
  padding: 1em;
  align-content: flex-start;
`;
export const VerticalCardSection = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexRow ? "row" : "column")};
  flex: 1 1 auto;
  align-content: flex-start;
  justify-content: flex-end;
  align-items: ${(props) =>
    props.flexRow ? "center" : props.footer ? "flex-end" : "flex-start"};
  margin: 0 1em;
  p {
    font-size: 1em;
    font-weight: 700;
    align-items: ${(props) => (props.footer ? "flex-end" : "flex-start")};
    text-align: ${(props) => (props.footer ? "right" : "left")};
  }
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  text-align: left;
  tbody {
    font-size: 0.9em;
    vertical-align: top;
    text-align: left;
  }
  tr {
    border-bottom: 1pt solid black;
  }
  td {
    padding: 1em 0;
  }
  td.subtotal,
  th.subtotal {
    text-align: right;
  }
`;

const CartSummary = ({ showImage, showEdits }) => {
  const { state: globalCart } = useCartState();
  return (
    <Main>
      <MainContainer>
        {console.log(globalCart.cartProducts)}
        {globalCart.cartProducts.length === 0 && <p>The cart is empty.</p>}
        {globalCart.cartProducts.length > 0 && (
          <>
            <StyledTable>
              <thead>
                <tr>
                  {showImage && <th></th>}
                  <th>Product Information</th>
                  <th></th>
                  <th className="subtotal">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {globalCart.cartProducts.map((item, key) => (
                  <tr key={key}>
                    {showImage && (
                      <td>
                        {" "}
                        <img
                          style={{ width: "120px" }}
                          src={item.img_src}
                          alt={item.img_alt}
                        />
                      </td>
                    )}
                    <td>
                      {item.name}
                      <br />
                      Price: ${item.price}
                      {!showEdits && (
                        <>
                          {" "}
                          <br />
                          Quantity: {item.cartQty}
                        </>
                      )}
                      {showEdits && (
                        <>
                          <AddCartButton
                            currStock={item.stock}
                            theProductId={item.id}
                            prodData={item}
                          ></AddCartButton>
                        </>
                      )}
                    </td>
                    <td>
                      {showEdits && (
                        <>
                          <RemoveCartButton
                            theProductId={item.id}
                          ></RemoveCartButton>
                        </>
                      )}
                    </td>
                    <td className="subtotal">
                      ${parseFloat(item.price) * parseFloat(item.cartQty)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </>
        )}

        <VerticalCard footer>
          <VerticalCardSection footer>
            <p>Total</p>
            <p>
              Quantity:{" "}
              <span>
                {" "}
                {parseInt(
                  globalCart.cartProducts.reduce((count, curItem) => {
                    return parseInt(count) + parseInt(curItem.cartQty);
                  }, 0)
                )}
              </span>
            </p>
            <p>
              Amount:{" "}
              <span>
                {" "}
                $
                {parseInt(
                  globalCart.cartProducts.reduce((count, curItem) => {
                    return (
                      parseFloat(count) +
                      parseFloat(curItem.price) * parseFloat(curItem.cartQty)
                    );
                  }, 0)
                )}{" "}
              </span>
            </p>
          </VerticalCardSection>
        </VerticalCard>
      </MainContainer>
    </Main>
  );
};
export default CartSummary;
