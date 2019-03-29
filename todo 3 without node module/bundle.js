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

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-manager.js */ \"./todo-manager.js\");\n\n\nfunction main(){\n    const toDoManager = new _todo_manager_js__WEBPACK_IMPORTED_MODULE_0__[\"ToDoManager\"]();\n    toDoManager.init(toDoManager);\n   // toDoManager.render();\n}\n\nmain();\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./todo-action-bar.js":
/*!****************************!*\
  !*** ./todo-action-bar.js ***!
  \****************************/
/*! exports provided: ToDoAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoAction\", function() { return ToDoAction; });\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ \"./todo-item.js\");\n\n\nfunction ToDoAction(){\n    this.init = function(toDoManager){\n        var that = this;\n        document.getElementById(\"addBtn\").addEventListener('click', function() {\n            that.addToDoEvent(toDoManager);\n        });\n        document.getElementById(\"delete-selected-Btn\").addEventListener('click', function() {\n            that.deleteSelected(toDoManager)\n        });\n        document.getElementById(\"delete-completed-Btn\").addEventListener('click', function(){\n            that.deleteCompleted(toDoManager);\n        });\n    }\n\n   this.addToDoEvent = function(toDoManager){     \n        var toDoEvent, toDoId;\n        var toDoInput = document.getElementById(\"text-Box1\");      \n        var toDoText = toDoInput.value;\n        if(!toDoText) {\n           alert(\"enter some content\");\n        }else {  \n            if(!this.checkExistanceInList(toDoText, toDoManager)) {\n                toDoId = toDoManager.toDoCounter++;\n                toDoInput.value = \"\";\n\n                toDoEvent = new _todo_item__WEBPACK_IMPORTED_MODULE_0__[\"ToDoItem\"](toDoId, toDoText, toDoManager.toDoStatus, toDoManager.toDoChecked);\n                toDoManager.listOfToDo.push(toDoEvent);\n                toDoManager.render();\n               // localStorage.setObject(\"ListOfToDo\",listOfToDo);\n           }      \n        }\n   } \n\n    this.checkExistanceInList = function(toDoText,toDoManager) {\n        var exists;\n        var toDoInput = document.getElementById(\"text-Box1\"); \n        for(var i=0; i < toDoManager.listOfToDo.length; i++){\n            if(toDoManager.listOfToDo[i].toDoText === toDoText) {\n                toDoInput.value = \"\";\n                alert(\"This already exists in the To Do List at \" + (i+1) + \"th position. Please enter another event.\");\n                exists = 1;\n                break;\n            }else {\n                exists = 0;\n            }\n        }\n        return exists;\n    }\n\n    this.deleteCompleted = function(toDoManager) {\n        for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {\n           // selectedToDoItem = document.querySelector(`[todoid=\"${j}\"]`);\n            if(toDoManager.listOfToDo[j].toDoStatus) {\n                toDoManager.listOfToDo.splice(j,1);\n                this.updateListOfToDoAfterDelete(j, toDoManager);\n                toDoManager.toDoCounter--;\n            }\n        } \n        toDoManager.render();\n    }\n\n    this.deleteSelected = function(toDoManager){  \n        for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {\n           //var selectedToDoItem = document.querySelector(`[todoid=\"${j}\"]`); \n            if(toDoManager.listOfToDo[j].toDoChecked) {\n                toDoManager.listOfToDo.splice(j,1);\n                this.updateListOfToDoAfterDelete(j,toDoManager);\n                toDoManager.toDoCounter--;\n            }\n        } \n        toDoManager.render();\n    }\n\n    this.updateListOfToDoAfterDelete = function(toDoItemId, toDoManager) {\n        var i;\n        for(i = toDoItemId; i < toDoManager.listOfToDo.length; i++) {\n            document.querySelector(`[todoid=\"${toDoManager.listOfToDo[i].toDoId}\"]`).setAttribute(\"todoid\", `${toDoManager.listOfToDo[i].toDoId-1}`);\n            toDoManager.listOfToDo[i].toDoId -= 1;\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack:///./todo-action-bar.js?");

/***/ }),

