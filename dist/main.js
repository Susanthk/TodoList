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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UImodule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UImodule.js */ \"./src/modules/UImodule.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_UImodule_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomepage)\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage{\n\n\n    static saveProjects(data){\n        localStorage.setItem('TodoList', JSON.stringify(data))\n    }\n\n    static getProjects(){\n        return JSON.parse(localStorage.getItem('TodoList'))\n    }\n\n}\n\n//# sourceURL=webpack://todolist/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/UImodule.js":
/*!*********************************!*\
  !*** ./src/modules/UImodule.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ \"./src/modules/todoList.js\");\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage.js */ \"./src/modules/Storage.js\");\n\n\n\n\n\nlet content = document.getElementById(\"content\")\nconst todoList = new _todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nclass UI {\n\n    static loadHomepage(){\n        UI.createHeader()\n        UI.setUpProjects()\n        UI.presentProjects()\n    }\n\n    static createProjectList(project){\n        let projectList = document.createElement(\"li\")\n        let projectButton = document.createElement(\"button\")\n        projectButton.innerText = project.name\n        projectButton.classList.add(\"projectButton\")\n        projectList.appendChild(projectButton)\n        return projectList\n    }\n\n    static presentProjects(){\n        \n        let projects = _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects()\n       \n        var navBar = document.createElement(\"div\")\n        navBar.setAttribute(\"id\", \"navBar\")\n        var projectList = document.createElement(\"ul\")\n        projectList.setAttribute(\"id\", \"projectList\")\n        projects.forEach(element => {\n            projectList.appendChild(UI.createProjectList(element))\n        });\n\n        content.appendChild(projectList)\n    }\n\n    static setUpProjects(){\n\n        let todayProject = new _projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Today\")\n        let tomorrowProject = new _projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Tomorrow\")\n        let weekProject = new _projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"This Week\")\n     \n        todoList.addProject(todayProject)\n        todoList.addProject(tomorrowProject)\n        todoList.addProject(weekProject)\n      \n        todoList.saveProjects()\n    }\n\n\n    static createHeader(){\n        \n        let header = document.createElement(\"h1\")\n        header.innerText = \"Todo List\"\n        header.setAttribute(\"id\", \"header\")\n        content.appendChild(header)\n    }\n\n\n}\n\n//# sourceURL=webpack://todolist/./src/modules/UImodule.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project{\n    constructor(name){\n        this.name = name;\n        this.tasks = []\n    }\n\n    addtask(task){\n        this.tasks.push(task)\n    }\n\n    \n}\n\n//# sourceURL=webpack://todolist/./src/modules/projects.js?");

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ \"./src/modules/Storage.js\");\n\n\nclass TodoList{\n\n    constructor(){\n        this.projects = []\n    }\n\n    addProject(project){\n        this.projects.push(project)\n    }\n\n    saveProjects(){\n        _Storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProjects(this.projects)\n    }\n\n\n\n}\n\n//# sourceURL=webpack://todolist/./src/modules/todoList.js?");

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