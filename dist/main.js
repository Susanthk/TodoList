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

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project{\n    constructor (name){\n        this.name = name\n        this.tasks = []\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    constructor(name, dueDate = \"\"){\n        this.name = name\n        this.dueDate = dueDate\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/UImodule.js":
/*!*********************************!*\
  !*** ./src/modules/UImodule.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoList */ \"./src/modules/todoList.js\");\n//import setHeader from \"./header.js\";\n//import setNavBar from \"../modules/navbar.js\"\n//import setTodayTaskWindow from \"../modules/modules/todayTaskWindow.js\"\n\n\n\n\n\nclass UI {\n\n    static loadHomepage(){\n       //UI.setProjects()\n       UI.setHeader()\n       UI.saveTodoList()\n       UI.displayProjects()\n    }\n\n\n    static setHeader(){\n        let header = document.createElement(\"header\")\n        let doc = document.querySelector(\".work\")\n        header.classList.add(\"heading\")\n        header.innerText = \"Todo List\" \n        doc.appendChild(header) \n    }\n\n    static displayProjects(){\n        let todolist = _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList()\n        console.log(todolist)\n    }\n\n    static saveTodoList(){\n        let todolist = new _todoList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]()\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodoList(todolist)\n    }\n\n    \n}\n\n//# sourceURL=webpack://todolist/./src/modules/UImodule.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project{\n    constructor (name){\n        this.name = name\n        this.tasks = []\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ \"./src/modules/todoList.js\");\n\n\n\n\nclass Storage{\n    \n    static saveTodoList(data){\n        console.log(data)\n        localStorage.setItem('todoList', JSON.stringify(data))\n        console.log(localStorage)\n    }\n\n    static getTodoList() {\n        //console.log(localStorage.getItem('todoList'))\n        const todoList = Object.assign(\n        new _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n        JSON.parse(localStorage.getItem('todoList'))\n        )\n        console.log(todoList)\n        todoList.setProjects(\n        todoList\n            .getProjects()\n            .map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), project))\n        )\n/*\n        todoList\n        .getProjects()\n        .forEach((project) =>\n            project.setTasks(\n            project.getTasks().map((task) => Object.assign(new Task(), task))\n            )\n        )\n    */\n\n    return todoList\n  }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    constructor(name, dueDate = \"\"){\n        this.name = name\n        this.dueDate = dueDate\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\nclass TodoList{\n    constructor(){\n        this.projects = []\n        this.projects.push(\"Today\")\n        this.projects.push(\"Tomorrow\")\n        this.projects.push(\"This Week\")\n    }\n\n    setProjects(projects){\n        this.projects = projects\n    }\n    \n    getProjects(){\n        return this.project\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/todoList.js?");

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