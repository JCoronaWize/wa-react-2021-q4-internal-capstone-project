import "../Home.css";
import { ProductCardStyle, TextName } from "./ProductCard.styles";

const ProductCard = ({ productName, imgSrc }) => {

  return (
    <ProductCardStyle src={imgSrc}>
      <TextName>{productName}</TextName>
    </ProductCardStyle>
  );
};

export default ProductCard;
