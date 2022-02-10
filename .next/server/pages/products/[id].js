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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//------getStaticPaths------//\nasync function getStaticPaths() {\n    const resp_products = await axios__WEBPACK_IMPORTED_MODULE_3___default().get('http://localhost:8000/products');\n    const paths = resp_products.data.map((product)=>{\n        return {\n            params: {\n                id: toString(product.id_product)\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: true\n    };\n}\n//------getStaticProps------//\nasync function getStaticProps({ params  }) {\n    const resp_product = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`http://localhost:8000/products/${params.id}`);\n    return {\n        props: {\n            product: resp_product.data\n        }\n    };\n}\n;\n//------COMPONENTE------//\nfunction ProductPage({ product  }) {\n    // const router = useRouter();\n    // const {id} = router.query;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: product?.image\n            }, void 0, false, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"detalle del producto: \",\n                    product?.id_product\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"nombre: \",\n                    product?.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"precio: $\",\n                    product?.price,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYztBQUNkO0FBR3pCLEVBQThCO0FBQ3ZCLGVBQWVHLGNBQWMsR0FBRyxDQUFDO0lBQ3RDLEtBQUssQ0FBQ0MsYUFBYSxHQUFHLEtBQUssQ0FBQ0YsZ0RBQVMsQ0FBQyxDQUFnQztJQUN0RSxLQUFLLENBQUNJLEtBQUssR0FBR0YsYUFBYSxDQUFDRyxJQUFJLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxHQUM1QyxDQUFDO1FBQ0UsTUFBTSxDQUFDLENBQUNDO1lBQUFBLE1BQU0sRUFBQyxDQUFDO2dCQUNkQyxFQUFFLEVBQUVDLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDSSxVQUFVO1lBQ2pDLENBQUM7UUFBQSxDQUFDO0lBQ0osQ0FBQztJQUdILE1BQU0sQ0FBQyxDQUFDO1FBQ05QLEtBQUs7UUFDTFEsUUFBUSxFQUFFLElBQUk7SUFDaEIsQ0FBQztBQUNILENBQUM7QUFHRCxFQUE4QjtBQUN2QixlQUFlQyxjQUFjLENBQUMsQ0FBQ0wsQ0FBQUEsTUFBTSxHQUFDLEVBQUMsQ0FBQztJQUM3QyxLQUFLLENBQUNNLFlBQVksR0FBRyxLQUFLLENBQUNkLGdEQUFTLEVBQUUsK0JBQStCLEVBQUVRLE1BQU0sQ0FBQ0MsRUFBRTtJQUVoRixNQUFNLENBQUMsQ0FBQztRQUNKTSxLQUFLLEVBQUUsQ0FBQztZQUNKUixPQUFPLEVBQUVPLFlBQVksQ0FBQ1QsSUFBSTtRQUM5QixDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUM7O0FBSUQsRUFBMEI7QUFDWCxRQUFRLENBQUNXLFdBQVcsQ0FBQyxDQUFDVCxDQUFBQSxPQUFPLEdBQUMsRUFBRSxDQUFDO0lBQzlDLEVBQThCO0lBQzlCLEVBQTZCO0lBRTdCLE1BQU0sNkVBRUhVLENBQUc7O3dGQUNEQyxDQUFHO2dCQUFDQyxHQUFHLEVBQUVaLE9BQU8sRUFBRWEsS0FBSzs7Ozs7O3dGQUN2QkMsQ0FBRTs7b0JBQUMsQ0FBc0I7b0JBQUNkLE9BQU8sRUFBRUksVUFBVTs7Ozs7Ozt3RkFDN0NVLENBQUU7O29CQUFDLENBQVE7b0JBQUNkLE9BQU8sRUFBRWUsSUFBSTtvQkFBQyxDQUFDOzs7Ozs7O3dGQUMzQkQsQ0FBRTs7b0JBQUMsQ0FBUztvQkFBQ2QsT0FBTyxFQUFFZ0IsS0FBSztvQkFBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBSXBDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL3Byb2R1Y3RzL1tpZF0uanN4P2UzMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG4vLy0tLS0tLWdldFN0YXRpY1BhdGhzLS0tLS0tLy9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzcF9wcm9kdWN0cyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Byb2R1Y3RzJyk7XG4gIGNvbnN0IHBhdGhzID0gcmVzcF9wcm9kdWN0cy5kYXRhLm1hcCgocHJvZHVjdCkgPT5cbiAgIHtcbiAgICAgIHJldHVybiB7cGFyYW1zOntcbiAgICAgICAgaWQ6IHRvU3RyaW5nKHByb2R1Y3QuaWRfcHJvZHVjdClcbiAgICAgIH19XG4gICAgfVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IHRydWVcbiAgfTtcbn1cblxuXG4vLy0tLS0tLWdldFN0YXRpY1Byb3BzLS0tLS0tLy9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSl7XG4gIGNvbnN0IHJlc3BfcHJvZHVjdCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Byb2R1Y3RzLyR7cGFyYW1zLmlkfWApO1xuXG4gIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICAgIHByb2R1Y3Q6IHJlc3BfcHJvZHVjdC5kYXRhLFxuICAgICAgfVxuICB9XG59O1xuXG5cblxuLy8tLS0tLS1DT01QT05FTlRFLS0tLS0tLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RQYWdlKHtwcm9kdWN0fSkge1xuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcblxuICByZXR1cm4gKFxuICAgIFxuICAgIDxkaXY+IFxuICAgICAgPGltZyBzcmM9e3Byb2R1Y3Q/LmltYWdlfSAvPlxuICAgICAgPGgyPmRldGFsbGUgZGVsIHByb2R1Y3RvOiB7cHJvZHVjdD8uaWRfcHJvZHVjdH08L2gyPlxuICAgICAgPGgyPm5vbWJyZToge3Byb2R1Y3Q/Lm5hbWV9IDwvaDI+XG4gICAgICA8aDI+cHJlY2lvOiAke3Byb2R1Y3Q/LnByaWNlfSA8L2gyPlxuICAgIDwvZGl2PlxuICBcbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsImdldFN0YXRpY1BhdGhzIiwicmVzcF9wcm9kdWN0cyIsImdldCIsInBhdGhzIiwiZGF0YSIsIm1hcCIsInByb2R1Y3QiLCJwYXJhbXMiLCJpZCIsInRvU3RyaW5nIiwiaWRfcHJvZHVjdCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXNwX3Byb2R1Y3QiLCJwcm9wcyIsIlByb2R1Y3RQYWdlIiwiZGl2IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJoMiIsIm5hbWUiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[id].jsx\n");

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