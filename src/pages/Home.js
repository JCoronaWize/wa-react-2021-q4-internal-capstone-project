import HeroSlider from "../components/HeroSlider";
import CardCaroussel from "../components/CardCaroussel";
import GridContainer from "../components/GridContainer";
import MainButton from "../components/MainButton";
import { useCategoriesList, useFeaturedProducts } from "../dataFetch";
import { useFeaturedBanners } from "../utils/hooks/useFeaturedBanners";

const Home = () => {
  const {
    data: bannerData,
    isLoading: bannerLoading,
    error: bannerError,
  } = useFeaturedBanners();
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useCategoriesList();
  const {
    data: featuredProductsData,
    isLoading: featuredProductsLoading,
    error: featuredProductsError,
    test
  } = useFeaturedProducts();
  return (
    <>
      {bannerLoading && <div>...Loading</div>}
      {!bannerLoading && !bannerError && (
        <>
          {console.dir(bannerData.results)}
          {console.dir(bannerData.results.length)}
          <HeroSlider
            slideData={bannerData}
            slideCount={bannerData.results.length}
          ></HeroSlider>
        </>
      )}

      {categoriesLoading && <div>...Loading Cat</div>}
      {!categoriesLoading && !categoriesError && (
        <>
          <CardCaroussel cardInfos={categoriesData}></CardCaroussel>
        </>
      )}

      {featuredProductsLoading && <div>...Loading Products</div>}
      {!featuredProductsLoading && !featuredProductsError && (
        <>
          <div>{JSON.stringify(test)}</div>
          {/* <div>{JSON.stringify(featuredProductsData)}</div> */}
          <GridContainer
            productInfo={featuredProductsData}
            theTitle="Featured Products"
          ></GridContainer>
        </>
      )}

      <MainButton to="/products">View all Products</MainButton>
    </>
  );
};
export default Home;
