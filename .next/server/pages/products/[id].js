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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//------getStaticPaths------//\nasync function getStaticPaths() {\n    const URL =  false || 'http://localhost:8000';\n    const resp_products = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${URL}/products`);\n    const paths = resp_products.data.map((product)=>({\n            params: {\n                id: toString(product.id_product)\n            }\n        })\n    );\n    return {\n        paths,\n        fallback: true\n    };\n}\n//------getStaticProps------//\nasync function getStaticProps({ params  }) {\n    const URL =  false || 'http://localhost:8000';\n    const resp_product = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${URL}/products/${params.id}`);\n    return {\n        props: {\n            product: resp_product.data\n        }\n    };\n}\n;\n//------COMPONENTE------//\nfunction ProductPage({ product  }) {\n    // const router = useRouter();\n    // const {id} = router.query;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: product?.image\n            }, void 0, false, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"detalle del producto: \",\n                    product?.id_product\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"nombre: \",\n                    product?.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"precio: $\",\n                    product?.price,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYztBQUNkO0FBSXpCLEVBQThCO0FBQ3ZCLGVBQWVHLGNBQWMsR0FBRyxDQUFDO0lBRXRDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHQyxNQUFnQyxJQUFJLENBQXVCO0lBRXZFLEtBQUssQ0FBQ0csYUFBYSxHQUFHLEtBQUssQ0FBQ04sZ0RBQVMsSUFBSUUsR0FBRyxDQUFDLFNBQVM7SUFFdEQsS0FBSyxDQUFDTSxLQUFLLEdBQUdGLGFBQWEsQ0FBQ0csSUFBSSxDQUFDQyxHQUFHLEVBQUVDLE9BQU8sSUFBSyxDQUFDO1lBQ2pEQyxNQUFNLEVBQUMsQ0FBQztnQkFDTkMsRUFBRSxFQUFFQyxRQUFRLENBQUNILE9BQU8sQ0FBQ0ksVUFBVTtZQUNqQyxDQUFDO1FBQ0gsQ0FBQzs7SUFRRCxNQUFNLENBQUMsQ0FBQztRQUNOUCxLQUFLO1FBQ0xRLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7QUFDSCxDQUFDO0FBR0QsRUFBOEI7QUFDdkIsZUFBZUMsY0FBYyxDQUFDLENBQUNMLENBQUFBLE1BQU0sR0FBQyxFQUFDLENBQUM7SUFFN0MsS0FBSyxDQUFDVixHQUFHLEdBQUdDLE1BQWdDLElBQUksQ0FBdUI7SUFFdkUsS0FBSyxDQUFDZSxZQUFZLEdBQUcsS0FBSyxDQUFDbEIsZ0RBQVMsSUFBSUUsR0FBRyxDQUFDLFVBQVUsRUFBRVUsTUFBTSxDQUFDQyxFQUFFO0lBRWpFLE1BQU0sQ0FBQyxDQUFDO1FBQ0pNLEtBQUssRUFBRSxDQUFDO1lBQ0pSLE9BQU8sRUFBRU8sWUFBWSxDQUFDVCxJQUFJO1FBQzlCLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQzs7QUFJRCxFQUEwQjtBQUNYLFFBQVEsQ0FBQ1csV0FBVyxDQUFDLENBQUNULENBQUFBLE9BQU8sR0FBQyxFQUFFLENBQUM7SUFDOUMsRUFBOEI7SUFDOUIsRUFBNkI7SUFFN0IsTUFBTSw2RUFFSFUsQ0FBRzs7d0ZBQ0RDLENBQUc7Z0JBQUNDLEdBQUcsRUFBRVosT0FBTyxFQUFFYSxLQUFLOzs7Ozs7d0ZBQ3ZCQyxDQUFFOztvQkFBQyxDQUFzQjtvQkFBQ2QsT0FBTyxFQUFFSSxVQUFVOzs7Ozs7O3dGQUM3Q1UsQ0FBRTs7b0JBQUMsQ0FBUTtvQkFBQ2QsT0FBTyxFQUFFZSxJQUFJO29CQUFDLENBQUM7Ozs7Ozs7d0ZBQzNCRCxDQUFFOztvQkFBQyxDQUFTO29CQUFDZCxPQUFPLEVBQUVnQixLQUFLO29CQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFJcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvcHJvZHVjdHMvW2lkXS5qc3g/ZTMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cblxuLy8tLS0tLS1nZXRTdGF0aWNQYXRocy0tLS0tLS8vXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG5cbiAgY29uc3QgVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7XG5cbiAgY29uc3QgcmVzcF9wcm9kdWN0cyA9IGF3YWl0IGF4aW9zLmdldChgJHtVUkx9L3Byb2R1Y3RzYCk7XG5cbiAgY29uc3QgcGF0aHMgPSByZXNwX3Byb2R1Y3RzLmRhdGEubWFwKChwcm9kdWN0KSA9Pih7XG4gICAgcGFyYW1zOntcbiAgICAgIGlkOiB0b1N0cmluZyhwcm9kdWN0LmlkX3Byb2R1Y3QpXG4gICAgfVxuICB9KVxuICAvLyAge1xuICAvLyAgICAgcmV0dXJuIHtwYXJhbXM6e1xuICAvLyAgICAgICBpZDogdG9TdHJpbmcocHJvZHVjdC5pZF9wcm9kdWN0KVxuICAvLyAgICAgfX1cbiAgLy8gICB9XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogdHJ1ZVxuICB9O1xufVxuXG5cbi8vLS0tLS0tZ2V0U3RhdGljUHJvcHMtLS0tLS0vL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KXtcblxuICBjb25zdCBVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJztcblxuICBjb25zdCByZXNwX3Byb2R1Y3QgPSBhd2FpdCBheGlvcy5nZXQoYCR7VVJMfS9wcm9kdWN0cy8ke3BhcmFtcy5pZH1gKTtcblxuICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBwcm9kdWN0OiByZXNwX3Byb2R1Y3QuZGF0YSxcbiAgICAgIH1cbiAgfVxufTtcblxuXG5cbi8vLS0tLS0tQ09NUE9ORU5URS0tLS0tLS8vXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSh7cHJvZHVjdH0pIHtcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2PiBcbiAgICAgIDxpbWcgc3JjPXtwcm9kdWN0Py5pbWFnZX0gLz5cbiAgICAgIDxoMj5kZXRhbGxlIGRlbCBwcm9kdWN0bzoge3Byb2R1Y3Q/LmlkX3Byb2R1Y3R9PC9oMj5cbiAgICAgIDxoMj5ub21icmU6IHtwcm9kdWN0Py5uYW1lfSA8L2gyPlxuICAgICAgPGgyPnByZWNpbzogJHtwcm9kdWN0Py5wcmljZX0gPC9oMj5cbiAgICA8L2Rpdj5cbiAgXG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsImdldFN0YXRpY1BhdGhzIiwiVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBU0VfVVJMIiwicmVzcF9wcm9kdWN0cyIsImdldCIsInBhdGhzIiwiZGF0YSIsIm1hcCIsInByb2R1Y3QiLCJwYXJhbXMiLCJpZCIsInRvU3RyaW5nIiwiaWRfcHJvZHVjdCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXNwX3Byb2R1Y3QiLCJwcm9wcyIsIlByb2R1Y3RQYWdlIiwiZGl2IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJoMiIsIm5hbWUiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[id].jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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