import { getInstance, routes } from "./axiosInstance"

const getProduct = async () => {
  try {
    const response = await getInstance().get(routes.getProducts())
    const products = await response.data
    return products
  } catch (err) {
    return err
  }
}

export { getProduct }
