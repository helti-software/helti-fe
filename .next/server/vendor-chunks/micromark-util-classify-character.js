"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-classify-character";
exports.ids = ["vendor-chunks/micromark-util-classify-character"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-util-classify-character/dev/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-util-classify-character/dev/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   classifyCharacter: () => (/* binding */ classifyCharacter)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(rsc)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol/constants.js */ \"(rsc)/./node_modules/micromark-util-symbol/constants.js\");\n/**\n * @typedef {import('micromark-util-types').Code} Code\n */ \n\n\n/**\n * Classify whether a code represents whitespace, punctuation, or something\n * else.\n *\n * Used for attention (emphasis, strong), whose sequences can open or close\n * based on the class of surrounding characters.\n *\n * > 👉 **Note**: eof (`null`) is seen as whitespace.\n *\n * @param {Code} code\n *   Code.\n * @returns {typeof constants.characterGroupWhitespace | typeof constants.characterGroupPunctuation | undefined}\n *   Group.\n */ function classifyCharacter(code) {\n    if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.eof || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEndingOrSpace)(code) || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.unicodeWhitespace)(code)) {\n        return micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_2__.constants.characterGroupWhitespace;\n    }\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.unicodePunctuation)(code)) {\n        return micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_2__.constants.characterGroupPunctuation;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2xhc3NpZnktY2hhcmFjdGVyL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0NBRUMsR0FNZ0M7QUFDbUI7QUFDUTtBQUU1RDs7Ozs7Ozs7Ozs7OztDQWFDLEdBQ00sU0FBU0ssa0JBQWtCQyxJQUFJO0lBQ3BDLElBQ0VBLFNBQVNILGlFQUFLQSxDQUFDSSxHQUFHLElBQ2xCUCxtRkFBeUJBLENBQUNNLFNBQzFCSiwyRUFBaUJBLENBQUNJLE9BQ2xCO1FBQ0EsT0FBT0YseUVBQVNBLENBQUNJLHdCQUF3QjtJQUMzQztJQUVBLElBQUlQLDRFQUFrQkEsQ0FBQ0ssT0FBTztRQUM1QixPQUFPRix5RUFBU0EsQ0FBQ0sseUJBQXlCO0lBQzVDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmVjZWRlbnQvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2xhc3NpZnktY2hhcmFjdGVyL2Rldi9pbmRleC5qcz84OTE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Db2RlfSBDb2RlXG4gKi9cblxuaW1wb3J0IHtcbiAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSxcbiAgdW5pY29kZVB1bmN0dWF0aW9uLFxuICB1bmljb2RlV2hpdGVzcGFjZVxufSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5pbXBvcnQge2NvZGVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wvY29kZXMuanMnXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL2NvbnN0YW50cy5qcydcblxuLyoqXG4gKiBDbGFzc2lmeSB3aGV0aGVyIGEgY29kZSByZXByZXNlbnRzIHdoaXRlc3BhY2UsIHB1bmN0dWF0aW9uLCBvciBzb21ldGhpbmdcbiAqIGVsc2UuXG4gKlxuICogVXNlZCBmb3IgYXR0ZW50aW9uIChlbXBoYXNpcywgc3Ryb25nKSwgd2hvc2Ugc2VxdWVuY2VzIGNhbiBvcGVuIG9yIGNsb3NlXG4gKiBiYXNlZCBvbiB0aGUgY2xhc3Mgb2Ygc3Vycm91bmRpbmcgY2hhcmFjdGVycy5cbiAqXG4gKiA+IPCfkYkgKipOb3RlKio6IGVvZiAoYG51bGxgKSBpcyBzZWVuIGFzIHdoaXRlc3BhY2UuXG4gKlxuICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7dHlwZW9mIGNvbnN0YW50cy5jaGFyYWN0ZXJHcm91cFdoaXRlc3BhY2UgfCB0eXBlb2YgY29uc3RhbnRzLmNoYXJhY3Rlckdyb3VwUHVuY3R1YXRpb24gfCB1bmRlZmluZWR9XG4gKiAgIEdyb3VwLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlDaGFyYWN0ZXIoY29kZSkge1xuICBpZiAoXG4gICAgY29kZSA9PT0gY29kZXMuZW9mIHx8XG4gICAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSB8fFxuICAgIHVuaWNvZGVXaGl0ZXNwYWNlKGNvZGUpXG4gICkge1xuICAgIHJldHVybiBjb25zdGFudHMuY2hhcmFjdGVyR3JvdXBXaGl0ZXNwYWNlXG4gIH1cblxuICBpZiAodW5pY29kZVB1bmN0dWF0aW9uKGNvZGUpKSB7XG4gICAgcmV0dXJuIGNvbnN0YW50cy5jaGFyYWN0ZXJHcm91cFB1bmN0dWF0aW9uXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlIiwidW5pY29kZVB1bmN0dWF0aW9uIiwidW5pY29kZVdoaXRlc3BhY2UiLCJjb2RlcyIsImNvbnN0YW50cyIsImNsYXNzaWZ5Q2hhcmFjdGVyIiwiY29kZSIsImVvZiIsImNoYXJhY3Rlckdyb3VwV2hpdGVzcGFjZSIsImNoYXJhY3Rlckdyb3VwUHVuY3R1YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-util-classify-character/dev/index.js\n");

/***/ })

};
;