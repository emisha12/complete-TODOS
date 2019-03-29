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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ToDoActionBarView.js":
/*!******************************!*\
  !*** ./ToDoActionBarView.js ***!
  \******************************/
/*! exports provided: ToDoActionBarView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoActionBarView\", function() { return ToDoActionBarView; });\n/* harmony import */ var _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoManagerBroker */ \"./ToDoManagerBroker.js\");\n\nfunction ToDoActionBarView() {}\n    \nToDoActionBarView.prototype.init = function(){\n    document.getElementById(\"add-todo\").addEventListener('click', getToDoText);\n    document.getElementById(\"delete-selected-btn\").addEventListener('click', deleteSelected);\n    document.getElementById(\"delete-completed-btn\").addEventListener('click', deleteCompleted);\n}\nconst toDoInput = document.getElementById(\"input-todo\");\n\nconst  getToDoText = function() {         \n    var toDoText = toDoInput.value;\n    var addNewItem;\n    if(!toDoText) {\n        alert(\"enter some content\");\n    }else {  \n        addNewItem = new CustomEvent('addItem', {detail: toDoText});\n        _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_0__[\"toDoManagerBroker\"].dispatchEvent(addNewItem);\n        //clearing the text box\n        toDoInput.value = \"\";   \n    }\n}\n\nconst deleteCompleted = function()  {\n    var deleteCompletedItem = new Event('deleteCompletedItem');\n    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_0__[\"toDoManagerBroker\"].dispatchEvent(deleteCompletedItem);\n}\n\nconst deleteSelected = function()  {  \n    var deleteSelectedItem = new Event('deleteSelectedItem');\n    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_0__[\"toDoManagerBroker\"].dispatchEvent(deleteSelectedItem);\n}\n\n\n\n//# sourceURL=webpack:///./ToDoActionBarView.js?");

/***/ }),

/***/ "./ToDoListView.js":
/*!*************************!*\
  !*** ./ToDoListView.js ***!
  \*************************/
