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
  prayerTime: (city = "") => `/api/prayer/${city}`,
};

export { getInstance, routes, apiUrl };
