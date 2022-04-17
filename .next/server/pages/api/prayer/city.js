"use strict";
(() => {
var exports = {};
exports.id = 900;
exports.ids = [900];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({
    code: 405,
    status: "error",
    result: "Method Not Allowed"
  });
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.myquran.com/v1/sholat/kota/semua`);
  res.status(200).json({
    code: 200,
    status: "OK",
    result: data
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5236));
module.exports = __webpack_exports__;

})();