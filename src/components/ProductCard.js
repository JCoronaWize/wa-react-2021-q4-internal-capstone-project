import "../Home.css";
import { StyleProductCard, TextName } from "./ProductCard.styles";

const ProductCard = ({ productName, categoryName, price, imgSrc }) => {
  return (
    <StyleProductCard src={imgSrc}>
      {categoryName}
      <br/>${price}<br/>
      <TextName>{productName}</TextName>
    </StyleProductCard>
  );
};

export default ProductCard;
