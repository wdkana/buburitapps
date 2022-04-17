"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 6448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
  let categorys = [{
    id: 1,
    name: "burger",
    image: "./assets/category/burger.png"
  }, {
    id: 2,
    name: "merch",
    image: "./assets/category/merch.png"
  }, {
    id: 3,
    name: "fashion",
    image: "./assets/category/wardrobe.png"
  }, {
    id: 4,
    name: "voucher",
    image: "./assets/category/voucher.png"
  }, {
    id: 5,
    name: "ticket",
    image: "./assets/category/ticket.png"
  }];
  res.status(200).json({
    code: 200,
    status: "OK",
    result: categorys
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6448));
module.exports = __webpack_exports__;

})();