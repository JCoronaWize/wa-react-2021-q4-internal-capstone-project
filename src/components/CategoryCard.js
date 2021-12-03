import { Link } from "react-router-dom";
import "../Home.css";
import { CatCard, CardText } from "./CategoryCard.styles";

const CategoryCard = ({ imgAlt, imgSrc, categoryName, categorySlug }) => {
  return (
    <CatCard as={Link} to={`/products?category=${categorySlug}`} src={imgSrc}>
      <CardText>{categoryName}</CardText>
    </CatCard>
  );
};
export default CategoryCard;
