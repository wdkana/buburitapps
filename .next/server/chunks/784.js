exports.id = 784;
exports.ids = [784];
exports.modules = {

/***/ 8895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer_Footer)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Footer/styled.js

const Footer = external_styled_components_default().footer.withConfig({
  displayName: "styled__Footer",
  componentId: "sc-j0imr7-0"
})(["padding:5em 10em 4em 10em;background-color:#fff;z-index:1;@media (max-width:768px){padding:5em 5em 4em 5em;}"]);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styled__Wrapper",
  componentId: "sc-j0imr7-1"
})(["display:flex;justify-content:space-between;@media (max-width:768px){flex-direction:column;justify-content:center;align-items:center;}"]);
const Title = external_styled_components_default().h1.withConfig({
  displayName: "styled__Title",
  componentId: "sc-j0imr7-2"
})(["letter-spacing:4px;line-height:1.2;font-size:1.5em;color:#566ffe;font-weight:800;text-transform:uppercase;cursor:pointer;@media (max-width:768px){text-align:center;}"]);
const Copyright = external_styled_components_default().p.withConfig({
  displayName: "styled__Copyright",
  componentId: "sc-j0imr7-3"
})(["font-size:0.8em;color:#183b56;@media (max-width:768px){margin-bottom:2em;}"]);
const MenuWrapper = external_styled_components_default().div.withConfig({
  displayName: "styled__MenuWrapper",
  componentId: "sc-j0imr7-4"
})(["display:flex;"]);
const Menu = external_styled_components_default().div.withConfig({
  displayName: "styled__Menu",
  componentId: "sc-j0imr7-5"
})(["display:flex;flex-direction:column;margin-right:80px;&:nth-child(2){margin-right:0;}"]);
const SubTitle = external_styled_components_default().h3.withConfig({
  displayName: "styled__SubTitle",
  componentId: "sc-j0imr7-6"
})(["letter-spacing:4px;line-height:1.2;font-size:1em;color:#183b56;font-weight:800;margin-bottom:22px;"]);
const Item = external_styled_components_default().p.withConfig({
  displayName: "styled__Item",
  componentId: "sc-j0imr7-7"
})(["font-size:0.9em;color:#183b56;margin-bottom:12px;cursor:pointer;transition:0.2s;&:hover{color:#566ffe;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.jsx





const FooterComponent = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Footer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(Title, {
            children: "Cuyshop"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Copyright, {
          children: ["Copyright \xA9 ", new Date().getFullYear(), ". Cuy Team"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Menu, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(SubTitle, {
            children: "Cuyshop"
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/store",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(Item, {
              children: "Produk"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/about",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(Item, {
              children: "Tentang Kami"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Menu, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(SubTitle, {
            children: "Kontak"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            target: "_blank",
            href: "https://www.youtube.com/c/DeaAfrizal",
            rel: "noopener noreferrer",
            style: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(Item, {
              children: "Youtube"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            target: "_blank",
            href: "https://www.instagram.com/dea.afrizal/",
            rel: "noopener noreferrer",
            style: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(Item, {
              children: "Instagram"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            target: "_blank",
            href: "https://www.tiktok.com/@dea.afrizal",
            rel: "noopener noreferrer",
            style: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(Item, {
              children: "Tiktok"
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const Footer_Footer = (FooterComponent);

/***/ }),

/***/ 4807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-icons/Gi"
var Gi_ = __webpack_require__(7587);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Header/styled.js

const HeaderWrapper = external_styled_components_default().header.withConfig({
  displayName: "styled__HeaderWrapper",
  componentId: "sc-16e3jyi-0"
})(["position:sticky;top:0;background:#fff;border-bottom:1px solid #c4dbe1;width:100%;white-space:nowrap;height:80px;transition:0.2s;z-index:999;@media (max-width:992px){height:", ";}"], props => (props === null || props === void 0 ? void 0 : props.height) === "true" ? "80px" : "310px");
const Container = external_styled_components_default().div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-16e3jyi-1"
})(["box-sizing:border-box;position:relative;width:100%;height:100%;padding:0 100px;margin-left:auto;margin-right:auto;@media (max-width:1400px){max-width:1250px;}@media (max-width:992px){max-width:800px;padding:0 50px;}@media (max-width:768px){max-width:800px;}"]);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styled__Wrapper",
  componentId: "sc-16e3jyi-2"
})(["display:flex;align-items:center;height:100%;position:relative;@media (max-width:992px){align-items:start;flex-direction:column;overflow:hidden;}"]);
const Title = external_styled_components_default().h1.withConfig({
  displayName: "styled__Title",
  componentId: "sc-16e3jyi-3"
})(["letter-spacing:4px;font-size:2em;color:#566ffe;font-weight:800;cursor:pointer;@media (max-width:992px){margin-top:20px;}"]);
const Menu = external_styled_components_default().ul.withConfig({
  displayName: "styled__Menu",
  componentId: "sc-16e3jyi-4"
})(["display:flex;margin-top:5px;margin-left:100px;@media (max-width:992px){margin-left:0;flex-direction:column;margin-top:25px;}"]);
const MenuItem = external_styled_components_default().li.withConfig({
  displayName: "styled__MenuItem",
  componentId: "sc-16e3jyi-5"
})(["list-style:none;margin-right:3em;cursor:pointer;transition:0.2s;font-weight:500;&:hover{color:#566ffe;}@media (max-width:992px){margin-top:20px;}"]);
const MenuSearch = external_styled_components_default().div.withConfig({
  displayName: "styled__MenuSearch",
  componentId: "sc-16e3jyi-6"
})(["width:250px;background:none;border:1px solid #91a0a4;border-radius:16px;margin-left:auto;@media (max-width:992px){margin-left:0;margin-top:40px;width:99%;}"]);
const MenuBurger = external_styled_components_default().div.withConfig({
  displayName: "styled__MenuBurger",
  componentId: "sc-16e3jyi-7"
})(["display:none;@media screen and (max-width:992px){display:block;position:absolute;right:0;top:1.5em;cursor:pointer;}"]);
// EXTERNAL MODULE: ./src/components/Header/index.module.css
var index_module = __webpack_require__(7563);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header/Header.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Header = () => {
  const {
    0: isShrinkHeader,
    1: setIsShrinkHeader
  } = (0,external_react_.useState)(true);
  const {
    0: filterOption,
    1: setFilterOption
  } = (0,external_react_.useState)({
    search: "",
    addData: false
  });
  const router = (0,router_.useRouter)();

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (filterOption.search === "") return;
    console.log({
      filterOption
    });
    router.push({
      pathname: "/store",
      query: filterOption
    }, undefined);
  };

  const handleSearch = e => {
    const newQuery = _objectSpread(_objectSpread({}, filterOption), {}, {
      search: e.target.value
    });

    setFilterOption(newQuery);
  };

  const toggleShrinkHeader = () => {
    setIsShrinkHeader(state => !state);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(HeaderWrapper, {
    height: `${isShrinkHeader}`,
    children: /*#__PURE__*/jsx_runtime_.jsx(Container, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(Title, {
            children: "Cuyshop"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Menu, {
          children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/store",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
              children: "Produk"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/about",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
              children: "Tentang Kami"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(MenuSearch, {
          children: /*#__PURE__*/jsx_runtime_.jsx("form", {
            onSubmit: handleSearchSubmit,
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              placeholder: "Cari produk",
              className: (index_module_default()).input,
              onChange: handleSearch
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(MenuBurger, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Gi_.GiHamburgerMenu, {
            size: 28,
            onClick: toggleShrinkHeader
          })
        })]
      })
    })
  });
};

/* harmony default export */ const Header_Header = (Header);

/***/ }),

/***/ 7563:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Header_input__OSd7o"
};


/***/ })

};
;