/*! exports provided: ToDoListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoListView\", function() { return ToDoListView; });\n/* harmony import */ var _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoManagerBroker */ \"./ToDoManagerBroker.js\");\n/* harmony import */ var _ToDoTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoTemplate */ \"./ToDoTemplate.js\");\n\n\n\nfunction ToDoListView(){}\n\nconst toDoContainer = document.getElementById(\"todo-list-wrapper\");\n\nToDoListView.prototype.createTemplate = function(todoItem){\n    var todoItemElement = document.createElement(\"div\");\n    todoItemElement.setAttribute(\"data-name\", \"todo-item-wrapper\")\n    todoItemElement.innerHTML = Mustache.to_html(_ToDoTemplate__WEBPACK_IMPORTED_MODULE_1__[\"todoTemplate\"], todoItem);\n    return todoItemElement;\n}\n\nToDoListView.prototype.addNewTemplate = function(newTodoElement){\n    newTodoElement.addEventListener('click',  onTodoItemClick.bind(this)); \n    toDoContainer.appendChild(newTodoElement);\n}\n\nconst onTodoItemClick = function (event) {\n        var todoItemContainer = event.currentTarget;\n        var todoId = event.currentTarget.querySelector(\".todo-item\").getAttribute(\"todoid\");\n        var selectItem, markCompleted, deleteItem, updateStatus;\n        switch (event.target.getAttribute('todo-action')) {\n            case 'select-item':\n                    selectItem = new CustomEvent(\"selectItem\" ,{detail: todoId});\n                    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_0__[\"toDoManagerBroker\"].dispatchEvent(selectItem);\n                    break;\n            case 'mark-done':\n                    markCompleted = new CustomEvent(\"markCompleted\",{detail: {id:todoId, todoContainer:todoItemContainer}});\n                    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_0__[\"toDoManagerBroker\"].dispatchEvent(markCompleted);\n                    break;\n            case 'delete-item':\n                    todoItemContainer.remove();\n                    deleteItem = new CustomEvent(\"deleteItem\" ,{detail: todoId});\n                    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_0__[\"toDoManagerBroker\"].dispatchEvent(deleteItem);\n                    break;\n            case 'update-item':\n                    updateStatus = new CustomEvent(\"updateStatus\" ,{detail: {id:todoId, todoContainer:todoItemContainer}});\n                    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_0__[\"toDoManagerBroker\"].dispatchEvent(updateStatus);\n\n                    var todoTextElement = todoItemContainer.querySelector('.todo-text');\n                    \n                    todoTextElement.onkeypress = function (event) {\n                        if (event.keyCode === 13) {\n                            console.log(\"keypress\");\n                            updateContent(todoId, todoTextElement.innerHTML, todoItemContainer);\n                        }\n                    }\n                    break;\n        }\n    }\n\nToDoListView.prototype.render = function(todoItem, todoItemContainer){\n    todoItemContainer.innerHTML = Mustache.to_html(_ToDoTemplate__WEBPACK_IMPORTED_MODULE_1__[\"todoTemplate\"], todoItem);\n}\n\nToDoListView.prototype.removeElement = function(todoId){\n    var element,todoElement;\n    for(var id of todoId){\n        element = document.querySelector(`[todoid = '${id}']`);\n        todoElement = element.closest(`[data-name = 'todo-item-wrapper']`);\n        todoElement.remove();\n    }\n}\n\nconst updateContent = function(todoId, todoText, toDoContainer){\n    console.log(toDoContainer);\n    var updateItem = new CustomEvent(\"updateItem\" ,{detail: {id:todoId, todoText: todoText, todoContainer:toDoContainer}});\n    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_0__[\"toDoManagerBroker\"].dispatchEvent(updateItem);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// var ToDoItem = function (todoText) {\n//     this.todoId = new Date().getTime();\n//     this.todoText = todoText;\n//     this.todoStatus = false;\n//     this.todoChecked = false;\n// }\n\n// ToDoItem.prototype.createItem = function () {\n//     var newElement = document.createElement(\"div\");\n//     this.render(newElement);\n//     return newElement;\n// }\n\n// ToDoItem.prototype.init = function (newElement) {\n//     newElement.addEventListener('click',  onTodoItemClick.bind(this));  \n// }\n\n// const onTodoItemClick = function (event) {\n//     var todoTextElement = event.currentTarget.querySelector('.todo-text');\n\n//     switch (event.target.getAttribute('todo-action')) {\n//         case 'select-item':\n//                 this.todoChecked = !this.todoChecked;\n//                 dispatchUpdateEvent.call(this);\n//                 break;\n//         case 'mark-done':\n//                 this.todoStatus = !this.todoStatus;\n//                 dispatchUpdateEvent.call(this);\n//                 this.render(event.currentTarget);\n//                 break;\n//         case 'delete-item':\n//                 event.currentTarget.remove();\n//                 var deleteItem = new CustomEvent(\"deleteItem\" ,{detail: this.todoId});\n//                 toDoManagerBroker.dispatchEvent(deleteItem);\n//                 break;\n//         case 'update-item':\n//                 updateToDoItem.call(this, todoTextElement);\n//                 break;\n//     }\n// }\n// const dispatchUpdateEvent = function() {\n//     var notifyChanges = new CustomEvent('notifyChanges', {detail: {\n//         id :this.todoId,\n//         text :this.todoText,\n//         completeStatus : this.todoStatus,\n//         checkedStatus : this.todoChecked\n//     }});\n//     toDoManagerBroker.dispatchEvent(notifyChanges);\n// }\n\n// const updateToDoItem = function(todoTextElement){\n//     todoTextElement.setAttribute(\"contenteditable\", \"true\");\n//     todoTextElement.classList.add(\"edit-todo-text\");\n//     var that = this;\n//     todoTextElement.onkeypress = function (event) {\n//         if (event.keyCode === 13) {\n//             updateContent.call(that);\n//         }\n//     }\n\n//     todoTextElement.onblur = function () {\n//         updateContent.call(that);\n//     }\n\n//     function updateContent() {\n//         todoTextElement.classList.remove(\"edit-todo-text\");\n//         todoTextElement.removeAttribute(\"contenteditable\");\n//         this.todoText = todoTextElement.textContent;\n//         dispatchUpdateEvent.call(this);\n//     }\n// }\n\n// // ToDoItem.prototype.deleteToDoElement = function () {\n// //     var element = document.querySelector(`[todoid = '${todoID}']`);\n// //     element.currentTarget.remove();\n\n    \n// // }\n\n// ToDoItem.prototype.render = function(todoItemElement) {\n//     var template = document.querySelector('#mustache-template').innerHTML;\n//     todoItemElement.innerHTML = Mustache.to_html(template, this);\n    \n// }\n\n\n\n//# sourceURL=webpack:///./ToDoListView.js?");