/***/ "./todo-item.js":
/*!**********************!*\
  !*** ./todo-item.js ***!
  \**********************/
/*! exports provided: ToDoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoItem\", function() { return ToDoItem; });\n/* harmony import */ var _todo_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-manager.js */ \"./todo-manager.js\");\n/* harmony import */ var _todo_action_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-action-bar.js */ \"./todo-action-bar.js\");\n\n\n\nfunction ToDoItem(toDoId, toDoText, toDoStatus, toDoChecked) {\n        this.toDoId = toDoId;\n        this.toDoText = toDoText;\n        this.toDoStatus = toDoStatus;\n        this.toDoChecked = toDoChecked;\n \n    this.init = function(toDoManager){\n        var that = this;\n        document.getElementById(\"todo-event\").addEventListener('click', function(){\n            that.operations(event,toDoManager);\n        });\n    }\n\n    this.operations = function(event, toDoManager){\n        var clickedButton, selectedToDoItemContent, toDoItemId, selectedToDoItem, selectedToDoItemContent;\n            if(event.target !== event.currentTarget){\n                clickedButton = event.target.getAttribute(\"element-type\");\n                var targetItem = event.target;\n\n                toDoItemId =  (function (targetItem){\n                    while(true){\n                        console.log(targetItem);\n                        var targetAttributeValue = targetItem.getAttribute(\"data-name\");\n                        if(targetAttributeValue !== \"todo-wrapper\"){\n                            targetItem = targetItem.parentElement;\n                        }else{\n                            break;\n                        }\n                    }\n                    return targetItem.getAttribute(\"todoid\");\n                })(targetItem);\n\n                selectedToDoItem = document.querySelector(`[todoid=\"${toDoItemId}\"]`);\n                selectedToDoItemContent  = selectedToDoItem.querySelector(`[element-type=\"para\"]`);\n                switch(clickedButton) {\n                    case \"done\": \n                    toDoManager.listOfToDo[toDoItemId].completedEvent();\n                    toDoManager.render();\n                                break;\n                    case \"delete\":\n                    // toDoManager.deleteToDo(toDoItemId);\n                    toDoManager.listOfToDo.splice(toDoItemId,1);\n                    const toDoAction = new _todo_action_bar_js__WEBPACK_IMPORTED_MODULE_1__[\"ToDoAction\"]();\n                    toDoAction.updateListOfToDoAfterDelete(toDoItemId,toDoManager);\n                    toDoManager.render();\n                    toDoManager.toDoCounter--;\n                                break;\n                    case \"update\":\n                    toDoManager.listOfToDo[toDoItemId].updateToDoList(toDoItemId, selectedToDoItemContent, toDoManager);\n                                break;\n                    case \"checkbox\":\n                    toDoManager.listOfToDo[toDoItemId].setCheckedStatus();\n                                break;\n                }\n               \n        }\n        event.stopPropagation();\n    }\n\n    this.completedEvent = function() {\n        switch(this.toDoStatus) {\n            case false:\n                this.toDoStatus = true;\n                break;\n            case true:\n                this.toDoStatus = false;\n                break;\n        }\n    // localStorage.setObject(\"ListOfToDo\",listOfToDo);\n    }  \n\n    this.setCheckedStatus = function(){\n        switch(this.toDoChecked) {\n            case false:\n                        this.toDoChecked = true;\n                        break;\n            case true:\n                        this.toDoChecked = false;\n                        break;\n        }\n         //localStorage.setObject(\"ListOfToDo\",listOfToDo);\n    }\n   \n    this.updateToDoList = function(toDoItemId, selectedToDoItemContent, toDoManager){\n        selectedToDoItemContent.setAttribute(\"contenteditable\",\"true\");\n        selectedToDoItemContent.classList.add(\"edit-todo-text\");\n\n        selectedToDoItemContent.onkeypress = function(event) {\n        if(event.keyCode === 13) {\n                updateContent();\n            }\n        }\n\n        selectedToDoItemContent.onblur = function () {\n            updateContent();\n        }\n\n        function updateContent(){\n            selectedToDoItemContent.classList.remove(\"edit-todo-text\");\n            selectedToDoItemContent.removeAttribute(\"contenteditable\");\n            toDoManager.listOfToDo[toDoItemId].toDoText = selectedToDoItemContent.textContent;\n            //localStorage.setObject(\"ListOfToDo\",listOfToDo);\n        }\n    }\n\n    // this.deleteToDo = function(toDoItemId, selectedToDoItem, toDoManager){\n    //     selectedToDoItem.remove();\n    //     toDoManager.listOfToDo.splice(toDoItemId,1);\n    //     this.updateListOfToDoAfterDelete(toDoItemId, toDoManager);\n    //     //localStorage.setObject(\"ListOfToDo\",listOfToDo);\n    //     toDoManager.toDoCounter--;\n    // }\n\n    // this.updateListOfToDoAfterDelete = function(toDoItemId, toDoManager){\n    //     var i;\n    //     for(i = toDoItemId; i < toDoManager.listOfToDo.length; i++) {\n    //         document.querySelector(`[todoid=\"${toDoManager.listOfToDo[i].toDoId}\"]`).setAttribute(\"todoid\", `${toDoManager.listOfToDo[i].toDoId-1}`);\n    //         toDoManager.listOfToDo[i].toDoId -= 1;\n    //     }\n    // }\n\n    this.createTemplate = function(toDoId, toDoText){\n        var hiddenTemplate, clone;\n        hiddenTemplate = document.querySelector(`[data-name=\"todo-wrapper\"]`);\n        clone = hiddenTemplate.cloneNode(true);\n        clone.querySelector(`[element-type=\"para\"]`).innerHTML = toDoText;\n        clone.classList.add(\"clone\");\n        clone.classList.remove(\"todo-item\");\n        clone.setAttribute(\"todoId\", toDoId);\n        clone.removeAttribute(\"id\");\n        return clone;\n    }\n}\n\n\n\n//# sourceURL=webpack:///./todo-item.js?");

/***/ }),

/***/ "./todo-manager.js":
/*!*************************!*\
  !*** ./todo-manager.js ***!
  \*************************/
/*! exports provided: ToDoManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoManager\", function() { return ToDoManager; });\n/* harmony import */ var _todo_action_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-action-bar */ \"./todo-action-bar.js\");\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item */ \"./todo-item.js\");\n\n\n\nfunction ToDoManager() {\n        this.listOfToDo = [];\n        this.toDoCounter = 0;\n        this.toDoStatus =false;\n        this.toDoChecked =false;\n\n    this.init = function(toDoManager) {     \n        const toDoItem = new _todo_item__WEBPACK_IMPORTED_MODULE_1__[\"ToDoItem\"]();\n        const toDoAction = new _todo_action_bar__WEBPACK_IMPORTED_MODULE_0__[\"ToDoAction\"]();\n        toDoAction.init(toDoManager);\n        toDoItem.init(toDoManager);\n    }\n\n    this.render = function(){\n        var toDoContainer = document.getElementById(\"todo-event\");\n        var hiddenToDoTemplate = document.getElementById(\"hidden-todo\");\n        toDoContainer.innerHTML=\"\";\n        toDoContainer.appendChild(hiddenToDoTemplate);\n\n        for(var i = 0; i < this.listOfToDo.length; i++){\n            const toDoItem = new _todo_item__WEBPACK_IMPORTED_MODULE_1__[\"ToDoItem\"]();\n            var clone = toDoItem.createTemplate(this.listOfToDo[i].toDoId, this.listOfToDo[i].toDoText);\n            document.getElementById(\"todo-event\").appendChild(clone);\n             var selectedToDoItemContent  = clone.querySelector(`[element-type=\"para\"]`);\n            if(this.listOfToDo[i].toDoStatus){\n                selectedToDoItemContent.classList.add(\"completed\");\n                selectedToDoItemContent.classList.remove(\"not-completed\");\n               // event.target.textContent = \"Not Done\";\n            }else{\n                selectedToDoItemContent.classList.add(\"not-completed\");\n                selectedToDoItemContent.classList.remove(\"completed\");\n               // event.target.textContent = \"Done\";\n            }\n        }\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack:///./todo-manager.js?");

/***/ })

/******/ });