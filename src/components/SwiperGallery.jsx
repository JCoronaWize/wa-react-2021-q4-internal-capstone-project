import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import "swiper/css/pagination"

// import "./swiperstyles.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
const SwiperGallery = ({ imagesData }) => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
     {imagesData.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image.url} alt="" />
        </SwiperSlide>
      ))}          
      </Swiper>
    </>
  );
};

export default SwiperGallery;
