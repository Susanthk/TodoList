/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/header.js":
/*!***************************!*\
  !*** ./modules/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createHeader(){\n    let header = document.createElement(\"header\")\n    header.classList.add(\"heading\")\n    header.innerText = \"Todo List\" \n    return header \n}\n\nfunction setHeader(){\n    let doc = document.querySelector(\".work\")\n    let header = createHeader()\n    doc.appendChild(header) \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setHeader);\n\n//# sourceURL=webpack://todolist/./modules/header.js?");

/***/ }),

/***/ "./modules/navbar.js":
/*!***************************!*\
  !*** ./modules/navbar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\nfunction createNavBar(){\n\n    let navTaskWindow = document.createElement(\"div\")\n    navTaskWindow.classList.add(\"navTaskWindow\")\n\n    let navDiv = document.createElement(\"div\")\n    navDiv.classList.add(\"navDiv\")\n\n    const elements = [\"Today\", \"Tomorrow\", \"NextWeek\"]\n    let list = document.createElement(\"ul\")\n    \n    elements.forEach((element) => {\n        let li = document.createElement(\"li\")\n        let button = document.createElement(\"button\")\n        button.setAttribute(\"id\", element.toLowerCase())\n        button.innerText = element\n        li.appendChild(button)\n        list.appendChild(li)\n    })\n\n    navDiv.appendChild(list)\n\n    navTaskWindow.appendChild(navDiv)\n    return navTaskWindow\n}\n\n\nfunction setNavBar(){\n\n    let content = document.querySelector(\"#content\")\n    let navBar = createNavBar()\n\n    content.appendChild(navBar)\n    return content\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setNavBar);\n\n//# sourceURL=webpack://todolist/./modules/navbar.js?");

/***/ }),

/***/ "./modules/taskWindows/nextWeekTaskWindow.js":
/*!***************************************************!*\
  !*** ./modules/taskWindows/nextWeekTaskWindow.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createNextWeekTaskWindow(){\n\n    let taskWindow = document.createElement(\"div\")\n    taskWindow.classList.add(\"taskWindow\")\n    taskWindow.setAttribute(\"id\", \"nextWeekWindow\")\n    taskWindow.innerText = \"Next Week\"\n    \n    return taskWindow\n}\n\nfunction removeCurrentWindows(window){\n    let child = document.querySelectorAll(\".taskWindow\")\n    for (let i = 0; i < child.length; i++){\n        console.log(child[i].classList)\n        window.removeChild(child[i])\n    }\n   \n}\n\nfunction setNextWeekTaskWindow(){\n    let window = document.querySelector(\".navTaskWindow\")\n    console.log(\"Next Week\")\n    removeCurrentWindows(window)\n   \n    let taskWindow = createNextWeekTaskWindow()\n\n    window.appendChild(taskWindow)\n    return window\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setNextWeekTaskWindow);\n\n//# sourceURL=webpack://todolist/./modules/taskWindows/nextWeekTaskWindow.js?");

/***/ }),

/***/ "./modules/taskWindows/todayTaskWindow.js":
/*!************************************************!*\
  !*** ./modules/taskWindows/todayTaskWindow.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\nfunction createTodayTaskWindow(){\n\n    let taskWindow = document.createElement(\"div\")\n    taskWindow.classList.add(\"taskWindow\")\n    taskWindow.setAttribute(\"id\", \"todayWindow\")\n    taskWindow.innerText = \"Today\"\n    \n    return taskWindow\n}\n\nfunction removeCurrentWindows(window){\n    let child = document.querySelectorAll(\".taskWindow\")\n    for (let i = 0; i < child.length; i++){\n        console.log(child[i].classList)\n        window.removeChild(child[i])\n    }\n   \n}\n\nfunction setTodayTaskWindow(){\n    let window = document.querySelector(\".navTaskWindow\")\n    console.log(\"today\")\n    removeCurrentWindows(window)\n   \n    let taskWindow = createTodayTaskWindow()\n\n    window.appendChild(taskWindow)\n    return window\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTodayTaskWindow);\n\n//# sourceURL=webpack://todolist/./modules/taskWindows/todayTaskWindow.js?");

/***/ }),

/***/ "./modules/taskWindows/tomorrowTaskWindow.js":
/*!***************************************************!*\
  !*** ./modules/taskWindows/tomorrowTaskWindow.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTomorrowTaskWindow(){\n\n    let taskWindow = document.createElement(\"div\")\n    taskWindow.classList.add(\"taskWindow\")\n    taskWindow.setAttribute(\"id\", \"tomorrowWindow\")\n    taskWindow.innerText = \"Tomorrow\"\n    \n    return taskWindow\n}\n\nfunction removeCurrentWindows(window){\n    let child = document.querySelectorAll(\".taskWindow\")\n    for (let i = 0; i < child.length; i++){\n        console.log(child[i].classList)\n        window.removeChild(child[i])\n    }\n   \n}\n\nfunction setTomorrowTaskWindow(){\n    let window = document.querySelector(\".navTaskWindow\")\n    console.log(\"tomorrow\")\n    removeCurrentWindows(window)\n   \n    let taskWindow = createTomorrowTaskWindow()\n\n    window.appendChild(taskWindow)\n    return window\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTomorrowTaskWindow);\n\n//# sourceURL=webpack://todolist/./modules/taskWindows/tomorrowTaskWindow.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/header.js */ \"./modules/header.js\");\n/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/navbar.js */ \"./modules/navbar.js\");\n/* harmony import */ var _modules_taskWindows_todayTaskWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/taskWindows/todayTaskWindow.js */ \"./modules/taskWindows/todayTaskWindow.js\");\n/* harmony import */ var _modules_taskWindows_tomorrowTaskWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/taskWindows/tomorrowTaskWindow.js */ \"./modules/taskWindows/tomorrowTaskWindow.js\");\n/* harmony import */ var _modules_taskWindows_nextWeekTaskWindow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/taskWindows/nextWeekTaskWindow.js */ \"./modules/taskWindows/nextWeekTaskWindow.js\");\n\n\n\n\n\n\n\nfunction navBar(){\n\n    let todayTask = document.querySelector(\"#today\")\n    todayTask.addEventListener(\"click\", _modules_taskWindows_todayTaskWindow_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\n    let tomorrowTask = document.querySelector(\"#tomorrow\")\n    tomorrowTask.addEventListener(\"click\", _modules_taskWindows_tomorrowTaskWindow_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n\n    let nextWeekTask = document.querySelector(\"#nextweek\")\n    nextWeekTask.addEventListener(\"click\", _modules_taskWindows_nextWeekTaskWindow_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n}\n\n\n(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_navbar_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\nnavBar()\n//setTomorrowTaskWindow()\n;(0,_modules_taskWindows_todayTaskWindow_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;