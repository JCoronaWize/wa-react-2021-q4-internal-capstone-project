import "../Home.css";
import CategoryCard from "./CategoryCard";
import data from "../mocks/en-us/product-categories.json";
import {
  Caroussel,
  CarousselSlideContainer,
  ArrowNav,
} from "./CardCaroussel.styles";

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
        {data.results.map((item) => (
          <CategoryCard
            key={item.id}
            imgSrc={item.data.main_image.url}
            categoryName={item.data.name}
          ></CategoryCard>
        ))}
      </CarousselSlideContainer>
    </Caroussel>
  );
};
export default CardCaroussel;
