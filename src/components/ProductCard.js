import "../Home.css";
import { StyleProductCard, TextName } from "./ProductCard.styles";

const ProductCard = ({ productName, imgSrc }) => {
  return (
    <StyleProductCard src={imgSrc}>
      <TextName>{productName}</TextName>
    </StyleProductCard>
  );
};

export default ProductCard;
