"use strict";
(() => {
var exports = {};
exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 8243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "firebase-admin"
const external_firebase_admin_namespaceObject = require("firebase-admin");
var external_firebase_admin_default = /*#__PURE__*/__webpack_require__.n(external_firebase_admin_namespaceObject);
;// CONCATENATED MODULE: ./config/firebaseConfig.js
const fireConfig = {
  "type": process.env.type,
  "project_id": process.env.project_id,
  "private_key_id": process.env.private_key_id,
  "private_key": process.env.private_key,
  "client_email": process.env.client_email,
  "client_id": process.env.client_id,
  "auth_uri": process.env.auth_uri,
  "token_uri": process.env.token_uri,
  "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
  "client_x509_cert_url": process.env.client_x509_cert_url
};
;// CONCATENATED MODULE: ./config/firebase.js



try {
  external_firebase_admin_default().initializeApp({
    credential: external_firebase_admin_default().credential.cert(fireConfig)
  });
  console.log('Initialized.');
} catch (error) {
  console.log(error);

  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

/* harmony default export */ const config_firebase = ((external_firebase_admin_default()));
;// CONCATENATED MODULE: ./pages/api/firebase/index.js

async function handler(req, res) {
  const firebase = config_firebase.firestore();
  return new Promise((resolve, reject) => {
    firebase.collection('buburit').get().then(data => {
      var test = data.docs.map(entry => entry.data());
      res.status(200).json({
        test
      });
      res.end();
      resolve();
    }).catch(e => {
      res.status(405).json(e);
      res.end();
      resolve();
    });
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8243));
module.exports = __webpack_exports__;

})();