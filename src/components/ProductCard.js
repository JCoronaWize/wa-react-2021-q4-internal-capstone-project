import { Link } from "react-router-dom";
import "../Home.css";
import AddCartButton from "./AddCartButton";
// import CartController from "./AddCartController";
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
  shortDesc,
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
          <TextName>{shortDesc}</TextName>
        </div>
        <AddCartButton></AddCartButton>
        {/* <CartController></CartController> */}
      </StyleProductCard>
    </Link>
  );
};

export default ProductCard;
