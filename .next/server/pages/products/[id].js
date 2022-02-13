"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/products/[id]";
exports.ids = ["pages/products/[id]"];
exports.modules = {

/***/ "./pages/products/[id].jsx":
/*!*********************************!*\
  !*** ./pages/products/[id].jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//------getStaticPaths------//\nasync function getStaticPaths() {\n    const resp_products = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://db-ecommerce-tzuzul.herokuapp.com/products`);\n    const paths = resp_products?.data.map((product)=>{\n        const res = {\n            params: {\n                id: '' + product?.id_product\n            }\n        };\n        return res;\n    });\n    return {\n        paths,\n        fallback: false\n    };\n}\n//------getStaticProps------//\nasync function getStaticProps({ params  }) {\n    const resp_product = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://db-ecommerce-tzuzul.herokuapp.com/products/${params.id}`);\n    return {\n        props: {\n            product: resp_product?.data\n        }\n    };\n}\n;\n//------COMPONENTE------//\nfunction ProductPage({ product  }) {\n    // const router = useRouter();\n    // const {id} = router.query;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: product?.image\n            }, void 0, false, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"detalle del producto: \",\n                    product?.id_product\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"nombre: \",\n                    product?.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"precio: $\",\n                    product?.price,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0E7QUFJekIsRUFBOEI7QUFDdkIsZUFBZUUsY0FBYyxHQUFHLENBQUM7SUFFcEMsS0FBSyxDQUFDQyxhQUFhLEdBQUcsS0FBSyxDQUFDRixnREFBUyxFQUFFLGtEQUFrRDtJQUV6RixLQUFLLENBQUNJLEtBQUssR0FBR0YsYUFBYSxFQUFFRyxJQUFJLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxHQUFLLENBQUM7UUFDaEQsS0FBSyxDQUFDQyxHQUFHLEdBQUcsQ0FBQztZQUNUQyxNQUFNLEVBQUUsQ0FBQztnQkFDTEMsRUFBRSxFQUFFLENBQUUsSUFBR0gsT0FBTyxFQUFFSSxVQUFVO1lBQ2hDLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDSCxHQUFHO0lBQ2QsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ0pKLEtBQUs7UUFDTFEsUUFBUSxFQUFFLEtBQUs7SUFDbkIsQ0FBQztBQUNMLENBQUM7QUFHRCxFQUE4QjtBQUN2QixlQUFlQyxjQUFjLENBQUMsQ0FBQyxDQUFDSixNQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFFOUMsS0FBSyxDQUFDSyxZQUFZLEdBQUcsS0FBSyxDQUFDZCxnREFBUyxFQUFFLG1EQUFtRCxFQUFFUyxNQUFNLENBQUNDLEVBQUU7SUFFcEcsTUFBTSxDQUFDLENBQUM7UUFDSkssS0FBSyxFQUFFLENBQUM7WUFDSlIsT0FBTyxFQUFFTyxZQUFZLEVBQUVULElBQUk7UUFDL0IsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDOztBQUlELEVBQTBCO0FBQ1gsUUFBUSxDQUFDVyxXQUFXLENBQUMsQ0FBQyxDQUFDVCxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUMsRUFBOEI7SUFDOUIsRUFBNkI7SUFFN0IsTUFBTSw2RUFFRFUsQ0FBRzs7d0ZBQ0NDLENBQUc7Z0JBQUNDLEdBQUcsRUFBRVosT0FBTyxFQUFFYSxLQUFLOzs7Ozs7d0ZBQ3ZCQyxDQUFFOztvQkFBQyxDQUFzQjtvQkFBQ2QsT0FBTyxFQUFFSSxVQUFVOzs7Ozs7O3dGQUM3Q1UsQ0FBRTs7b0JBQUMsQ0FBUTtvQkFBQ2QsT0FBTyxFQUFFZSxJQUFJO29CQUFDLENBQUM7Ozs7Ozs7d0ZBQzNCRCxDQUFFOztvQkFBQyxDQUFTO29CQUFDZCxPQUFPLEVBQUVnQixLQUFLO29CQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFJMUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvcHJvZHVjdHMvW2lkXS5qc3g/ZTMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5cbi8vLS0tLS0tZ2V0U3RhdGljUGF0aHMtLS0tLS0vL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuXG4gICAgY29uc3QgcmVzcF9wcm9kdWN0cyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9kYi1lY29tbWVyY2UtdHp1enVsLmhlcm9rdWFwcC5jb20vcHJvZHVjdHNgKTtcblxuICAgIGNvbnN0IHBhdGhzID0gcmVzcF9wcm9kdWN0cz8uZGF0YS5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICcnICsgcHJvZHVjdD8uaWRfcHJvZHVjdFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfTtcbn1cblxuXG4vLy0tLS0tLWdldFN0YXRpY1Byb3BzLS0tLS0tLy9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG5cbiAgICBjb25zdCByZXNwX3Byb2R1Y3QgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vZGItZWNvbW1lcmNlLXR6dXp1bC5oZXJva3VhcHAuY29tL3Byb2R1Y3RzLyR7cGFyYW1zLmlkfWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHByb2R1Y3Q6IHJlc3BfcHJvZHVjdD8uZGF0YSxcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuXG4vLy0tLS0tLUNPTVBPTkVOVEUtLS0tLS0vL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFBhZ2UoeyBwcm9kdWN0IH0pIHtcbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAvLyBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3Q/LmltYWdlfSAvPlxuICAgICAgICAgICAgPGgyPmRldGFsbGUgZGVsIHByb2R1Y3RvOiB7cHJvZHVjdD8uaWRfcHJvZHVjdH08L2gyPlxuICAgICAgICAgICAgPGgyPm5vbWJyZToge3Byb2R1Y3Q/Lm5hbWV9IDwvaDI+XG4gICAgICAgICAgICA8aDI+cHJlY2lvOiAke3Byb2R1Y3Q/LnByaWNlfSA8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsImdldFN0YXRpY1BhdGhzIiwicmVzcF9wcm9kdWN0cyIsImdldCIsInBhdGhzIiwiZGF0YSIsIm1hcCIsInByb2R1Y3QiLCJyZXMiLCJwYXJhbXMiLCJpZCIsImlkX3Byb2R1Y3QiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicmVzcF9wcm9kdWN0IiwicHJvcHMiLCJQcm9kdWN0UGFnZSIsImRpdiIsImltZyIsInNyYyIsImltYWdlIiwiaDIiLCJuYW1lIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[id].jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/[id].jsx"));
module.exports = __webpack_exports__;

})();