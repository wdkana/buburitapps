import axios from "axios";

const apiUrl = "http://localhost:3000";

const errorResponseHandler = (error) => {
  return Promise.reject(error);
};

const getInstance = () => {
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 60000,
  });

  instance.interceptors.response.use(
    (response) => response,
    errorResponseHandler
  );
  return instance;
};

const routes = {
  getCity: () => `/api/prayer/city`,
  getPrayerTime: (city = "", year = "", month = "") =>
    `/api/prayer/${city}/${year}/${month}`,
  getProducts: (query = "") => `/api/store/product?${query}`,
  getCategories: () => `/api/store/product/category`,
  getProductById: (id = "") => `/api/store/product/${id}`,
};

export { getInstance, routes, apiUrl };
