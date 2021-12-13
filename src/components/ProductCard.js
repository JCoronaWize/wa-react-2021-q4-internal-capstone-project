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
    <StyleProductCard title="product-card-info" style>
      <Link style={{ textDecoration: "none" }} to={`/product/${productId}`}>
        <StyleProductCardImage src={imgSrc}>
          <TextCat title="card-category-tag">{categoryName}</TextCat>
        </StyleProductCardImage>
        <div>
          <TextName title="product-name">
            {productName}
            <br />${price}
          </TextName>
          <TextName title="product-description">{shortDesc}</TextName>
        </div>
      </Link>
      <AddCartButton prodData={prodData} currStock={currStock} theProductId={productId}></AddCartButton>
    </StyleProductCard>
  );
};

export default ProductCard;
