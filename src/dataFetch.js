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
                id: item.id ? item.id : "",
                slugs: item.slugs ? item.slugs : "",
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

export function useProducts(filters = [], search = "") {
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
                short_desc: item.data.short_description ? item.data.short_description : "",
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

        if (filters.length > 0) {
          console.log("aplicar filtros en Hook");
          let newList = [...fetchedInfo];
          newList = newList.filter((el) =>
            filters.find((filt) => {
              return filt === el.category_name;
            })
          );
          fetchedInfo = [...newList];
        } else {
          console.log("Ver todo");
        }

        if (search) {
          console.log("parametro busqueda");
        } else {
          console.log("sin parametro busqueda");
        }

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
  }, [apiRef, isApiMetadataLoading, filters, search, testUrl]);

  return products;
}

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
                short_desc: item.data.short_description ? item.data.short_description : "",
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

export function useProductDetailed(productId) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const testUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${productId}%22%29+%5D%5D`;

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
                tags: item.tags ? item.tags : [],
                stock: item.data.stock ? item.data.stock : "",
                specs: item.data.specs ? item.data.specs : "",
                images: item.data.images ? item.data.images : "",
                sku: item.data.sku ? item.data.sku : "",
                description: item.data.description[0].text
                  ? item.data.description[0].text
                  : "",
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

export function useProductSearch(search = "") {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const testUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
    '[[at(document.type, "product")]]'
  )}&q=${encodeURIComponent(
    '[[fulltext(document, "' + search + '")]]'
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
                short_desc: item.data.short_description ? item.data.short_description : "",
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
  }, [apiRef, isApiMetadataLoading, search, testUrl]);

  return products;
}
