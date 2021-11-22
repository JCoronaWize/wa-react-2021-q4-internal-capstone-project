import "../Home.css";
import {
  StyleProductCard,
  TextCat,
  TextName,
} from "./ProductCard.styles";

const ProductCard = ({ productName, categoryName, price, imgSrc }) => {
  return (
    <StyleProductCard src={imgSrc}>
        <TextCat>{categoryName}</TextCat>
        <TextName>{productName}<br/>${price}</TextName>
    </StyleProductCard>
  );
};

export default ProductCard;
