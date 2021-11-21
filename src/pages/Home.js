import HeroSlider from "../components/HeroSlider";
import data from "../mocks/en-us/featured-banners.json";
import CardCaroussel from "../components/CardCaroussel";
import GridContainer from "../components/GridContainer";
import MainButton from "../components/MainButton";
import {getBannersData, getCategoriesData} from "../dataFetch"

// const getSlideData = (data) => {
//   let fetchedInfo = [];
//   data.results.map(
//     (item, index) =>
//       (fetchedInfo = [
//         ...fetchedInfo,
//         {
//           img_src: item.data.main_image.url ? item.data.main_image.url : "",
//           img_alt: item.data.main_image.alt
//             ? item.data.main_image.alt
//             : `Image ${index}`,
//           img_desc: item.data.description[0].text
//             ? item.data.description[0].text
//             : "",
//         },
//       ])
//   );
//   return fetchedInfo;
// };

const slideData = getBannersData(data);

const Home = ({onNavClick}) => {
  return (
    <>
        <HeroSlider slideData={slideData}></HeroSlider>
        <CardCaroussel></CardCaroussel>
        <GridContainer featured theTitle="Featured Products"></GridContainer>
        <MainButton  onNavClick={onNavClick} navRoute="/products">View all products</MainButton>
    </>
  );
};
export default Home;
