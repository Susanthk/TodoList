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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ \"./src/modules/todoList.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\n\n\nclass Storage{\n\n\n    static addTask(projectName, task){\n        let todoList = Storage.getProjects()\n        todoList.addTask(projectName, task)\n        Storage.saveProjects(todoList)\n\n    }\n\n    static getProject(projectName){\n        let projects = Storage.getProjects()\n        let currProject = projects.find(project => (project.name == projectName))\n        return currProject\n    }\n\n    static addProject(projectName, todoList){\n        todoList.addProject(projectName)\n        Storage.saveProjects(todoList)\n    }\n\n    static deleteProject(projectName, todoList){\n        todoList.deleteProject(projectName)\n        \n        Storage.saveProjects(todoList)\n    }\n\n    static saveProjects(todoList){\n        localStorage.setItem('TodoList', JSON.stringify(todoList))\n    }\n\n    static getProjects(){\n        let todoList = new _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n        let projects = JSON.parse(localStorage.getItem(\"TodoList\"))\n        console.log(\"everythign\", projects.projects)\n        projects.projects.forEach(project => {\n            //console.log(\"name\", project.name)\n            //console.log(\"tasks\",project.tasks)\n            todoList.fetchProject(project)\n        });\n        console.log(\"after\",todoList)\n        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new _projects_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), project)))\n        console.log(\"after 2\", todoList)\n        \n        todoList.getProjects().forEach(project => { project.setTasks(project.getTasks().map(task => Object.assign(new _task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), task)))\n        })\n        \n        console.log(\"after 3\", todoList)\n        return todoList\n    }\n\n}\n\n//# sourceURL=webpack://todolist/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/UImodule.js":
/*!*********************************!*\
  !*** ./src/modules/UImodule.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ \"./src/modules/todoList.js\");\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage.js */ \"./src/modules/Storage.js\");\n\n\n\n\n\n\nlet content = document.getElementById(\"content\")\nconst todoList = new _todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n//const storage = new Storage();\n\nclass UI {\n\n    static loadHomepage(){\n        UI.createHeader()\n        UI.setUpProjects()\n        //UI.presentProjects()\n        //UI.setUpTaskWindow()\n        \n    }\n\n    static setUpTaskWindow(){\n        let taskWindow = document.createElement(\"div\")\n        taskWindow.setAttribute(\"id\", \"taskWindow\")\n        \n        content.appendChild(taskWindow)\n    }\n    \n    static clearDiv(main){\n        while(main.firstChild){\n            main.removeChild(main.firstChild)\n        }\n    }\n\n    static addTasks(task, currProject){\n       // console.log(task)\n        //console.log(currProject)\n\n        currProject.addTask(task)\n        currProject.save()\n        UI.displayTasks(currProject.name)\n        \n        \n    }\n    static presentTask(projectName){\n\n        let todolist = _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects()\n        \n        //(todoList)\n        //let currProject = todolist.projects.filter(project => (project.name == projectName))\n        let currProject = todolist.getProject(projectName)\n       \n\n        let taskWindow = document.querySelector(\"#taskWindow\")\n        UI.clearDiv(taskWindow)\n\n        //Project Title\n        let projectTitle = document.createElement(\"h2\")\n        projectTitle.setAttribute(\"id\", \"projectTitle\")\n        projectTitle.textContent = projectName + \" Tasks\"\n\n        let taskInput = document.createElement(\"input\")\n        taskInput.setAttribute(\"id\", \"taskInput\")\n        taskInput.placeholder = \"task\"\n        \n        \n        //addTaskButton\n        let addTaskButton = document.createElement(\"button\")\n        addTaskButton.innerText = \"Add Task!\"\n        addTaskButton.addEventListener(\"click\", () => UI.addTasks(taskInput.value, currProject))\n\n        \n        taskWindow.appendChild(projectTitle)\n        taskWindow.appendChild(taskInput)\n        taskWindow.appendChild(addTaskButton)\n       \n        \n    }\n\n    static displayTasks(projectName){\n        let todolist = _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects()\n        let currProject = todolist.getProject(projectName)\n        //console.log(\"PROJECT AND TASKS\", currProject)\n    }\n    static createProjectList(project){\n        let projectList = document.createElement(\"li\")\n        let projectButton = document.createElement(\"button\")\n        projectList.classList.add(\"project\")\n        projectButton.innerText = project.name\n        projectButton.value = project.name\n        projectButton.classList.add(\"projectButton\")\n        projectList.appendChild(projectButton)\n\n        projectButton.addEventListener(\"click\", (e) => UI.presentTask(e.target.value))\n        return projectList\n    }\n\n    static presentProjects(){\n        \n        let todolist = _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects()\n        //console.log(todolist.projects)\n        let navBar = document.createElement(\"div\")\n        navBar.setAttribute(\"id\", \"navBar\")\n        let projectList = document.createElement(\"ul\")\n        projectList.setAttribute(\"id\", \"projectList\")\n        todolist.projects.forEach(element => {\n            projectList.appendChild(UI.createProjectList(element))\n        });\n\n        navBar.appendChild(projectList)\n        content.appendChild(navBar)\n    }\n\n    static setUpProjects(){\n        //console.log(storage)\n        _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProject(\"Today\", todoList)\n        _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProject(\"Tomorrow\", todoList)\n        let content = _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects()\n        console.log(\"content\",content)\n        _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addTask(\"Today\", \"Study\")\n        _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addTask(\"Tomorrow\", \"Eat\")\n        //Storage.deleteProject(\"Tomorrow\", todoList)\n         //Storage.addTask(\"Today\", \"Study\")\n        //Storage.addProject(\"Tomorrow\", todoList)\n        content = _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects()\n        console.log(\"content\", content)\n        //let todayProject = new Project(\"Today\")\n        //let tomorrowProject = new Project(\"Tomorrow\")\n        //let weekProject = new Project(\"This Week\")\n     \n        //todoList.addProject(todayProject)\n        //todoList.addProject(tomorrowProject)\n        //todoList.addProject(weekProject)\n        //(\"befoore storage\" , todoList)\n        //todoList.saveProjects()\n    }\n\n\n    static createHeader(){\n        \n        let header = document.createElement(\"h1\")\n        header.innerText = \"Todo List\"\n        header.setAttribute(\"id\", \"header\")\n        content.appendChild(header)\n    }\n\n\n}\n\n//# sourceURL=webpack://todolist/./src/modules/UImodule.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project{\n    constructor(name){\n        this.name = name;\n        this.tasks = []\n    }\n\n   \n    addTask(task){\n        this.tasks.push(task)\n    }\n\n    setTasks(task){\n        this.tasks = task;\n    }\n\n    \n    getTasks(){\n        return this.tasks\n    }\n\n    getName(){\n        return this.name\n    }\n\n    \n}\n\n//# sourceURL=webpack://todolist/./src/modules/projects.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    constructor(details = \"unknown\" ){\n        this.details = details\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ \"./src/modules/Storage.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\n\n\n\nclass TodoList{\n\n    constructor(){\n        this.projects = []\n    }\n\n    addProject(projectName){\n        let project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName)\n        //console.log(\"projects\", project)\n        this.projects.push(project)\n        //console.log(\"projects\", project)\n    }\n\n    fetchProject(projectInfo){\n        let project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectInfo.name)\n        project.setTasks(projectInfo.tasks)\n        this.projects.push(project)\n    }\n\n\n    addTask(projectName, task){\n        let project = this.getProject(projectName)\n        project.addTask(task)\n        //console.log(\"PROJECT\",project)\n        //Project.addTask(new Task(task))\n    }\n\n    setProjects(projects){\n        this.projects = projects\n    }\n\n    getProjects(){\n        return this.projects\n    }\n\n    getProject(name){\n        \n        let curr = this.projects.find((project) => (project.name == name))\n        return curr\n    }\n\n    deleteProject(projectName){\n        //let projects = Project.getProjects()\n        //console.log(projects)\n        let projects = this.projects.find(project => project.name == projectName)\n        console.log(\"Delete\",projects)\n        //console.log(\"after Deleting\", projects)\n        //this.setProjects(this.projects.filter(project => project.name != projectName))\n    }\n\n\n\n}\n\n//# sourceURL=webpack://todolist/./src/modules/todoList.js?");

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