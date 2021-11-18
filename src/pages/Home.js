import HeroSlider from "../components/HeroSlider";
import data from "../mocks/en-us/featured-banners.json";
import CardCaroussel from "../components/CardCaroussel";
import GridContainer from "../components/GridContainer";

const getSlideData = (data) => {
  let fetchedInfo = [];
  data.results.map(
    (item, index) =>
      (fetchedInfo = [...fetchedInfo, {
        img_src: item.data.main_image.url ? item.data.main_image.url : "",
        img_alt: item.data.main_image.alt
          ? item.data.main_image.alt
          : `Image ${index}`,
        img_desc: item.data.description[0].text
          ? item.data.description[0].text
          : "",
      }])
  );
  return fetchedInfo;
};

const slideData = getSlideData(data)

const Home = () => {
  return (
    <div>
      <HeroSlider slideData={slideData}></HeroSlider>
      <CardCaroussel></CardCaroussel>
      <GridContainer theTitle="Featured Products"></GridContainer>
    </div>
  );
};
export default Home;
