import HeroSlider from "../components/HeroSlider";
import CardCaroussel from "../components/CardCaroussel";
import GridContainer from "../components/GridContainer";
import MainButton from "../components/MainButton";
import { getBannersData, getFeaturedProductsData } from "../dataFetch";

const slideData = getBannersData();
const productInfo = getFeaturedProductsData();
const Home = () => {
  return (
    <>
      <HeroSlider slideData={slideData}></HeroSlider>
      <CardCaroussel></CardCaroussel>
      <GridContainer
        productInfo={productInfo}
        featured
        theTitle="Featured Products"
      ></GridContainer>
      <MainButton to="/products">View all Products</MainButton>
    </>
  );
};
export default Home;
