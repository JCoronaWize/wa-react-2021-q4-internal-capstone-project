import "../Home.css";
import CategoryCard from "./CategoryCard";
import {
  Caroussel,
  CarousselSlideContainer,
  ArrowNav,
} from "./CardCaroussel.styles";
const CardCaroussel = ({ cardInfos }) => {
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
      <CarousselSlideContainer  title="carrousel" id="the_slider">
        {cardInfos.map((item) => (
          <CategoryCard
            key={item.id}
            imgSrc={item.img_src}
            categoryName={item.name}
            categorySlug={item.slugs}
          ></CategoryCard>
        ))}
      </CarousselSlideContainer>
    </Caroussel>
  );
};
export default CardCaroussel;
