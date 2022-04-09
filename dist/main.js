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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList.js */ \"./src/modules/todoList.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\n\n\nclass Storage{\n\n\n    static addTask(projectName, task){\n        let todoList = Storage.getProjects()\n        todoList.addTask(projectName, task)\n        Storage.saveProjects(todoList)\n\n    }\n\n    static getProject(projectName){\n        let todoList = Storage.getProjects()\n        //console.log(\"projects\", projects)\n        let currProject = todoList.projects.find(project => (project.name == projectName))\n        return currProject\n    }\n\n    static addProject(projectName){\n        let todoList = Storage.getProjects()\n        todoList.addProject(projectName)\n        \n        Storage.saveProjects(todoList)\n    }\n\n    static deleteProject(projectName){\n        let todoList = Storage.getProjects()\n        todoList.deleteProject(projectName)\n        Storage.saveProjects(todoList)\n    }\n\n    static deleteTask(projectName,taskId){\n        let todoList = Storage.getProjects()\n        todoList.deleteTask(projectName, taskId)\n        Storage.saveProjects(todoList)\n    }\n\n    static saveProjects(todoList){\n        localStorage.setItem('TodoList', JSON.stringify(todoList))\n    }\n\n    static getProjects(){\n        let todoList = new _todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n        let projects = JSON.parse(localStorage.getItem(\"TodoList\"))\n        //console.log(\"everythign\", projects.projects)\n        \n        projects.projects.forEach(project => {\n            //console.log(\"name\", project.name)\n            //console.log(\"tasks\",project.tasks)\n            todoList.fetchProject(project)\n        });\n        //console.log(\"after\",todoList)\n        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new _projects_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), project)))\n        //console.log(\"after 2\", todoList)\n        \n        todoList.getProjects().forEach(project => { project.setTasks(project.getTasks().map(task => Object.assign(new _task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), task)))\n        })\n        \n        //console.log(\"after 3\", todoList)\n        return todoList\n    }\n\n}\n\n//# sourceURL=webpack://todolist/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/UImodule.js":
/*!*********************************!*\
  !*** ./src/modules/UImodule.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ \"./src/modules/todoList.js\");\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage.js */ \"./src/modules/Storage.js\");\n\n\n\n\n\n\nlet content = document.getElementById(\"content\")\nconst todoList = new _todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n//const storage = new Storage();\n\nclass UI {\n\n\n\n    static loadHomepage(){\n        let content = _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects()\n        console.log(content)\n        if (content.length == 0){\n             UI.setUpProjects()\n        }\n        //UI.setUpProjects()\n        UI.createStaticElements()\n        UI.createStandardProjectWindow()\n        \n        \n    }\n\n\n    \n    static setUpProjects(){\n        _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saveProjects(new _todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProject(\"Today\", todoList)\n        _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProject(\"Tomorrow\", todoList)\n        _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProject(\"This Week\", todoList)\n        let content = _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects()  \n    }\n\n\n    static createStaticElements(){\n        content.appendChild(UI.createHeader())\n        content.appendChild(UI.createContentWindow())\n    }\n\n\n    static createContentWindow(){\n        let contentWindow = document.createElement(\"div\")\n        contentWindow.setAttribute(\"id\", \"contentWindow\")\n\n        //projectWindow\n        let projectWindow = UI.createProjectWindow()\n\n        //TaskWindow\n        \n        let taskWindow = UI.createTaskWindow()\n\n        contentWindow.appendChild(projectWindow)\n        contentWindow.appendChild(taskWindow)\n\n        return contentWindow\n    }\n   \n    static addTask(project, userTask){\n        \n        //let taskInput = document.querySelector(\".taskInput\")\n        console.log(\"projectt\", project)\n        //let project = e.target.id\n        if (userTask != \"\"){\n            _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addTask(project, userTask )\n        }\n        \n        \n        UI.displayTasks(project)\n    }\n\n    static displayTasks(project){\n\n        //updating tasks buttons value \n        let taskButton = document.querySelector(\".taskInputButton\")\n        taskButton.value = project\n\n        let content = _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProject(project)\n        let taskDisplay = document.querySelector(\"#taskDisplay\")\n        UI.clearDiv(taskDisplay)\n        let tasks = content.tasks\n        let taskheading = document.querySelector(\"#taskHeading\")\n        taskheading.innerText = `${project}s Tasks`\n        console.log(tasks)\n        if (tasks.length > 0){\n            let taskList = document.createElement(\"ul\")\n            \n            for (let i = 0; i< tasks.length; i++){\n                let task = document.createElement(\"li\")\n                let para = document.createElement(\"p\")\n                para.innerText = tasks[i].details\n\n                let delButton = document.createElement(\"button\")\n                delButton.innerText = \"delete task\"\n                delButton.value = tasks[i].id\n                delButton.setAttribute(\"class\",\"deleteTaskButton\")\n                delButton.addEventListener(\"click\", e => UI.deleteTask(project,e))\n\n                task.appendChild(para)\n                task.appendChild(delButton)\n                taskList.appendChild(task)\n                \n            }\n\n            taskDisplay.appendChild(taskList)\n\n        } else {\n            let message = document.createElement(\"h3\")\n            message.innerText = \"No Tasks Present\"\n            message.setAttribute(\"id\", \"taskDisplayMessage\")\n            taskDisplay.appendChild(message)\n        }\n       \n    }\n\n    static deleteTask(projectName,e){\n        \n        let taskId = e.target.value\n        _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteTask(projectName,taskId)\n        UI.displayTasks(projectName)\n    }\n    static getProject(projectName){\n        _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProject(projectName)\n    }\n\n    static createTaskWindow(){\n        let taskWindow = document.createElement(\"div\")\n        taskWindow.classList.add(\"classWindowElement\")\n        taskWindow.setAttribute(\"id\", \"taskWindow\")\n\n        //task heading\n        let taskHeading = document.createElement(\"h2\")\n        taskHeading.id = \"taskHeading\"\n        taskHeading.innerText = \"Today Tasks\"\n\n        //task input\n        let taskInputDiv = document.createElement(\"div\")\n        let taskInputHeading = document.createElement(\"h3\")\n        taskInputHeading.innerText =\" Add a task!\"\n        let taskInput = document.createElement(\"input\")\n        taskInput.setAttribute(\"class\",\"taskInput\")\n        taskInput.placeholder= \"task\"\n        \n        let taskButton = document.createElement(\"button\")\n        //Should make value the project name\n        taskButton.setAttribute(\"id\", \"taskButton\")\n        taskButton.setAttribute(\"class\", \"taskInputButton\")\n        taskButton.value = \"Today\"\n        taskButton.innerText = \"Add\"\n\n        \n        \n        taskInputDiv.appendChild(taskInputHeading)\n        taskInputDiv.appendChild(taskInput)\n        taskInputDiv.appendChild(taskButton)\n\n        taskButton.addEventListener(\"click\", e => {\n            console.log(\"clicked\")\n            \n            UI.addTask(e.target.value, taskInput.value)\n            taskInput.value = \"\"\n        })\n\n        taskInput.addEventListener(\"keypress\", e => {\n            \n            if (e.code == \"Enter\"){\n                e.preventDefault();\n                taskInputDiv.querySelector(\".taskInputButton\").click();\n            }\n        })\n\n        let taskDisplay = document.createElement(\"div\")\n        taskDisplay.setAttribute(\"id\",\"taskDisplay\" )\n\n\n        taskWindow.appendChild(taskHeading)\n        taskWindow.appendChild(taskInputDiv)\n        taskWindow.appendChild(taskDisplay)\n        return taskWindow\n    }\n    static createProjectWindow(){\n        let projectWindow = document.createElement(\"div\")\n        projectWindow.classList.add(\"classWindowElement\")\n        projectWindow.setAttribute(\"id\", \"projectWindow\")\n\n        let standardProjectHeader = document.createElement(\"h2\")\n        standardProjectHeader.setAttribute(\"id\", \"standardPHeader\")\n        standardProjectHeader.innerText = \"Welcome!\"\n\n        let standardProjects = document.createElement(\"div\")\n        standardProjects.setAttribute(\"id\", \"standardP\")\n\n        let userProjectHeader = document.createElement(\"h2\")\n        userProjectHeader.setAttribute(\"id\", \"userPHeader\")\n        userProjectHeader.innerText = \"Projects\"\n\n        //UserprojectInputDiv\n        let userProjectInputDiv = document.createElement(\"div\")\n        userProjectInputDiv.setAttribute(\"id\", \"userProjectInputDiv\")\n        \n        let userProjectInput = document.createElement(\"input\")\n        userProjectInput.placeholder = \"Add Project!\"\n        userProjectInput.setAttribute(\"id\",\"userProjectInput\")\n\n        let userProjectInputButton = document.createElement(\"button\")\n        userProjectInputButton.innerText = \"Add Project\"\n        userProjectInputButton.setAttribute(\"id\", \"userProjectInputButton\")\n        userProjectInputButton.addEventListener(\"click\", e => {\n            userProjectInputButton.value = userProjectInput.value\n            let taskInput = document.querySelector(\".taskInput\")\n            taskInput.value = \"\"\n            UI.addProject(userProjectInput.value)\n            UI.displayTasks(e.target.value)\n            userProjectInput.value = \"\"\n        })\n\n        userProjectInput.addEventListener(\"keypress\", e => {\n            \n            if (e.code == \"Enter\"){\n                e.preventDefault();\n                userProjectInputDiv.querySelector(\"#userProjectInputButton\").click();\n            }\n        })\n\n\n        userProjectInputDiv.appendChild(userProjectInput)\n        userProjectInputDiv.appendChild(userProjectInputButton)\n\n        let userProjects = document.createElement(\"div\")\n        userProjects.setAttribute(\"id\", \"userP\")\n\n\n        projectWindow.appendChild(standardProjectHeader)\n        projectWindow.appendChild(standardProjects)\n        projectWindow.appendChild(userProjectHeader)\n        projectWindow.appendChild(userProjectInputDiv)\n        projectWindow.appendChild(userProjects)\n        \n        \n        return projectWindow\n    }\n\n    static addProject(project){\n        if (project != \"\"){\n            _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProject(project) \n            UI.createUserProjectWindow()\n        } else {\n            alert(\"Please give valid name\")\n        }\n        \n        \n    }\n\n    static createUserProjectWindow(){\n        \n        let userProjects = document.getElementById(\"userP\")\n\n        UI.clearDiv(userProjects)\n        let projects = _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects().projects\n        if (projects.length > 3){\n            let projectsList = document.createElement(\"ul\")\n            for (let i = 3; i < projects.length; i++){\n                let project = document.createElement(\"li\")\n                let button = document.createElement(\"button\")\n                button.innerText = projects[i].name\n                button.id = projects[i].name\n                button.value = projects[i].name\n                button.addEventListener(\"click\", e => {\n                    UI.displayTasks(e.target.value)})\n                project.appendChild(button)\n\n\n                let delButton = document.createElement(\"button\")\n                delButton.innerText = \"delete Project\"\n                delButton.id = projects[i].name\n                delButton.value = projects[i].name\n                delButton.addEventListener(\"click\", e => UI.deleteProject(e.target.value))\n                project.appendChild(delButton)\n\n                projectsList.appendChild(project)\n            }\n            userProjects.appendChild(projectsList)\n        } \n    }\n    static deleteProject(project){\n        let taskDisplay = document.querySelector(\"#taskDisplay\")\n        _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteProject(project)\n        UI.createUserProjectWindow()\n    }\n    static createStandardProjectWindow(){\n\n        let standardProjects = document.getElementById(\"standardP\")\n        UI.clearDiv(standardProjects)\n\n        let projects = _Storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects().projects\n        console.log(projects)\n        if (projects.length > 0 ){\n            \n            let projectsList = document.createElement(\"ul\")\n            for (let i = 0; i < projects.length; i++){\n                let project = document.createElement(\"li\")\n                let button = document.createElement(\"button\")\n                button.innerText = projects[i].name\n                button.id = projects[i].name\n                button.value = projects[i].name\n                button.addEventListener(\"click\", e => {\n                    let taskInput = document.querySelector(\".taskInput\")\n                    taskInput.value = \"\"\n                    UI.displayTasks(e.target.value)\n                \n                 })\n                project.appendChild(button)\n                projectsList.appendChild(project)\n            }\n            standardProjects.appendChild(projectsList)\n            \n        } else{\n            let stdHeading = document.createElement(\"h3\")\n            stdHeading.innerText = \"No projects\"\n            standardProjects.appendChild(stdHeading)\n        }\n    }\n    static createHeader(){\n        \n        let header = document.createElement(\"h1\")\n        header.innerText = \"Todo List\"\n        header.setAttribute(\"id\", \"header\")\n        return header\n    }\n\n     static clearDiv(main){\n        while(main.firstChild){\n            main.removeChild(main.firstChild)\n        }\n    }\n\n\n}\n\n//# sourceURL=webpack://todolist/./src/modules/UImodule.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    constructor(id = null, details = \"unknown\" ){\n        this.id = id\n        this.details = details\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todoList.js":