/***/ }),

/***/ "./ToDoManager.js":
/*!************************!*\
  !*** ./ToDoManager.js ***!
  \************************/
/*! exports provided: ToDoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoManager\", function() { return ToDoManager; });\n/* harmony import */ var _ToDoActionBarView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoActionBarView */ \"./ToDoActionBarView.js\");\n/* harmony import */ var _ToDoListView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDoListView */ \"./ToDoListView.js\");\n/* harmony import */ var _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoManagerBroker */ \"./ToDoManagerBroker.js\");\n/* harmony import */ var _ToDoModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToDoModel */ \"./ToDoModel.js\");\n\n\n\n\n\nfunction ToDoManager(){\n    this.todoModel = new _ToDoModel__WEBPACK_IMPORTED_MODULE_3__[\"ToDoModel\"]();\n    this.todoListView = new _ToDoListView__WEBPACK_IMPORTED_MODULE_1__[\"ToDoListView\"]();\n}\n\nToDoManager.prototype.init = function () {\n    const toDoActionBarView = new _ToDoActionBarView__WEBPACK_IMPORTED_MODULE_0__[\"ToDoActionBarView\"]();\n    toDoActionBarView.init();\n\n    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_2__[\"toDoManagerBroker\"].addEventListener('addItem', addToDoItem.bind(this));\n    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_2__[\"toDoManagerBroker\"].addEventListener('deleteItem',deleteItem.bind(this)); \n    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_2__[\"toDoManagerBroker\"].addEventListener('markCompleted', markCompleted.bind(this));\n    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_2__[\"toDoManagerBroker\"].addEventListener('selectItem', selectToDoItem.bind(this));\n    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_2__[\"toDoManagerBroker\"].addEventListener('updateItem', updateToDoItem.bind(this));\n    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_2__[\"toDoManagerBroker\"].addEventListener('deleteCompletedItem', deleteCompletedToDo.bind(this));\n    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_2__[\"toDoManagerBroker\"].addEventListener('deleteSelectedItem', deleteSelectedToDo.bind(this));\n    _ToDoManagerBroker__WEBPACK_IMPORTED_MODULE_2__[\"toDoManagerBroker\"].addEventListener('updateStatus', updateStatus.bind(this));\n}\n\nconst addToDoItem = function (event) {\n    var todoItem, newTodoTemplate;\n    todoItem = this.todoModel.createItem(event.detail);\n    newTodoTemplate = this.todoListView.createTemplate(todoItem);\n    this.todoListView.addNewTemplate(newTodoTemplate);\n}\n\nconst deleteItem = function (event) {\n    var todoID = event.detail;\n    this.todoModel.deleteToDo(todoID);\n}\n\nconst markCompleted = function (event) {\n    var todoID, todoItemContainer, todoItem;\n    todoID = event.detail.id;\n    todoItemContainer = event.detail.todoContainer;\n    this.todoModel.changeCompletedStatus(todoID);\n    todoItem = this.todoModel.getToDoItem(todoID);\n    this.todoListView.render(todoItem, todoItemContainer);\n}\n\nconst selectToDoItem = function (event) {\n    var todoID = event.detail;\n    this.todoModel.changeSelectedStatus(todoID);\n}\n\nconst updateToDoItem = function (event){\n    var todoID, todoText, todoItem, todoItemContainer;\n    todoID = event.detail.id;\n    todoText = event.detail.todoText;\n    todoItemContainer = event.detail.todoContainer;\n    this.todoModel.changeToDoContent(todoID, todoText);\n    todoItem = this.todoModel.getToDoItem(todoID);\n    console.log(todoText);\n    this.todoListView.render(todoItem, todoItemContainer);\n}\n\nconst updateStatus = function (event) {\n    var todoId, todoItem, todoItemContainer;\n    todoId = event.detail.id;\n    todoItemContainer = event.detail.todoContainer;\n    this.todoModel.changeUpdateStatus(todoId);\n    todoItem = this.todoModel.getToDoItem(todoId);\n   // console.log(todoItem);\n    this.todoListView.render(todoItem, todoItemContainer);\n}\n\nconst deleteCompletedToDo = function () {\n    var removedToDoIds = this.todoModel.removeCompletedToDo();\n    this.todoListView.removeElement(removedToDoIds);\n}\n\nconst deleteSelectedToDo= function () {\n    var removedToDoIds = this.todoModel.removeSelectedToDo();\n    this.todoListView.removeElement(removedToDoIds);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// function ToDoManager() {\n//     this.toDoItems = {};\n//     this.toDoHelperElements ={\n//         toDoContainer : document.getElementById(\"todo-list-wrapper\"),\n//         template : document.querySelector('#mustache-template'),\n//         toDoInput : document.getElementById(\"input-todo\")\n//     };\n// }\n\n// ToDoManager.prototype.init = function () {\n//     const toDoActionBar = new ToDoActionBar();\n//     toDoActionBar.init(this.toDoHelperElements);\n\n//     //toDoManagerBroker.addEventListener('addItem', addToDoItem.bind(this));\n//     //toDoManagerBroker.addEventListener('deleteCompletedItem', deleteCompletedItem.bind(this));\n//     //toDoManagerBroker.addEventListener('deleteSelectedItem', deleteSelectedItem.bind(this));\n//     //toDoManagerBroker.addEventListener('notifyChanges', updateToDoItem.bind(this));\n//     //toDoManagerBroker.addEventListener('deleteItem',deleteItem.bind(this)); \n// }\n\n// const addToDoItem = function (event) {\n//     var todoText =event.detail;  \n//     var newTodoItem = new ToDoItem(todoText);\n//     var newToDo = {\n//         id :newTodoItem.todoId,\n//         text :todoText,\n//         completeStatus :false,\n//         checkedStatus :false\n//     }\n//     var newElement = newTodoItem.createItem(this.toDoHelperElements);\n//     newTodoItem.init(newElement);\n//     this.toDoHelperElements.toDoContainer.appendChild(newElement);\n//     this.toDoItems[newToDo.id] = newToDo;\n// }\n\n// const updateToDoItem = function (event) {\n//     var toDoItem = event.detail;\n//     this.toDoItems[toDoItem.id].text = toDoItem.text;\n//     this.toDoItems[toDoItem.id].completeStatus = toDoItem.completeStatus;\n//     this.toDoItems[toDoItem.id].checkedStatus = toDoItem.checkedStatus;\n// }\n\n// const deleteItem = function (event) {\n//     var todoID = event.detail;\n//     delete this.toDoItems[todoID];\n// }\n// const deleteToDoElement = function (todoID) {\n//     var element = document.querySelector(`[todoid = '${todoID}']`);\n//     var todoElement = findToDoWrapper(\"DIV\", element.parentElement);\n//     todoElement.remove();\n//     delete this.toDoItems[todoID];\n// }\n\n// const findToDoWrapper = function (tag, element) {\n//     while(element.tagName !== tag){\n//         element = element.parentElement;\n//     }\n//     return element;\n// }\n\n// const deleteCompletedItem = function () {\n//     for(var todoId in this.toDoItems){\n//         if(this.toDoItems[todoId].completeStatus){\n//             deleteToDoElement.call(this,todoId);\n//         }\n//     }\n// }\n\n// const deleteSelectedItem = function () {\n//     for(var todoId in this.toDoItems){\n//         if(this.toDoItems[todoId].checkedStatus){\n//             deleteToDoElement.call(this, todoId);\n//         }\n//     }\n// }\n\n\n\n\n//# sourceURL=webpack:///./ToDoManager.js?");

