// import bannersData from "./mocks/en-us/featured-banners.json";
// import categoriesData from "./mocks/en-us/product-categories.json";
// import productsData from "./mocks/en-us/products.json";
// import featuredProductsData from "./mocks/en-us/featured-products.json";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "./utils/constants";
import { useLatestAPI } from "./utils/hooks/useLatestAPI";

export function useCategoriesList() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [categories, setCategories] = useState(() => ({
    data: {},
    isLoading: true,
    error: "",
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getCategories() {
      try {
        setCategories({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]'
          )}&lang=en-us&pageSize=5`,

          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        // Format json to expected prop names in components
        let fetchedInfo = [];
        data.results.map(
          (item, index) =>
            (fetchedInfo = [
              ...fetchedInfo,
              {
                img_src: item.data.main_image.url
                  ? item.data.main_image.url
                  : "",
                img_alt: item.data.main_image.alt
                  ? item.data.main_image.alt
                  : `Image ${index}`,
                name: item.data.name ? item.data.name : "",
                id: item.data.name ? item.data.name : "",
              },
            ])
        );

        setCategories({ data: fetchedInfo, isLoading: false, error: "" });
      } catch (err) {
        setCategories({ data: {}, isLoading: false, error: err });
        console.error(err);
      }
    }

    getCategories();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return categories;
}

// export const getBannersData = () => {
//   let fetchedInfo = [];
//   bannersData.results.map(
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
//             : "HElllo",
//         },
//       ])
//   );
//   return fetchedInfo;
// };

// export const getCategoriesData = () => {
//   let fetchedInfo = [];
//   categoriesData.results.map(
//     (item, index) =>
//       (fetchedInfo = [
//         ...fetchedInfo,
//         {
//           img_src: item.data.main_image.url ? item.data.main_image.url : "",
//           img_alt: item.data.main_image.alt
//             ? item.data.main_image.alt
//             : `Image ${index}`,
//           name: item.data.name ? item.data.name : "",
//           id: item.data.name ? item.data.name : "",
//         },
//       ])
//   );
//   return fetchedInfo;
// };
export function useProducts() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const testUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
    '[[at(document.type, "product")]]'
  )}&lang=en-us&pageSize=60`;
  const [products, setProducts] = useState(() => ({
    data: {},
    test: testUrl,
    isLoading: true,
    error: "",
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        setProducts({ data: {}, isLoading: true });

        const response = await fetch(
          testUrl,

          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        // Format json to expected prop names in components
        let fetchedInfo = [];
        data.results.map(
          (item, index) =>
            (fetchedInfo = [
              ...fetchedInfo,
              {
                name: item.data.name ? item.data.name : "",
                id: item.id ? item.id : "",
                price: item.data.price ? item.data.price : "",
                category_name: item.data.category.slug
                  ? item.data.category.slug
                  : "",
                category_id: item.data.category.id ? item.data.category.id : "",
                img_src: item.data.mainimage.url ? item.data.mainimage.url : "",
                img_alt: item.data.mainimage.alt
                  ? item.data.mainimage.alt
                  : `Image ${index}`,
              },
            ])
        );

        setProducts({
          data: fetchedInfo,
          test: testUrl,
          isLoading: false,
          error: "",
        });
      } catch (err) {
        setProducts({ data: {}, test: testUrl, isLoading: false, error: err });
        console.error(err);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, testUrl]);

  return products;
}

// export const getProductsData = () => {
//   let fetchedInfo = [];
//   productsData.results.map(
//     (item, index) =>
//       (fetchedInfo = [
//         ...fetchedInfo,
//         {
//           name: item.data.name ? item.data.name : "",
//           price: item.data.price ? item.data.price : "",
//           category_name: item.data.category.slug ? item.data.category.slug : "",
//           category_id: item.data.category.id ? item.data.category.id : "",
//           img_src: item.data.mainimage.url ? item.data.mainimage.url : "",
//           img_alt: item.data.mainimage.alt
//             ? item.data.mainimage.alt
//             : `Image ${index}`,
//         },
//       ])
//   );
//   return fetchedInfo;
// };

export function useFeaturedProducts() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const testUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
    '[[at(document.type, "product")]]'
  )}&q=${encodeURIComponent(
    '[[at(document.tags, ["Featured"])]]'
  )}&lang=en-us&pageSize=16`;
  const [products, setProducts] = useState(() => ({
    data: {},
    test: testUrl,
    isLoading: true,
    error: "",
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        setProducts({ data: {}, isLoading: true });

        const response = await fetch(
          testUrl,

          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        // Format json to expected prop names in components
        let fetchedInfo = [];
        data.results.map(
          (item, index) =>
            (fetchedInfo = [
              ...fetchedInfo,
              {
                name: item.data.name ? item.data.name : "",
                id: item.id ? item.id : "",
                price: item.data.price ? item.data.price : "",
                category_name: item.data.category.slug
                  ? item.data.category.slug
                  : "",
                category_id: item.data.category.id ? item.data.category.id : "",
                img_src: item.data.mainimage.url ? item.data.mainimage.url : "",
                img_alt: item.data.mainimage.alt
                  ? item.data.mainimage.alt
                  : `Image ${index}`,
              },
            ])
        );

        setProducts({
          data: fetchedInfo,
          test: testUrl,
          isLoading: false,
          error: "",
        });
      } catch (err) {
        setProducts({ data: {}, test: testUrl, isLoading: false, error: err });
        console.error(err);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, testUrl]);

  return products;
}

// export const getFeaturedProductsData = () => {
//   let fetchedInfo = [];
//   featuredProductsData.results.map(
//     (item, index) =>
//       (fetchedInfo = [
//         ...fetchedInfo,
//         {
//           name: item.data.name ? item.data.name : "",
//           price: item.data.price ? item.data.price : "",
//           category_name: item.data.category.slug ? item.data.category.slug : "",
//           category_id: item.data.category.id ? item.data.category.id : "",
//           img_src: item.data.mainimage.url ? item.data.mainimage.url : "",
//           img_alt: item.data.mainimage.alt
//             ? item.data.mainimage.alt
//             : `Image ${index}`,
//         },
//       ])
//   );

//   return fetchedInfo;
// };

export function useProductDetailed(productId) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  // const testUrlb = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
  //   `[[:d+=+at(document.id,+"${productId}")+]]`
  // )}`;

  const testUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${productId}%22%29+%5D%5D`;
  // const testUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
  //   '[[at(document.type, "product")]]'
  // )}&q=${encodeURIComponent(
  //   '[[at(document.tags, ["Featured"])]]'
  // )}&lang=en-us&pageSize=5`;
  const [products, setProducts] = useState(() => ({
    data: {},
    test: testUrl,
    isLoading: true,
    error: "",
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        setProducts({ data: {}, isLoading: true });

        const response = await fetch(
          testUrl,

          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        // Format json to expected prop names in components
        let fetchedInfo = [];
        data.results.map(
          (item, index) =>
            (fetchedInfo = [
              ...fetchedInfo,
              {
                name: item.data.name ? item.data.name : "",
                stock: item.data.stock ? item.data.stock : "",
                specs: item.data.specs ? item.data.specs : "",                
                sku: item.data.sku ? item.data.sku : "",
                description: item.data.description[0].text ? item.data.description[0].text : "",
                id: item.id ? item.id : "",
                price: item.data.price ? item.data.price : "",
                category_name: item.data.category.slug
                  ? item.data.category.slug
                  : "",
                category_id: item.data.category.id ? item.data.category.id : "",
                img_src: item.data.mainimage.url ? item.data.mainimage.url : "",
                img_alt: item.data.mainimage.alt
                  ? item.data.mainimage.alt
                  : `Image ${index}`,
              },
            ])
        );

        setProducts({
          data: fetchedInfo,
          test: testUrl,
          isLoading: false,
          error: "",
        });
      } catch (err) {
        setProducts({ data: {}, test: testUrl, isLoading: false, error: err });
        console.error(err);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, testUrl]);

  return products;
}
