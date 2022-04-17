"use strict";
(() => {
var exports = {};
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 4075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _product_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);

function handler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") return res.status(405).json({
    code: 405,
    status: "error",
    result: "Method Not Allowed"
  });

  if (req.method === "GET") {
    const page = req.query.page || 1;
    let search = req.query.search;
    let filter = req.query.filter;
    let valueFilter = req.query.value;
    let total_page = Math.ceil(_product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.length */ .R.length / 8);
    let dataProduct;
    let next_page;

    if (page == 1 && filter === undefined && search === undefined || page == undefined && filter === undefined && search === undefined) {
      dataProduct = _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.slice */ .R.slice(0, 8);
      next_page = 2;
    } else if (page > 1 && page <= total_page && filter === undefined && search === undefined) {
      dataProduct = _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.slice */ .R.slice(`${page * 8 - 8}`, `${page * 8}`);
      next_page = parseInt(page) + 1;
    } else if (page == 1 && filter !== undefined && search === undefined || page == undefined && filter !== undefined && search === undefined) {
      if (filter === "price" && valueFilter === "asc") {
        const produkFilter = _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.sort */ .R.sort((a, b) => {
          return a.price - b.price;
        });
        total_page = Math.ceil(produkFilter.length / 8);
        dataProduct = produkFilter.slice(0, 8);
        next_page = 2;
      } else if (filter === "price" && valueFilter === "desc") {
        const produkFilter = _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.sort */ .R.sort((a, b) => {
          return b.price - a.price;
        });
        total_page = Math.ceil(produkFilter.length / 8);
        dataProduct = produkFilter.slice(0, 8);
        next_page = 2;
      } else {
        const produkFilter = _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.filter */ .R.filter(product => {
          return product[filter] == valueFilter;
        });
        total_page = Math.ceil(produkFilter.length / 8);
        dataProduct = produkFilter.slice(0, 8);
        next_page = 2;
      }
    } else if (page > 1 && page <= total_page && filter !== undefined) {
      if (filter === "price" && valueFilter === "asc") {
        const produkFilter = _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.sort */ .R.sort((a, b) => {
          return a.price - b.price;
        });
        total_page = Math.ceil(produkFilter.length / 8);
        dataProduct = produkFilter.slice(`${page * 8 - 8}`, `${page * 8}`);
        next_page = 2;
      } else if (filter === "price" && valueFilter === "desc") {
        const produkFilter = _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.sort */ .R.sort((a, b) => {
          return b.price - a.price;
        });
        total_page = Math.ceil(produkFilter.length / 8);
        dataProduct = produkFilter.slice(`${page * 8 - 8}`, `${page * 8}`);
        next_page = 2;
      } else {
        const produkFilter = _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.filter */ .R.filter(product => {
          return product[filter] == valueFilter;
        });
        total_page = Math.ceil(produkFilter.length / 8);
        dataProduct = produkFilter.slice(`${page * 8 - 8}`, `${page * 8}`);
        next_page = 2;
      }
    } else if (page == 1 && filter === undefined && search !== undefined || page == undefined && filter === undefined && search !== undefined) {
      const datas = _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.filter */ .R.filter(product => {
        return product.title == search;
      });
      total_page = Math.ceil(datas.length / 8);
      dataProduct = datas.slice(0, 8);
      next_page = 2;
    } else if (page > 1 && page <= total_page && search !== undefined && filter === undefined) {
      const datas = _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.filter */ .R.filter(product => {
        return product.title == search;
      });
      total_page = Math.ceil(datas.length / 8);
      dataProduct = datas.slice(`${page * 8 - 8}`, `${page * 8}`);
      next_page = page + 1;
    }

    if (page > total_page) {
      res.status(200).json({
        code: 200,
        status: "OK",
        message: "Page tidak ditemukan"
      });
    } else {
      res.status(200).json({
        code: 200,
        status: "OK",
        result: dataProduct,
        page: page == undefined ? 1 : parseInt(page),
        next_page: next_page > total_page ? "-" : next_page,
        total_Page: total_page
      });
    }
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [125], () => (__webpack_exec__(4075)));
module.exports = __webpack_exports__;

})();