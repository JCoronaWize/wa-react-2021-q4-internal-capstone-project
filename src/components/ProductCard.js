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
  shortDesc,
  currStock,
  prodData
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
      <AddCartButton prodData={prodData} currStock={currStock} theProductId={productId}></AddCartButton>
    </StyleProductCard>
  );
};

export default ProductCard;
