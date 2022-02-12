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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//------getStaticPaths------//\nasync function getStaticPaths() {\n    const URL = \"https://db-ecommerce-tzuzul.herokuapp.com\" || 0;\n    console.log('URL: ', URL); //-----\n    // const resp_products = await axios.get('http://localhost:8000/products');\n    const resp_products = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(URL + '/products');\n    const paths = resp_products.data.map((product)=>{\n        return {\n            params: {\n                id: toString(product.id_product)\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: true\n    };\n}\n//------getStaticProps------//\nasync function getStaticProps({ params  }) {\n    // const URL = process.env.NEXT_PUBLIC_API || 'http://localhost:8000';\n    // const resp_product = await axios.get(`http://localhost:8000/products/${params.id}`);\n    const resp_product = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`/products/${params.id}`);\n    return {\n        props: {\n            product: resp_product.data\n        }\n    };\n}\n;\n//------COMPONENTE------//\nfunction ProductPage({ product  }) {\n    // const router = useRouter();\n    // const {id} = router.query;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: product === null || product === void 0 ? void 0 : product.image\n            }, void 0, false, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"detalle del producto: \",\n                    product === null || product === void 0 ? void 0 : product.id_product\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"nombre: \",\n                    product === null || product === void 0 ? void 0 : product.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"precio: $\",\n                    product === null || product === void 0 ? void 0 : product.price,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/marco/Documentos/bootcamps/tzuzul/frontend-ecommerce-tzuzul/pages/products/[id].jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYztBQUNkO0FBSXpCLEVBQThCO0FBQ3ZCLGVBQWVHLGNBQWMsR0FBRyxDQUFDO0lBQ3RDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHQywyQ0FBMkIsSUFBSSxDQUF1QjtJQUNsRUcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTyxRQUFFTCxHQUFHLEVBQUUsQ0FBTztJQUNqQyxFQUEyRTtJQUMzRSxLQUFLLENBQUNNLGFBQWEsR0FBRyxLQUFLLENBQUNSLGdEQUFTLENBQUNFLEdBQUcsR0FBQyxDQUFXO0lBQ3JELEtBQUssQ0FBQ1EsS0FBSyxHQUFHRixhQUFhLENBQUNHLElBQUksQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEdBQzVDLENBQUM7UUFDRSxNQUFNLENBQUMsQ0FBQ0M7WUFBQUEsTUFBTSxFQUFDLENBQUM7Z0JBQ2RDLEVBQUUsRUFBRUMsUUFBUSxDQUFDSCxPQUFPLENBQUNJLFVBQVU7WUFDakMsQ0FBQztRQUFBLENBQUM7SUFDSixDQUFDO0lBR0gsTUFBTSxDQUFDLENBQUM7UUFDTlAsS0FBSztRQUNMUSxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUdELEVBQThCO0FBQ3ZCLGVBQWVDLGNBQWMsQ0FBQyxDQUFDTCxDQUFBQSxNQUFNLEdBQUMsRUFBQyxDQUFDO0lBQzdDLEVBQXNFO0lBQ3RFLEVBQXVGO0lBQ3ZGLEtBQUssQ0FBQ00sWUFBWSxHQUFHLEtBQUssQ0FBQ3BCLGdEQUFTLEVBQUUsVUFBVSxFQUFFYyxNQUFNLENBQUNDLEVBQUU7SUFFM0QsTUFBTSxDQUFDLENBQUM7UUFDSk0sS0FBSyxFQUFFLENBQUM7WUFDSlIsT0FBTyxFQUFFTyxZQUFZLENBQUNULElBQUk7UUFDOUIsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDOztBQUlELEVBQTBCO0FBQ1gsUUFBUSxDQUFDVyxXQUFXLENBQUMsQ0FBQ1QsQ0FBQUEsT0FBTyxHQUFDLEVBQUUsQ0FBQztJQUM5QyxFQUE4QjtJQUM5QixFQUE2QjtJQUU3QixNQUFNLDZFQUVIVSxDQUFHOzt3RkFDREMsQ0FBRztnQkFBQ0MsR0FBRyxFQUFFWixPQUFPLGFBQVBBLE9BQU8sS0FBUEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxPQUFPLENBQUVhLEtBQUs7Ozs7Ozt3RkFDdkJDLENBQUU7O29CQUFDLENBQXNCO29CQUFDZCxPQUFPLGFBQVBBLE9BQU8sS0FBUEEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsT0FBTyxDQUFFSSxVQUFVOzs7Ozs7O3dGQUM3Q1UsQ0FBRTs7b0JBQUMsQ0FBUTtvQkFBQ2QsT0FBTyxhQUFQQSxPQUFPLEtBQVBBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsT0FBTyxDQUFFZSxJQUFJO29CQUFDLENBQUM7Ozs7Ozs7d0ZBQzNCRCxDQUFFOztvQkFBQyxDQUFTO29CQUFDZCxPQUFPLGFBQVBBLE9BQU8sS0FBUEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxPQUFPLENBQUVnQixLQUFLO29CQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFJcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvcHJvZHVjdHMvW2lkXS5qc3g/ZTMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cblxuLy8tLS0tLS1nZXRTdGF0aWNQYXRocy0tLS0tLS8vXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IFVSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSSB8fCAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJztcbiAgY29uc29sZS5sb2coJ1VSTDogJywgVVJMKTsvLy0tLS0tXG4gIC8vIGNvbnN0IHJlc3BfcHJvZHVjdHMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9kdWN0cycpO1xuICBjb25zdCByZXNwX3Byb2R1Y3RzID0gYXdhaXQgYXhpb3MuZ2V0KFVSTCsnL3Byb2R1Y3RzJyk7XG4gIGNvbnN0IHBhdGhzID0gcmVzcF9wcm9kdWN0cy5kYXRhLm1hcCgocHJvZHVjdCkgPT5cbiAgIHtcbiAgICAgIHJldHVybiB7cGFyYW1zOntcbiAgICAgICAgaWQ6IHRvU3RyaW5nKHByb2R1Y3QuaWRfcHJvZHVjdClcbiAgICAgIH19XG4gICAgfVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IHRydWVcbiAgfTtcbn1cblxuXG4vLy0tLS0tLWdldFN0YXRpY1Byb3BzLS0tLS0tLy9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSl7XG4gIC8vIGNvbnN0IFVSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSSB8fCAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJztcbiAgLy8gY29uc3QgcmVzcF9wcm9kdWN0ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvcHJvZHVjdHMvJHtwYXJhbXMuaWR9YCk7XG4gIGNvbnN0IHJlc3BfcHJvZHVjdCA9IGF3YWl0IGF4aW9zLmdldChgL3Byb2R1Y3RzLyR7cGFyYW1zLmlkfWApO1xuXG4gIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICAgIHByb2R1Y3Q6IHJlc3BfcHJvZHVjdC5kYXRhLFxuICAgICAgfVxuICB9XG59O1xuXG5cblxuLy8tLS0tLS1DT01QT05FTlRFLS0tLS0tLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RQYWdlKHtwcm9kdWN0fSkge1xuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcblxuICByZXR1cm4gKFxuICAgIFxuICAgIDxkaXY+IFxuICAgICAgPGltZyBzcmM9e3Byb2R1Y3Q/LmltYWdlfSAvPlxuICAgICAgPGgyPmRldGFsbGUgZGVsIHByb2R1Y3RvOiB7cHJvZHVjdD8uaWRfcHJvZHVjdH08L2gyPlxuICAgICAgPGgyPm5vbWJyZToge3Byb2R1Y3Q/Lm5hbWV9IDwvaDI+XG4gICAgICA8aDI+cHJlY2lvOiAke3Byb2R1Y3Q/LnByaWNlfSA8L2gyPlxuICAgIDwvZGl2PlxuICBcbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsImdldFN0YXRpY1BhdGhzIiwiVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwX3Byb2R1Y3RzIiwiZ2V0IiwicGF0aHMiLCJkYXRhIiwibWFwIiwicHJvZHVjdCIsInBhcmFtcyIsImlkIiwidG9TdHJpbmciLCJpZF9wcm9kdWN0IiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInJlc3BfcHJvZHVjdCIsInByb3BzIiwiUHJvZHVjdFBhZ2UiLCJkaXYiLCJpbWciLCJzcmMiLCJpbWFnZSIsImgyIiwibmFtZSIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[id].jsx\n");

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