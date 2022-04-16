import { getInstance, routes } from "./axiosInstance";

const getProduct = async ({
  page = 1,
  filter = "",
  value = "",
  search = "",
}) => {
  const queryPage = `${page ? `page=${page}&` : ""}`;
  const queryFilter = `${filter ? `filter=${filter}&` : ""}`;
  const queryValue = `${value ? `value=${value}&` : ""}`;
  const querySearch = `${search ? `search=${search}&` : ""}`;
  const query = `${queryPage}${queryFilter}${queryValue}${querySearch}`;

  try {
    const response = await getInstance().get(routes.getProducts(query));
    const { data } = response;
    return data;
  } catch (err) {
    return err;
  }
};

const getCategories = async () => {
  try {
    const response = await getInstance().get(routes.getCategories());
    const {
      data: { result },
    } = response;
    return result;
  } catch (err) {
    return err;
  }
};

export { getProduct, getCategories };
