import { Link } from "react-router-dom";
import "../Home.css";
import AddCartButton from "./AddCartButton";
import {
  StyleProductCard,
  StyleProductCardImage,
  TextCat,
  TextName,
} from "./ProductCard.styles";

const ProductCard = ({
  productName,
  categoryName,
  price,
  imgSrc,
  productId,
}) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/product/${productId}`}>
      <StyleProductCard style>
        <StyleProductCardImage src={imgSrc}>
          <TextCat>{categoryName}</TextCat>
        </StyleProductCardImage>
        <div>
          <TextName>
            {productName}
            <br />${price}
          </TextName>
        </div>
        <AddCartButton></AddCartButton>
      </StyleProductCard>
    </Link>
  );
};

export default ProductCard;
