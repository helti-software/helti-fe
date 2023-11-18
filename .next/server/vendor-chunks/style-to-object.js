"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/style-to-object";
exports.ids = ["vendor-chunks/style-to-object"];
exports.modules = {

/***/ "(rsc)/./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar parse = __webpack_require__(/*! inline-style-parser */ \"(rsc)/./node_modules/inline-style-parser/index.js\");\n/**\n * Parses inline style to object.\n *\n * @example\n * // returns { 'line-height': '42' }\n * StyleToObject('line-height: 42;');\n *\n * @param  {String}      style      - The inline style.\n * @param  {Function}    [iterator] - The iterator function.\n * @return {null|Object}\n */ function StyleToObject(style, iterator) {\n    var output = null;\n    if (!style || typeof style !== \"string\") {\n        return output;\n    }\n    var declaration;\n    var declarations = parse(style);\n    var hasIterator = typeof iterator === \"function\";\n    var property;\n    var value;\n    for(var i = 0, len = declarations.length; i < len; i++){\n        declaration = declarations[i];\n        property = declaration.property;\n        value = declaration.value;\n        if (hasIterator) {\n            iterator(property, value, declaration);\n        } else if (value) {\n            output || (output = {});\n            output[property] = value;\n        }\n    }\n    return output;\n}\nmodule.exports = StyleToObject;\nmodule.exports[\"default\"] = StyleToObject; // ESM support\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxRQUFRQyxtQkFBT0EsQ0FBQztBQUVwQjs7Ozs7Ozs7OztDQVVDLEdBQ0QsU0FBU0MsY0FBY0MsS0FBSyxFQUFFQyxRQUFRO0lBQ3BDLElBQUlDLFNBQVM7SUFDYixJQUFJLENBQUNGLFNBQVMsT0FBT0EsVUFBVSxVQUFVO1FBQ3ZDLE9BQU9FO0lBQ1Q7SUFFQSxJQUFJQztJQUNKLElBQUlDLGVBQWVQLE1BQU1HO0lBQ3pCLElBQUlLLGNBQWMsT0FBT0osYUFBYTtJQUN0QyxJQUFJSztJQUNKLElBQUlDO0lBRUosSUFBSyxJQUFJQyxJQUFJLEdBQUdDLE1BQU1MLGFBQWFNLE1BQU0sRUFBRUYsSUFBSUMsS0FBS0QsSUFBSztRQUN2REwsY0FBY0MsWUFBWSxDQUFDSSxFQUFFO1FBQzdCRixXQUFXSCxZQUFZRyxRQUFRO1FBQy9CQyxRQUFRSixZQUFZSSxLQUFLO1FBRXpCLElBQUlGLGFBQWE7WUFDZkosU0FBU0ssVUFBVUMsT0FBT0o7UUFDNUIsT0FBTyxJQUFJSSxPQUFPO1lBQ2hCTCxVQUFXQSxDQUFBQSxTQUFTLENBQUM7WUFDckJBLE1BQU0sQ0FBQ0ksU0FBUyxHQUFHQztRQUNyQjtJQUNGO0lBRUEsT0FBT0w7QUFDVDtBQUVBUyxPQUFPQyxPQUFPLEdBQUdiO0FBQ2pCWSx5QkFBc0IsR0FBR1osZUFBZSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJlY2VkZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLXRvLW9iamVjdC9pbmRleC5qcz9mMWUwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBwYXJzZSA9IHJlcXVpcmUoJ2lubGluZS1zdHlsZS1wYXJzZXInKTtcblxuLyoqXG4gKiBQYXJzZXMgaW5saW5lIHN0eWxlIHRvIG9iamVjdC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7ICdsaW5lLWhlaWdodCc6ICc0MicgfVxuICogU3R5bGVUb09iamVjdCgnbGluZS1oZWlnaHQ6IDQyOycpO1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICBzdHlsZSAgICAgIC0gVGhlIGlubGluZSBzdHlsZS5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgICBbaXRlcmF0b3JdIC0gVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVsbHxPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIFN0eWxlVG9PYmplY3Qoc3R5bGUsIGl0ZXJhdG9yKSB7XG4gIHZhciBvdXRwdXQgPSBudWxsO1xuICBpZiAoIXN0eWxlIHx8IHR5cGVvZiBzdHlsZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgdmFyIGRlY2xhcmF0aW9uO1xuICB2YXIgZGVjbGFyYXRpb25zID0gcGFyc2Uoc3R5bGUpO1xuICB2YXIgaGFzSXRlcmF0b3IgPSB0eXBlb2YgaXRlcmF0b3IgPT09ICdmdW5jdGlvbic7XG4gIHZhciBwcm9wZXJ0eTtcbiAgdmFyIHZhbHVlO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkZWNsYXJhdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBkZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uc1tpXTtcbiAgICBwcm9wZXJ0eSA9IGRlY2xhcmF0aW9uLnByb3BlcnR5O1xuICAgIHZhbHVlID0gZGVjbGFyYXRpb24udmFsdWU7XG5cbiAgICBpZiAoaGFzSXRlcmF0b3IpIHtcbiAgICAgIGl0ZXJhdG9yKHByb3BlcnR5LCB2YWx1ZSwgZGVjbGFyYXRpb24pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgIG91dHB1dCB8fCAob3V0cHV0ID0ge30pO1xuICAgICAgb3V0cHV0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3R5bGVUb09iamVjdDtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBTdHlsZVRvT2JqZWN0OyAvLyBFU00gc3VwcG9ydFxuIl0sIm5hbWVzIjpbInBhcnNlIiwicmVxdWlyZSIsIlN0eWxlVG9PYmplY3QiLCJzdHlsZSIsIml0ZXJhdG9yIiwib3V0cHV0IiwiZGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbnMiLCJoYXNJdGVyYXRvciIsInByb3BlcnR5IiwidmFsdWUiLCJpIiwibGVuIiwibGVuZ3RoIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/style-to-object/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/style-to-object/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/style-to-object/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"(rsc)/./node_modules/style-to-object/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUV2QyxpRUFBZUEsc0NBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVjZWRlbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4Lm1qcz83OGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZVRvT2JqZWN0IGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZVRvT2JqZWN0O1xuIl0sIm5hbWVzIjpbIlN0eWxlVG9PYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/style-to-object/index.mjs\n");

/***/ })

};
;