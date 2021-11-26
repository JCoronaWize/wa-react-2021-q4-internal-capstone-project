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
    <Link to={`/product/${productId}`}>
    <StyleProductCard src={imgSrc}>
      <TextCat>{categoryName}</TextCat>
      <TextName>
        {productName}
        <br />${price}
        <br />

      </TextName>
    </StyleProductCard>
        </Link>
  );
};

export default ProductCard;