/***/ }),

/***/ "./ToDoManagerBroker.js":
/*!******************************!*\
  !*** ./ToDoManagerBroker.js ***!
  \******************************/
/*! exports provided: toDoManagerBroker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDoManagerBroker\", function() { return toDoManagerBroker; });\nvar toDoManagerBroker = document.createElement(\"div\");\n\n\n\n//# sourceURL=webpack:///./ToDoManagerBroker.js?");

/***/ }),

/***/ "./ToDoModel.js":
/*!**********************!*\
  !*** ./ToDoModel.js ***!
  \**********************/
/*! exports provided: ToDoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoModel\", function() { return ToDoModel; });\nfunction ToDoModel(){}\n\nvar toDoItems = {};\nToDoModel.prototype.createItem = function(todoText){\n    var todoItem = {\n        todoId : new Date().getTime(),\n        todoText : todoText,\n        todoStatus : false,\n        todoChecked : false,\n        todoUpdateStatus : false\n    }\n    toDoItems[todoItem.todoId] = todoItem;\n    return todoItem;\n}\n\nToDoModel.prototype.deleteToDo = function(todoID){\n    delete toDoItems[todoID];\n}\n\nToDoModel.prototype.changeCompletedStatus = function(todoID){\n    toDoItems[todoID].todoStatus = !toDoItems[todoID].todoStatus;\n}\n\nToDoModel.prototype.getToDoItem = function(todoID){\n    return toDoItems[todoID];\n}\n\nToDoModel.prototype.changeSelectedStatus = function(todoID){\n    toDoItems[todoID].todoChecked = !toDoItems[todoID].todoChecked;\n}\nToDoModel.prototype.changeUpdateStatus = function(todoID){\n    toDoItems[todoID].todoUpdateStatus = !toDoItems[todoID].todoUpdateStatus;\n}\n\nToDoModel.prototype.changeToDoContent = function(todoID, todoText){\n    // todoTextElement.setAttribute(\"contenteditable\", \"true\");\n    // todoTextElement.classList.add(\"edit-todo-text\");\n\n    // todoTextElement.onkeypress = function (event) {\n    //     if (event.keyCode === 13) {\n    //         updateContent(todoID);\n    //     }\n    // // }\n\n    // todoTextElement.onblur = function () {\n    //     updateContent(todoID);\n    // }\n\n    // function updateContent(todoID) {\n        // todoTextElement.classList.remove(\"edit-todo-text\");\n        // todoTextElement.removeAttribute(\"contenteditable\");\n        toDoItems[todoID].todoText = todoText;\n        toDoItems[todoID].todoUpdateStatus = false;\n   // }\n}\n\nToDoModel.prototype.removeCompletedToDo= function(){\n    var removedId =[];\n    for(var todoId in toDoItems){\n        if(toDoItems[todoId].todoStatus){\n            removedId.push(toDoItems[todoId].todoId);\n            delete toDoItems[todoId]; \n        }\n    }\n    return removedId;\n}\n\nToDoModel.prototype.removeSelectedToDo= function(){\n    var removedId =[];\n    console.log(toDoItems);\n    for(var todoId in toDoItems){\n        if(toDoItems[todoId].todoChecked){\n            removedId.push(toDoItems[todoId].todoId);\n            delete toDoItems[todoId];    \n        }\n    }\n    return removedId;\n}\n\n\n//# sourceURL=webpack:///./ToDoModel.js?");

/***/ }),

