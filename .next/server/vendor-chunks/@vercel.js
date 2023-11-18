"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vercel/analytics/dist/react/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Analytics: () => (/* binding */ Analytics)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\"use client\";\n\n// src/react.tsx\n\n\n// package.json\nvar name = \"@vercel/analytics\";\nvar version = \"0.1.11\";\n\n// src/queue.ts\nvar initQueue = () => {\n  if (window.va)\n    return;\n  window.va = function a(...params) {\n    (window.vaq = window.vaq || []).push(params);\n  };\n};\n\n// src/utils.ts\nfunction isBrowser() {\n  return typeof window !== \"undefined\";\n}\nfunction isDevelopment() {\n  try {\n    const env = \"development\";\n    return env === \"development\" || env === \"test\";\n  } catch (e) {\n    return false;\n  }\n}\nfunction getMode(mode = \"auto\") {\n  if (mode === \"auto\") {\n    return isDevelopment() ? \"development\" : \"production\";\n  }\n  return mode;\n}\n\n// src/generic.ts\nvar inject = (props = {\n  debug: true\n}) => {\n  var _a;\n  if (!isBrowser())\n    return;\n  const mode = getMode(props.mode);\n  initQueue();\n  if (props.beforeSend) {\n    (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n  }\n  const src = mode === \"development\" ? \"https://cdn.vercel-insights.com/v1/script.debug.js\" : \"/_vercel/insights/script.js\";\n  if (document.head.querySelector(`script[src*=\"${src}\"]`))\n    return;\n  const script = document.createElement(\"script\");\n  script.src = src;\n  script.defer = true;\n  script.setAttribute(\"data-sdkn\", name);\n  script.setAttribute(\"data-sdkv\", version);\n  if (mode === \"development\" && props.debug === false) {\n    script.setAttribute(\"data-debug\", \"false\");\n  }\n  document.head.appendChild(script);\n};\n\n// src/react.tsx\nfunction Analytics({\n  beforeSend,\n  debug = true,\n  mode = \"auto\"\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    inject({ beforeSend, debug, mode });\n  }, [beforeSend, debug, mode]);\n  return null;\n}\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9hbmFseXRpY3MvZGlzdC9yZWFjdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ2tDOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBb0I7QUFDcEM7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsSUFBSTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsRUFBRSxnREFBUztBQUNYLGFBQWEseUJBQXlCO0FBQ3RDLEdBQUc7QUFDSDtBQUNBO0FBR0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3ByZWNlZGVudC8uL25vZGVfbW9kdWxlcy9AdmVyY2VsL2FuYWx5dGljcy9kaXN0L3JlYWN0L2luZGV4LmpzP2E2YzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbi8vIHNyYy9yZWFjdC50c3hcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBwYWNrYWdlLmpzb25cbnZhciBuYW1lID0gXCJAdmVyY2VsL2FuYWx5dGljc1wiO1xudmFyIHZlcnNpb24gPSBcIjAuMS4xMVwiO1xuXG4vLyBzcmMvcXVldWUudHNcbnZhciBpbml0UXVldWUgPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cudmEpXG4gICAgcmV0dXJuO1xuICB3aW5kb3cudmEgPSBmdW5jdGlvbiBhKC4uLnBhcmFtcykge1xuICAgICh3aW5kb3cudmFxID0gd2luZG93LnZhcSB8fCBbXSkucHVzaChwYXJhbXMpO1xuICB9O1xufTtcblxuLy8gc3JjL3V0aWxzLnRzXG5mdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufVxuZnVuY3Rpb24gaXNEZXZlbG9wbWVudCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICByZXR1cm4gZW52ID09PSBcImRldmVsb3BtZW50XCIgfHwgZW52ID09PSBcInRlc3RcIjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0TW9kZShtb2RlID0gXCJhdXRvXCIpIHtcbiAgaWYgKG1vZGUgPT09IFwiYXV0b1wiKSB7XG4gICAgcmV0dXJuIGlzRGV2ZWxvcG1lbnQoKSA/IFwiZGV2ZWxvcG1lbnRcIiA6IFwicHJvZHVjdGlvblwiO1xuICB9XG4gIHJldHVybiBtb2RlO1xufVxuXG4vLyBzcmMvZ2VuZXJpYy50c1xudmFyIGluamVjdCA9IChwcm9wcyA9IHtcbiAgZGVidWc6IHRydWVcbn0pID0+IHtcbiAgdmFyIF9hO1xuICBpZiAoIWlzQnJvd3NlcigpKVxuICAgIHJldHVybjtcbiAgY29uc3QgbW9kZSA9IGdldE1vZGUocHJvcHMubW9kZSk7XG4gIGluaXRRdWV1ZSgpO1xuICBpZiAocHJvcHMuYmVmb3JlU2VuZCkge1xuICAgIChfYSA9IHdpbmRvdy52YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwod2luZG93LCBcImJlZm9yZVNlbmRcIiwgcHJvcHMuYmVmb3JlU2VuZCk7XG4gIH1cbiAgY29uc3Qgc3JjID0gbW9kZSA9PT0gXCJkZXZlbG9wbWVudFwiID8gXCJodHRwczovL2Nkbi52ZXJjZWwtaW5zaWdodHMuY29tL3YxL3NjcmlwdC5kZWJ1Zy5qc1wiIDogXCIvX3ZlcmNlbC9pbnNpZ2h0cy9zY3JpcHQuanNcIjtcbiAgaWYgKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYyo9XCIke3NyY31cIl1gKSlcbiAgICByZXR1cm47XG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIHNjcmlwdC5zcmMgPSBzcmM7XG4gIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNka25cIiwgbmFtZSk7XG4gIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNka3ZcIiwgdmVyc2lvbik7XG4gIGlmIChtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgcHJvcHMuZGVidWcgPT09IGZhbHNlKSB7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtZGVidWdcIiwgXCJmYWxzZVwiKTtcbiAgfVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59O1xuXG4vLyBzcmMvcmVhY3QudHN4XG5mdW5jdGlvbiBBbmFseXRpY3Moe1xuICBiZWZvcmVTZW5kLFxuICBkZWJ1ZyA9IHRydWUsXG4gIG1vZGUgPSBcImF1dG9cIlxufSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluamVjdCh7IGJlZm9yZVNlbmQsIGRlYnVnLCBtb2RlIH0pO1xuICB9LCBbYmVmb3JlU2VuZCwgZGVidWcsIG1vZGVdKTtcbiAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQge1xuICBBbmFseXRpY3Ncbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vercel/analytics/dist/react/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@vercel/analytics/dist/react/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kristiankonov/Documents/frontend-helti/node_modules/@vercel/analytics/dist/react/index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Analytics"];


/***/ })

};
;