import "../Home.css";
import { CatCard, CardText } from "./CategoryCard.styles";

const CategoryCard = ({ imgAlt, imgSrc, categoryName }) => {
  return (
    <CatCard src={imgSrc}>
      <CardText>{categoryName}</CardText>
    </CatCard>
  );
};
export default CategoryCard;
