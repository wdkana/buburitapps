"use strict";
(() => {
var exports = {};
exports.id = 45;
exports.ids = [45];
exports.modules = {

/***/ 3216:
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

  if (req.method === "GET") {
    const dataProduct = _product_json__WEBPACK_IMPORTED_MODULE_0__/* .products.filter */ .R.filter(product => {
      return product.id == req.query.id;
    });
    res.status(200).json({
      code: 200,
      status: "OK",
      result: dataProduct.length === 0 ? "Data tidak ditemukan" : dataProduct
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [125], () => (__webpack_exec__(3216)));
module.exports = __webpack_exports__;

})();