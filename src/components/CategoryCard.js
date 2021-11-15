import "../Home.css";
import styled from "styled-components";

const CatCardImg = styled.img`
max-height: 200px;
`;

const CategoryCard = ({ imgAlt, imgSrc, categoryName }) => {
  return (
    <div className="Home-CategoryCard">
      {categoryName}
      <CatCardImg src={imgSrc} alt={imgAlt} ></CatCardImg>
    </div>
  );
};
export default CategoryCard;