/*!*********************************!*\
  !*** ./src/modules/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ \"./src/modules/Storage.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\n\n\n\nclass TodoList{\n\n    constructor(){\n        this.projects = []\n    }\n\n    addProject(projectName){\n        let project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName)\n        //console.log(\"projects\", project)\n        this.projects.push(project)\n        //console.log(\"projects\", project)\n    }\n\n    fetchProject(projectInfo){\n        let project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectInfo.name)\n        project.setTasks(projectInfo.tasks)\n        this.projects.push(project)\n    }\n\n\n    addTask(projectName, task){\n        let project = this.getProject(projectName)\n        console.log(\"projectname\", projectName)\n        console.log(\"adding to \", project)\n        let taskLength = project.tasks.length\n        project.addTask(new _task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](taskLength,task))\n        //console.log(\"PROJECT\",project)\n        //Project.addTask(new Task(task))\n    }\n\n    setProjects(projects){\n        this.projects = projects\n    }\n\n    getProjects(){\n        return this.projects\n    }\n\n    getProject(name){\n        \n        let curr = this.projects.find((project) => (project.name == name))\n        return curr\n    }\n\n    findProjectIndex(projectName){\n        let index = 0\n        for (let i = 0; i < this.projects.length; i++)\n        {\n            if (this.projects[i].name == projectName){\n                return index\n            }\n            index++\n        }\n        return -1; \n    }\n\n    findTaskIndex(projectIndex, taskId){\n        let index = 0\n        let tasks = this.projects[projectIndex].tasks\n        for(let i = 0; i < tasks.length; i++){\n            \n            if (tasks[i].id == taskId){\n                return index\n            }\n            index++\n        }\n        return -1\n    }\n    deleteProject(projectName){\n        let deleteIndex = this.findProjectIndex(projectName)\n        this.projects.splice(deleteIndex,1)\n    }\n\n    deleteTask(projectName, taskId){\n        let projectIndex = this.findProjectIndex(projectName)\n        let taskIndex = this.findTaskIndex(projectIndex, taskId)\n        this.projects[projectIndex].tasks.splice(taskIndex,1)\n        //console.log(this.projects[projectIndex].tasks[taskId])\n    }\n\n\n}\n\n//# sourceURL=webpack://todolist/./src/modules/todoList.js?");

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