/***/ "./ToDoTemplate.js":
/*!*************************!*\
  !*** ./ToDoTemplate.js ***!
  \*************************/
/*! exports provided: todoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoTemplate\", function() { return todoTemplate; });\nconst todoTemplate = `<div class=\"todo-item\" todoid=\"{{todoId}}\">\n                    <input type=\"checkbox\" class=\"select-todo-item\" id=\"check-box\" todo-action = \"select-item\" {{#todoChecked}}checked{{/todoChecked}}>\n\n                    {{#todoUpdateStatus}}\n                    <p class=\"todo-text {{#todoStatus}}completed{{/todoStatus}} {{^todoStatus}}not-completed{{/todoStatus}} edit-todo-text\" todo-action=\"todo-text\" contenteditable=\"true\">{{todoText}}</p>\n                    {{/todoUpdateStatus}}\n\n                    {{^todoUpdateStatus}}\n                    <p class=\"todo-text {{#todoStatus}}completed{{/todoStatus}} {{^todoStatus}}not-completed{{/todoStatus}}\" todo-action=\"todo-text\">{{todoText}}</p>\n                    {{/todoUpdateStatus}}\n\n                    <button class=\"done-btn\" todo-action=\"mark-done\">{{#todoStatus}}Not Done{{/todoStatus}} {{^todoStatus}}Done{{/todoStatus}}</button>\n                    <button class=\"delete-btn\" todo-action=\"delete-item\">Delete</button>\n                    <button class=\"update-btn\" todo-action=\"update-item\">Update</button>\n                    </div>`;\n\n\n\n//# sourceURL=webpack:///./ToDoTemplate.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToDoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoManager */ \"./ToDoManager.js\");\n\n\n\nfunction main(){\n    const toDoManager = new _ToDoManager__WEBPACK_IMPORTED_MODULE_0__[\"ToDoManager\"]();\n    toDoManager.init();\n}\nmain();\n\n\n\n\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });