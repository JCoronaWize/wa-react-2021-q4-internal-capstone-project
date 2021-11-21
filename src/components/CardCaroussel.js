import "../Home.css";
import CategoryCard from "./CategoryCard";
import {
  Caroussel,
  CarousselSlideContainer,
  ArrowNav,
} from "./CardCaroussel.styles";
import { getCategoriesData } from "../dataFetch";

const categoriesInfo = getCategoriesData();
const CardCaroussel = () => {
  return (
    <Caroussel>
      <ArrowNav
        direction="left"
        onClick={() => {
          document.getElementById("the_slider").scrollLeft -= 500;
        }}
      ></ArrowNav>
      <ArrowNav
        direction="right"
        onClick={() => {
          document.getElementById("the_slider").scrollLeft += 500;
        }}
      ></ArrowNav>
      <CarousselSlideContainer id="the_slider">
        {categoriesInfo.map((item) => (
          <CategoryCard
            key={item.id}
            imgSrc={item.img_src}
            categoryName={item.name}
          ></CategoryCard>
        ))}
      </CarousselSlideContainer>
    </Caroussel>
  );
};
export default CardCaroussel;
