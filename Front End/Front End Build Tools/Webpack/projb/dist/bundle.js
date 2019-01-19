/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1.js */ \"./js/module1.js\");\n/* harmony import */ var _module2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module2.js */ \"./js/module2.js\");\n\n\n\nvar demo = document.getElementById(\"demo\");\n\ndemo.innerHTML = \"THIS IS MAIN IT! AGAIN! AND AGAIN!\";\ndemo.innerHTML += \"<br>\"+_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\ndemo.innerHTML += \"<br>\"+_module2_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\ndemo.innerHTML += \"<br>\"+string3;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/NzQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RyaW5nIGZyb20gXCIuL21vZHVsZTEuanNcIjtcbmltcG9ydCBzdHJpbmcyIGZyb20gXCIuL21vZHVsZTIuanNcIjtcblxudmFyIGRlbW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIik7XG5cbmRlbW8uaW5uZXJIVE1MID0gXCJUSElTIElTIE1BSU4gSVQhIEFHQUlOISBBTkQgQUdBSU4hXCI7XG5kZW1vLmlubmVySFRNTCArPSBcIjxicj5cIitzdHJpbmc7XG5kZW1vLmlubmVySFRNTCArPSBcIjxicj5cIitzdHJpbmcyO1xuZGVtby5pbm5lckhUTUwgKz0gXCI8YnI+XCIrc3RyaW5nMztcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ }),

/***/ "./js/module1.js":
/*!***********************!*\
  !*** ./js/module1.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar string = \"NO! THIS IS MAIN\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (string);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tb2R1bGUxLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbW9kdWxlMS5qcz83ZGQxIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzdHJpbmcgPSBcIk5PISBUSElTIElTIE1BSU5cIjtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5nOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/module1.js\n");

/***/ }),

/***/ "./js/module2.js":
/*!***********************!*\
  !*** ./js/module2.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar string2 = \"NOOOO! THIS IS PATRICK!\";\nvar string3 = \"SHUT UP!\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (string2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tb2R1bGUyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbW9kdWxlMi5qcz9iZGE0Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBzdHJpbmcyID0gXCJOT09PTyEgVEhJUyBJUyBQQVRSSUNLIVwiO1xudmFyIHN0cmluZzMgPSBcIlNIVVQgVVAhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZzI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/module2.js\n");

/***/ })

/******/ });