import styled from "styled-components";
import "../Home.css";

const ProductCard = ({ productName, imgSrc }) => {
  const ProductCardStyle = styled.div`
    display: flex;
    background-image: url('${imgSrc} no-repeat center center fixed');
    background-repeat: no-repeat;
    background-size: cover;
    margin: 1em;
    height: 200px;
    width: 200px;
    background-color: rgb(154, 154, 154);
    justify-content: center;
    align-items: flex-end;
    `;
  const TextName = styled.p`
    margin: 0;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: flex-start;    
    color: #eeeeee;
    padding: 0 .6em;
    font-size: 1.2em;
    height: 3em;
    background-color: rgba(100, 100, 120, 0.6);
  `;

  return (
    <ProductCardStyle imgSrc>
      <TextName>{productName}</TextName>
    </ProductCardStyle>
  );
};

export default ProductCard;
