"use strict";
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 2960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CP": () => (/* binding */ getCategories),
  "wv": () => (/* binding */ getProduct),
  "gk": () => (/* binding */ getProductById)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/api/axiosInstance.js

const apiUrl = "http://localhost:3000";

const errorResponseHandler = error => {
  return Promise.reject(error);
};

const getInstance = () => {
  const instance = external_axios_default().create({
    baseURL: apiUrl,
    timeout: 60000
  });
  instance.interceptors.response.use(response => response, errorResponseHandler);
  return instance;
};

const routes = {
  getCity: () => `/api/prayer/city`,
  getPrayerTime: (city = "", year = "", month = "") => `/api/prayer/${city}/${year}/${month}`,
  getProducts: (query = "") => `/api/store/product?${query}`,
  getCategories: () => `/api/store/product/category`,
  getProductById: (id = "") => `/api/store/product/${id}`
};

;// CONCATENATED MODULE: ./src/api/storeAPI.js


const getProduct = async ({
  page = 1,
  filter = "",
  value = "",
  search = ""
}) => {
  const queryPage = `${page ? `page=${page}&` : ""}`;
  const queryFilter = `${filter ? `filter=${filter}&` : ""}`;
  const queryValue = `${value ? `value=${value}&` : ""}`;
  const querySearch = `${search ? `search=${search}&` : ""}`;
  const query = `${queryPage}${queryFilter}${queryValue}${querySearch}`;

  try {
    const response = await getInstance().get(routes.getProducts(query));
    const {
      data
    } = response;
    return data;
  } catch (err) {
    return err;
  }
};

const getCategories = async () => {
  try {
    const response = await getInstance().get(routes.getCategories());
    const {
      data: {
        result
      }
    } = response;
    return result;
  } catch (err) {
    return err;
  }
};

const getProductById = async id => {
  try {
    const response = await getInstance().get(routes.getProductById(id));
    const {
      data
    } = response;
    return data;
  } catch (err) {
    return err;
  }
};



/***/ })

};
;