"use strict";
(() => {
var exports = {};
exports.id = 936;
exports.ids = [936];
exports.modules = {

/***/ 5227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _product_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);

function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({
    code: 405,
    status: "error",
    result: "Method Not Allowed"
  });
  let listCategory = [];

  if (req.method === "GET") {
    _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.map */ .R.map(data => {
      const category = {
        category: data.category
      };
      listCategory.push(category);
    });
  }

  const Category = [];
  const dataCategory = listCategory.filter(item => {
    if (item.category in Category) {
      return false;
    } else {
      Category[item.category] = true;
      return true;
    }
  });
  res.status(200).json({
    code: 200,
    status: "OK",
    result: dataCategory.length === 0 ? "Data tidak ditemukan" : dataCategory
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [125], () => (__webpack_exec__(5227)));
module.exports = __webpack_exports__;

})();