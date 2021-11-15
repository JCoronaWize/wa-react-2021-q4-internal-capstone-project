import "../Home.css";
import CategoryCard from "./CategoryCard";
import data from "../mocks/en-us/product-categories.json";
import styled from "styled-components";

const Caroussel = styled.div`
  display: flex;
  height: 14em;
  background-color: #0b569d;
  color: white;
`;
const CardCaroussel = () => {
  return (
    <Caroussel>
      {data.results.map((item) => (
        <CategoryCard
          key={item.id}
          imgSrc={item.data.main_image.url}
          categoryName={item.data.name}
        ></CategoryCard>
      ))}
    </Caroussel>
  );
};
export default CardCaroussel;
