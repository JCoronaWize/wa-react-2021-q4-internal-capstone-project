import bannersData from "./mocks/en-us/featured-banners.json";
import categoriesData from "./mocks/en-us/product-categories.json";
import productsData from "./mocks/en-us/products.json";
import featuredProductsData from "./mocks/en-us/featured-products.json";

export const getBannersData = () => {
  let fetchedInfo = [];
  bannersData.results.map(
    (item, index) =>
      (fetchedInfo = [
        ...fetchedInfo,
        {
          img_src: item.data.main_image.url ? item.data.main_image.url : "",
          img_alt: item.data.main_image.alt
            ? item.data.main_image.alt
            : `Image ${index}`,
          img_desc: item.data.description[0].text
            ? item.data.description[0].text
            : "HElllo",
        },
      ])
  );
  return fetchedInfo;
};

export const getCategoriesData = () => {
  let fetchedInfo = [];
  categoriesData.results.map(
    (item, index) =>
      (fetchedInfo = [
        ...fetchedInfo,
        {
          img_src: item.data.main_image.url ? item.data.main_image.url : "",
          img_alt: item.data.main_image.alt
            ? item.data.main_image.alt
            : `Image ${index}`,
            name: item.data.name ? item.data.name : "",
            id: item.data.name ? item.data.name : "",
        },
      ])
  );
  return fetchedInfo;
};
export const getProductsData = () => {
  let fetchedInfo = [];
  productsData.results.map(
    (item, index) =>
      (fetchedInfo = [
        ...fetchedInfo,
        {
          name: item.data.name ? item.data.name : "",
          price: item.data.price ? item.data.price : "",
          category_name: item.data.category.slug ? item.data.category.slug : "",
          category_id: item.data.category.id ? item.data.category.id : "",
          img_src: item.data.mainimage.url ? item.data.mainimage.url : "",
          img_alt: item.data.mainimage.alt
            ? item.data.mainimage.alt
            : `Image ${index}`,
        },
      ])
  );
  return fetchedInfo;
};

export const getFeaturedProductsData = () => {
  let fetchedInfo = [];
  featuredProductsData.results.map(
    (item, index) =>
      (fetchedInfo = [
        ...fetchedInfo,
        {
          name: item.data.name ? item.data.name : "",
          price: item.data.price ? item.data.price : "",
          category_name: item.data.category.slug ? item.data.category.slug : "",
          category_id: item.data.category.id ? item.data.category.id : "",
          img_src: item.data.mainimage.url ? item.data.mainimage.url : "",
          img_alt: item.data.mainimage.alt
            ? item.data.mainimage.alt
            : `Image ${index}`,
        },
      ])
  );

  return fetchedInfo;
};
