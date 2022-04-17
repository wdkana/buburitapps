"use strict";
(() => {
var exports = {};
exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
  const {
    slug
  } = req.query;
  let city = slug[0];
  let year = slug[1];
  let month = slug[2];
  if (req.method !== "GET") return res.status(405).json({
    code: 405,
    status: "error",
    result: "Method Not Allowed"
  });
  if (!city) return res.status(404).json({
    code: 404,
    status: "error",
    result: "city is required"
  });
  if (!year) return res.status(404).json({
    code: 404,
    status: "error",
    result: "year is required"
  });
  if (!month) return res.status(404).json({
    code: 404,
    status: "error",
    result: "month is required"
  });

  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.myquran.com/v1/sholat/jadwal/${city}/${year}/${month}`);
    const {
      jadwal
    } = data.data;
    res.status(200).json({
      code: 200,
      status: "OK",
      result: jadwal
    });
  } catch (error) {
    return res.status(404).json({
      code: 404,
      status: "error",
      result: "Data not found"
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5991));
module.exports = __webpack_exports__;

})();