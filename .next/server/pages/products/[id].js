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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//------getStaticPaths------//\nasync function getStaticPaths() {\n    const URL = process.env.NEXT_PUBLIC_API || 'http://localhost:8000';\n    console.log('URL: ', URL); //-----\n    // const resp_products = await axios.get('http://localhost:8000/products');\n    const resp_products = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(URL + '/products');\n    const paths = resp_products.data.map((product)=>{\n        return {\n            params: {\n                id: toString(product.id_product)\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: true\n    };\n}\n//------getStaticProps------//\nasync function getStaticProps({ params  }) {\n    // const URL = process.env.NEXT_PUBLIC_API || 'http://localhost:8000';\n    // const resp_product = await axios.get(`http://localhost:8000/products/${params.id}`);\n    const resp_product = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`/products/${params.id}`);\n    return {\n        props: {\n            product: resp_product.data\n        }\n    };\n}\n;\n//------COMPONENTE------//\nfunction ProductPage({ product  }) {\n    // const router = useRouter();\n    // const {id} = router.query;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: product?.image\n            }, void 0, false, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"detalle del producto: \",\n                    product?.id_product\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"nombre: \",\n                    product?.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"precio: $\",\n                    product?.price,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYztBQUNkO0FBSXpCLEVBQThCO0FBQ3ZCLGVBQWVHLGNBQWMsR0FBRyxDQUFDO0lBQ3RDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZSxJQUFJLENBQXVCO0lBQ2xFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFPLFFBQUVMLEdBQUcsRUFBRSxDQUFPO0lBQ2pDLEVBQTJFO0lBQzNFLEtBQUssQ0FBQ00sYUFBYSxHQUFHLEtBQUssQ0FBQ1IsZ0RBQVMsQ0FBQ0UsR0FBRyxHQUFDLENBQVc7SUFDckQsS0FBSyxDQUFDUSxLQUFLLEdBQUdGLGFBQWEsQ0FBQ0csSUFBSSxDQUFDQyxHQUFHLEVBQUVDLE9BQU8sR0FDNUMsQ0FBQztRQUNFLE1BQU0sQ0FBQyxDQUFDQztZQUFBQSxNQUFNLEVBQUMsQ0FBQztnQkFDZEMsRUFBRSxFQUFFQyxRQUFRLENBQUNILE9BQU8sQ0FBQ0ksVUFBVTtZQUNqQyxDQUFDO1FBQUEsQ0FBQztJQUNKLENBQUM7SUFHSCxNQUFNLENBQUMsQ0FBQztRQUNOUCxLQUFLO1FBQ0xRLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7QUFDSCxDQUFDO0FBR0QsRUFBOEI7QUFDdkIsZUFBZUMsY0FBYyxDQUFDLENBQUNMLENBQUFBLE1BQU0sR0FBQyxFQUFDLENBQUM7SUFDN0MsRUFBc0U7SUFDdEUsRUFBdUY7SUFDdkYsS0FBSyxDQUFDTSxZQUFZLEdBQUcsS0FBSyxDQUFDcEIsZ0RBQVMsRUFBRSxVQUFVLEVBQUVjLE1BQU0sQ0FBQ0MsRUFBRTtJQUUzRCxNQUFNLENBQUMsQ0FBQztRQUNKTSxLQUFLLEVBQUUsQ0FBQztZQUNKUixPQUFPLEVBQUVPLFlBQVksQ0FBQ1QsSUFBSTtRQUM5QixDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUM7O0FBSUQsRUFBMEI7QUFDWCxRQUFRLENBQUNXLFdBQVcsQ0FBQyxDQUFDVCxDQUFBQSxPQUFPLEdBQUMsRUFBRSxDQUFDO0lBQzlDLEVBQThCO0lBQzlCLEVBQTZCO0lBRTdCLE1BQU0sNkVBRUhVLENBQUc7O3dGQUNEQyxDQUFHO2dCQUFDQyxHQUFHLEVBQUVaLE9BQU8sRUFBRWEsS0FBSzs7Ozs7O3dGQUN2QkMsQ0FBRTs7b0JBQUMsQ0FBc0I7b0JBQUNkLE9BQU8sRUFBRUksVUFBVTs7Ozs7Ozt3RkFDN0NVLENBQUU7O29CQUFDLENBQVE7b0JBQUNkLE9BQU8sRUFBRWUsSUFBSTtvQkFBQyxDQUFDOzs7Ozs7O3dGQUMzQkQsQ0FBRTs7b0JBQUMsQ0FBUztvQkFBQ2QsT0FBTyxFQUFFZ0IsS0FBSztvQkFBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBSXBDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL3Byb2R1Y3RzL1tpZF0uanN4P2UzMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5cbi8vLS0tLS0tZ2V0U3RhdGljUGF0aHMtLS0tLS0vL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEkgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7XG4gIGNvbnNvbGUubG9nKCdVUkw6ICcsIFVSTCk7Ly8tLS0tLVxuICAvLyBjb25zdCByZXNwX3Byb2R1Y3RzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvcHJvZHVjdHMnKTtcbiAgY29uc3QgcmVzcF9wcm9kdWN0cyA9IGF3YWl0IGF4aW9zLmdldChVUkwrJy9wcm9kdWN0cycpO1xuICBjb25zdCBwYXRocyA9IHJlc3BfcHJvZHVjdHMuZGF0YS5tYXAoKHByb2R1Y3QpID0+XG4gICB7XG4gICAgICByZXR1cm4ge3BhcmFtczp7XG4gICAgICAgIGlkOiB0b1N0cmluZyhwcm9kdWN0LmlkX3Byb2R1Y3QpXG4gICAgICB9fVxuICAgIH1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiB0cnVlXG4gIH07XG59XG5cblxuLy8tLS0tLS1nZXRTdGF0aWNQcm9wcy0tLS0tLS8vXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pe1xuICAvLyBjb25zdCBVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEkgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7XG4gIC8vIGNvbnN0IHJlc3BfcHJvZHVjdCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Byb2R1Y3RzLyR7cGFyYW1zLmlkfWApO1xuICBjb25zdCByZXNwX3Byb2R1Y3QgPSBhd2FpdCBheGlvcy5nZXQoYC9wcm9kdWN0cy8ke3BhcmFtcy5pZH1gKTtcblxuICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBwcm9kdWN0OiByZXNwX3Byb2R1Y3QuZGF0YSxcbiAgICAgIH1cbiAgfVxufTtcblxuXG5cbi8vLS0tLS0tQ09NUE9ORU5URS0tLS0tLS8vXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSh7cHJvZHVjdH0pIHtcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2PiBcbiAgICAgIDxpbWcgc3JjPXtwcm9kdWN0Py5pbWFnZX0gLz5cbiAgICAgIDxoMj5kZXRhbGxlIGRlbCBwcm9kdWN0bzoge3Byb2R1Y3Q/LmlkX3Byb2R1Y3R9PC9oMj5cbiAgICAgIDxoMj5ub21icmU6IHtwcm9kdWN0Py5uYW1lfSA8L2gyPlxuICAgICAgPGgyPnByZWNpbzogJHtwcm9kdWN0Py5wcmljZX0gPC9oMj5cbiAgICA8L2Rpdj5cbiAgXG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJnZXRTdGF0aWNQYXRocyIsIlVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJjb25zb2xlIiwibG9nIiwicmVzcF9wcm9kdWN0cyIsImdldCIsInBhdGhzIiwiZGF0YSIsIm1hcCIsInByb2R1Y3QiLCJwYXJhbXMiLCJpZCIsInRvU3RyaW5nIiwiaWRfcHJvZHVjdCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXNwX3Byb2R1Y3QiLCJwcm9wcyIsIlByb2R1Y3RQYWdlIiwiZGl2IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJoMiIsIm5hbWUiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[id].jsx\n");

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