import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SwiperGallery = ({ imagesData }) => {
  const myImages = imagesData.map((item) => ({
    original: item.image.url,
    thumbnail: item.image.url,
  }));
  return (
    <ImageGallery
      showFullscreenButton={false}
      showPlayButton={false}
      items={myImages}
    />
  );
};
export default SwiperGallery;
