import HeroSlider from "../components/HeroSlider";
import CardCaroussel from "../components/CardCaroussel";
import GridContainer from "../components/GridContainer";
import MainButton from "../components/MainButton";
import { getBannersData, getFeaturedProductsData } from "../dataFetch";
import { useFeaturedBanners } from "../utils/hooks/useFeaturedBanners";

// const slideData = getBannersData();
const productInfo = getFeaturedProductsData();

const Home = () => {
  const { data: bannerData, isLoading: bannerLoading } = useFeaturedBanners();
  return (
    <>
      {bannerLoading && (
        <div>...Loading</div>
      )} 
      {bannerLoading || !bannerData ? (
        <div>...</div>
      ) : (
        <>
          {/* <div>{JSON.stringify(bannerData)}</div> */}
          {console.dir(bannerData.results)}
          {console.dir(bannerData.results.length)}
          <HeroSlider
            slideData={bannerData}
            slideCount={bannerData.results.length}
          ></HeroSlider>
        </>
      )}
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
