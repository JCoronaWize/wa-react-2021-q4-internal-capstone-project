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
  currStock
}) => {
  return (
    <StyleProductCard style>
      <Link style={{ textDecoration: "none" }} to={`/product/${productId}`}>
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
      </Link>
      <AddCartButton currStock={currStock} theProductId={productId}></AddCartButton>
      {/* <CartController></CartController> */}
    </StyleProductCard>
  );
};

export default ProductCard;
