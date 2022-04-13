import axios from "axios"

const apiUrl = "http://localhost:3000"

const errorResponseHandler = (error) => {
  return Promise.reject(error)
}

const getInstance = () => {
  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 60000,
  })

  instance.interceptors.response.use(
    (response) => response,
    errorResponseHandler
  )
  return instance
}

const routes = {
  getCity: () => `/api/prayer/city`,
  getPrayerTime: (city = "", year = "", month = "") =>
    `/api/prayer/${city}/${year}/${month}`,
  getProducts: () => `/api/store/product`,
}

export { getInstance, routes, apiUrl }
