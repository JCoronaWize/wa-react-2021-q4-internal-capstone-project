import { Link } from "react-router-dom";
import "../Home.css";
import { StyleProductCard, TextCat, TextName } from "./ProductCard.styles";

const ProductCard = ({
  productName,
  categoryName,
  price,
  imgSrc,
  productId,
}) => {
  return (
    <StyleProductCard src={imgSrc}>
      <TextCat>{categoryName}</TextCat>
      <TextName>
        {productName}
        <br />${price}
        <br />
        <Link to={`/product/${productId}`}>VIEW MORE ({productId})</Link>
      </TextName>
    </StyleProductCard>
  );
};

export default ProductCard;
