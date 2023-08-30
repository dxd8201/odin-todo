/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/appendTodo.js":
/*!***********************************!*\
  !*** ./src/modules/appendTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendTodo)
/* harmony export */ });
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/modules/createTodo.js");
/* harmony import */ var _todoCreationPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreationPopup.js */ "./src/modules/todoCreationPopup.js");



//function to create event listeners and append todos to correct project container
function appendTodo () {
    let todoListenerArray = document.querySelectorAll("#newTodo");
    let todoTaskContainerListener = document.querySelectorAll("#todoTaskContainer");

    //function to append the todo to the corresponding todo task container
    const addTodo = function(i) {
      console.log(`You created a do on the ${i}th container`);
      todoTaskContainerListener[i].appendChild(new _createTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_todoCreationPopup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(), "TBD"));
    }

    //runs through todo array and adds an event listener to all todo creation elements.
      for (let i = 0; i < todoListenerArray.length; i++) {
        //checks if an event listener has already been added, and adds one if it does not have an event listener
        if (todoListenerArray[i].getAttribute('data-event-clicked') !== 'true') {
          todoListenerArray[i].setAttribute('data-event-clicked', 'true');
          todoListenerArray[i].addEventListener('click', function (e) {
              console.log(`event has been attached to ${i}`);
              addTodo(i);
         });
        }
      }
      return todoListenerArray
}

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateProject)
/* harmony export */ });
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/modules/createTodo.js");
/* harmony import */ var _appendTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendTodo.js */ "./src/modules/appendTodo.js");
/* harmony import */ var _deleteTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteTodo.js */ "./src/modules/deleteTodo.js");



//should create a modal popup for a project creation card
//background should be covered by modal card with a semi-transparent color. 

function CreateProject(title) {

    this.title = title;
    
    const todoProjectContainer = document.createElement("div");
    todoProjectContainer.classList.add("todo-project-container");
    todoProjectContainer.setAttribute("id", "todoProjectContainer");

    const mainProjectTitleContainer = document.createElement("div");
    mainProjectTitleContainer.classList.add("main-project-title-container");
    mainProjectTitleContainer.setAttribute("id", "mainProjectTitleContainer");
    todoProjectContainer.appendChild(mainProjectTitleContainer);

    const mainProjectTitle = document.createElement("div");
    mainProjectTitle.classList.add("main-project-title");
    mainProjectTitle.setAttribute("id", "main-project-title");
    mainProjectTitleContainer.appendChild(mainProjectTitle);
    mainProjectTitle.textContent = title;

    const todoTaskContainer = document.createElement("div");
    todoTaskContainer.classList.add("todo-task-container");
    todoTaskContainer.setAttribute("id", "todoTaskContainer");
    todoProjectContainer.appendChild(todoTaskContainer);

    const todoCreationIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 add-todo-icon" id="newTodo"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/> </svg>';
    mainProjectTitleContainer.innerHTML += todoCreationIcon;
    
    console.log("create project module is hooked up")
    

    setTimeout(() => {
        ;(0,_appendTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_deleteTodo_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      }, 2000);
    
    

    return todoProjectContainer
     
    }
    

/***/ }),

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTodo)
/* harmony export */ });
function CreateTodo(title, dueDate) {
    //would it be better to hold the array here?


    this.title = title;
    this.dueDate = dueDate;

    const singleTodoTaskContainer = document.createElement("div");
    singleTodoTaskContainer.classList.add("single-todo-task-container");
    singleTodoTaskContainer.setAttribute("id", "singleTodoTaskContainer");

    const todoTask = document.createElement("div");
    todoTask.classList.add("todo-task");
    todoTask.setAttribute("id", "todoTask");
    todoTask.textContent = title;
    singleTodoTaskContainer.appendChild(todoTask);

    const editIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 todo-icon" id="editTodo"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /> </svg>';
    singleTodoTaskContainer.innerHTML += editIcon;

    const deleteIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 todo-icon" id="deleteTodo"> <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /> </svg>';
    singleTodoTaskContainer.innerHTML += deleteIcon;


    console.log("create todo module is hooked up");

    return singleTodoTaskContainer
    }
    

/***/ }),

/***/ "./src/modules/deleteTodo.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTodo)
/* harmony export */ });
function deleteTodo() {
    let deleteTodoListenerArray = document.querySelectorAll("#deleteTodo");
    let todoTaskContainerListener = document.querySelectorAll("#todoTaskContainer");

    console.log(deleteTodoListenerArray);

    //function to append the todo to the corresponding todo task container
    const removeTodo = function(i) {
      console.log(`You created a do on the ${i}th container`);
      todoTaskContainerListener[i].remove();
      //removes the item from the array, but must remove the item from all arrays
      todoTaskContainerListener.splice(i, 1);
    }

    //runs through todo array and adds an event listener to all todo deletion elements.
      for (let i = 0; i <= deleteTodoListenerArray.length; i++) {
        //checks if an event listener has already been added
        if (deleteTodoListenerArray[i].getAttribute('data-event-clicked') !== 'true') {
          deleteTodoListenerArray[i].setAttribute('data-event-clicked', 'true');
          deleteTodoListenerArray[i].addEventListener('click', function (e) {
              console.log('event has been attached');
              removeTodo(i);
         });
        }
      }

      for (let i = 0; i < todoListenerArray.length; i++) {
        //checks if an event listener has already been added, and adds one if it does not have an event listener
        if (todoListenerArray[i].getAttribute('data-event-clicked') !== 'true') {
          todoListenerArray[i].setAttribute('data-event-clicked', 'true');
          todoListenerArray[i].addEventListener('click', function (e) {
              console.log(`event has been attached to ${i}`);
              addTodo(i);
         });
        }
      }

      console.log("delete todo Ran");

      return deleteTodoListenerArray
}

/***/ }),

/***/ "./src/modules/todoCreationPopup.js":
/*!******************************************!*\
  !*** ./src/modules/todoCreationPopup.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCreationPopup)
/* harmony export */ });
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ "./src/modules/createProject.js");


function projectCreationPopup() {
    const mainContentContainerListener = document.getElementById("mainContentContainer");
    
    const mainPopupContainer = document.createElement("div");
    mainPopupContainer.classList.add("main-popup-container");
    mainPopupContainer.setAttribute("id", "mainPopupContainer");

    const popupFlexContainer = document.createElement("div");
    popupFlexContainer.classList.add("popup-flex-container");
    popupFlexContainer.setAttribute("id", "popupFlexContainer");
    mainPopupContainer.appendChild(popupFlexContainer);

    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    formContainer.setAttribute("id", "formContainer");
    popupFlexContainer.appendChild(formContainer);

    const todoLabel = document.createElement("label");
    todoLabel.setAttribute("for", "todoInput");
    todoLabel.classList.add("todo-label");
    todoLabel.textContent = "Todo:";
    formContainer.appendChild(todoLabel);

    const todoInput = document.createElement("input");
    todoInput.setAttribute("type", "text");
    todoInput.classList.add("popup-input");
    todoInput.setAttribute("id", "todoInput");
    formContainer.appendChild(todoInput);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-btn");
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.textContent = "Submit";
    popupFlexContainer.appendChild(submitBtn);

    function getInputValue() {
        let inputValue = document.getElementById("titleInput").value;
        console.log(inputValue);

        return inputValue
    }
    

    submitBtn.addEventListener("click", function () {
        getInputValue();
        mainContentContainerListener.appendChild(new _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"](getInputValue()));
        mainPopupContainer.remove();
    });


    return mainPopupContainer
}

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/appendTodo.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kVG9kby5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDYzs7QUFFdkQ7QUFDZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxFQUFFO0FBQy9DLG1EQUFtRCxzREFBVSxDQUFDLGlFQUFpQjtBQUMvRTs7QUFFQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsRUFBRTtBQUMxRDtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQndDO0FBQ0E7QUFDQTtBQUN4QztBQUNBOztBQUVlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwyREFBVTtBQUNsQixRQUFRLDBEQUFVO0FBQ2xCLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlDZTtBQUNmOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVCZTtBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFDQUFxQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEVBQUU7QUFDMUQ7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QzhDOztBQUUvQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFELHlEQUFhO0FBQ2xFO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7Ozs7O1VDckRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvYXBwZW5kVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvZGVsZXRlVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy90b2RvQ3JlYXRpb25Qb3B1cC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWF0ZVRvZG8gZnJvbSAnLi9jcmVhdGVUb2RvLmpzJztcbmltcG9ydCB0b2RvQ3JlYXRpb25Qb3B1cCBmcm9tICcuL3RvZG9DcmVhdGlvblBvcHVwLmpzJztcblxuLy9mdW5jdGlvbiB0byBjcmVhdGUgZXZlbnQgbGlzdGVuZXJzIGFuZCBhcHBlbmQgdG9kb3MgdG8gY29ycmVjdCBwcm9qZWN0IGNvbnRhaW5lclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kVG9kbyAoKSB7XG4gICAgbGV0IHRvZG9MaXN0ZW5lckFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNuZXdUb2RvXCIpO1xuICAgIGxldCB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b2RvVGFza0NvbnRhaW5lclwiKTtcblxuICAgIC8vZnVuY3Rpb24gdG8gYXBwZW5kIHRoZSB0b2RvIHRvIHRoZSBjb3JyZXNwb25kaW5nIHRvZG8gdGFzayBjb250YWluZXJcbiAgICBjb25zdCBhZGRUb2RvID0gZnVuY3Rpb24oaSkge1xuICAgICAgY29uc29sZS5sb2coYFlvdSBjcmVhdGVkIGEgZG8gb24gdGhlICR7aX10aCBjb250YWluZXJgKTtcbiAgICAgIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXJbaV0uYXBwZW5kQ2hpbGQobmV3IENyZWF0ZVRvZG8odG9kb0NyZWF0aW9uUG9wdXAoKSwgXCJUQkRcIikpO1xuICAgIH1cblxuICAgIC8vcnVucyB0aHJvdWdoIHRvZG8gYXJyYXkgYW5kIGFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRvZG8gY3JlYXRpb24gZWxlbWVudHMuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0ZW5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vY2hlY2tzIGlmIGFuIGV2ZW50IGxpc3RlbmVyIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQsIGFuZCBhZGRzIG9uZSBpZiBpdCBkb2VzIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGlmICh0b2RvTGlzdGVuZXJBcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcpICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICB0b2RvTGlzdGVuZXJBcnJheVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdG9kb0xpc3RlbmVyQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXZlbnQgaGFzIGJlZW4gYXR0YWNoZWQgdG8gJHtpfWApO1xuICAgICAgICAgICAgICBhZGRUb2RvKGkpO1xuICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2RvTGlzdGVuZXJBcnJheVxufSIsImltcG9ydCBDcmVhdGVUb2RvIGZyb20gJy4vY3JlYXRlVG9kby5qcydcbmltcG9ydCBhcHBlbmRUb2RvIGZyb20gJy4vYXBwZW5kVG9kby5qcydcbmltcG9ydCBkZWxldGVUb2RvIGZyb20gJy4vZGVsZXRlVG9kby5qcydcbi8vc2hvdWxkIGNyZWF0ZSBhIG1vZGFsIHBvcHVwIGZvciBhIHByb2plY3QgY3JlYXRpb24gY2FyZFxuLy9iYWNrZ3JvdW5kIHNob3VsZCBiZSBjb3ZlcmVkIGJ5IG1vZGFsIGNhcmQgd2l0aCBhIHNlbWktdHJhbnNwYXJlbnQgY29sb3IuIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVQcm9qZWN0KHRpdGxlKSB7XG5cbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgXG4gICAgY29uc3QgdG9kb1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9Qcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIHRvZG9Qcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1Byb2plY3RDb250YWluZXJcIik7XG5cbiAgICBjb25zdCBtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3QtdGl0bGUtY29udGFpbmVyXCIpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyXCIpO1xuICAgIHRvZG9Qcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIpO1xuXG4gICAgY29uc3QgbWFpblByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LXRpdGxlXCIpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLXByb2plY3QtdGl0bGVcIik7XG4gICAgbWFpblByb2plY3RUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUHJvamVjdFRpdGxlKTtcbiAgICBtYWluUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb25zdCB0b2RvVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tdGFzay1jb250YWluZXJcIik7XG4gICAgdG9kb1Rhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvVGFza0NvbnRhaW5lclwiKTtcbiAgICB0b2RvUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGFza0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRpb25JY29uID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy02IGgtNiBhZGQtdG9kby1pY29uXCIgaWQ9XCJuZXdUb2RvXCI+IDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgNC41djE1bTcuNS03LjVoLTE1XCIvPiA8L3N2Zz4nO1xuICAgIG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIuaW5uZXJIVE1MICs9IHRvZG9DcmVhdGlvbkljb247XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJjcmVhdGUgcHJvamVjdCBtb2R1bGUgaXMgaG9va2VkIHVwXCIpXG4gICAgXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXBwZW5kVG9kbygpO1xuICAgICAgICBkZWxldGVUb2RvKCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICBcbiAgICBcblxuICAgIHJldHVybiB0b2RvUHJvamVjdENvbnRhaW5lclxuICAgICBcbiAgICB9XG4gICAgIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlVG9kbyh0aXRsZSwgZHVlRGF0ZSkge1xuICAgIC8vd291bGQgaXQgYmUgYmV0dGVyIHRvIGhvbGQgdGhlIGFycmF5IGhlcmU/XG5cblxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXG4gICAgY29uc3Qgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtdG9kby10YXNrLWNvbnRhaW5lclwiKTtcbiAgICBzaW5nbGVUb2RvVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpbmdsZVRvZG9UYXNrQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdG9kb1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9UYXNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRhc2tcIik7XG4gICAgdG9kb1Rhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvVGFza1wiKTtcbiAgICB0b2RvVGFzay50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UYXNrKTtcblxuICAgIGNvbnN0IGVkaXRJY29uID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy02IGgtNiB0b2RvLWljb25cIiBpZD1cImVkaXRUb2RvXCI+IDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTYuODYyIDQuNDg3bDEuNjg3LTEuNjg4YTEuODc1IDEuODc1IDAgMTEyLjY1MiAyLjY1MkwxMC41ODIgMTYuMDdhNC41IDQuNSAwIDAxLTEuODk3IDEuMTNMNiAxOGwuOC0yLjY4NWE0LjUgNC41IDAgMDExLjEzLTEuODk3bDguOTMyLTguOTMxem0wIDBMMTkuNSA3LjEyNU0xOCAxNHY0Ljc1QTIuMjUgMi4yNSAwIDAxMTUuNzUgMjFINS4yNUEyLjI1IDIuMjUgMCAwMTMgMTguNzVWOC4yNUEyLjI1IDIuMjUgMCAwMTUuMjUgNkgxMFwiIC8+IDwvc3ZnPic7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGVkaXRJY29uO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInctNiBoLTYgdG9kby1pY29uXCIgaWQ9XCJkZWxldGVUb2RvXCI+IDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTQuNzQgOWwtLjM0NiA5bS00Ljc4OCAwTDkuMjYgOW05Ljk2OC0zLjIxYy4zNDIuMDUyLjY4Mi4xMDcgMS4wMjIuMTY2bS0xLjAyMi0uMTY1TDE4LjE2IDE5LjY3M2EyLjI1IDIuMjUgMCAwMS0yLjI0NCAyLjA3N0g4LjA4NGEyLjI1IDIuMjUgMCAwMS0yLjI0NC0yLjA3N0w0Ljc3MiA1Ljc5bTE0LjQ1NiAwYTQ4LjEwOCA0OC4xMDggMCAwMC0zLjQ3OC0uMzk3bS0xMiAuNTYyYy4zNC0uMDU5LjY4LS4xMTQgMS4wMjItLjE2NW0wIDBhNDguMTEgNDguMTEgMCAwMTMuNDc4LS4zOTdtNy41IDB2LS45MTZjMC0xLjE4LS45MS0yLjE2NC0yLjA5LTIuMjAxYTUxLjk2NCA1MS45NjQgMCAwMC0zLjMyIDBjLTEuMTguMDM3LTIuMDkgMS4wMjItMi4wOSAyLjIwMXYuOTE2bTcuNSAwYTQ4LjY2NyA0OC42NjcgMCAwMC03LjUgMFwiIC8+IDwvc3ZnPic7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGRlbGV0ZUljb247XG5cblxuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHRvZG8gbW9kdWxlIGlzIGhvb2tlZCB1cFwiKTtcblxuICAgIHJldHVybiBzaW5nbGVUb2RvVGFza0NvbnRhaW5lclxuICAgIH1cbiAgICAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgIGxldCBkZWxldGVUb2RvTGlzdGVuZXJBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZGVsZXRlVG9kb1wiKTtcbiAgICBsZXQgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9kb1Rhc2tDb250YWluZXJcIik7XG5cbiAgICBjb25zb2xlLmxvZyhkZWxldGVUb2RvTGlzdGVuZXJBcnJheSk7XG5cbiAgICAvL2Z1bmN0aW9uIHRvIGFwcGVuZCB0aGUgdG9kbyB0byB0aGUgY29ycmVzcG9uZGluZyB0b2RvIHRhc2sgY29udGFpbmVyXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBZb3UgY3JlYXRlZCBhIGRvIG9uIHRoZSAke2l9dGggY29udGFpbmVyYCk7XG4gICAgICB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyW2ldLnJlbW92ZSgpO1xuICAgICAgLy9yZW1vdmVzIHRoZSBpdGVtIGZyb20gdGhlIGFycmF5LCBidXQgbXVzdCByZW1vdmUgdGhlIGl0ZW0gZnJvbSBhbGwgYXJyYXlzXG4gICAgICB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICAvL3J1bnMgdGhyb3VnaCB0b2RvIGFycmF5IGFuZCBhZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0b2RvIGRlbGV0aW9uIGVsZW1lbnRzLlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZGVsZXRlVG9kb0xpc3RlbmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9jaGVja3MgaWYgYW4gZXZlbnQgbGlzdGVuZXIgaGFzIGFscmVhZHkgYmVlbiBhZGRlZFxuICAgICAgICBpZiAoZGVsZXRlVG9kb0xpc3RlbmVyQXJyYXlbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWNsaWNrZWQnKSAhPT0gJ3RydWUnKSB7XG4gICAgICAgICAgZGVsZXRlVG9kb0xpc3RlbmVyQXJyYXlbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWNsaWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50IGhhcyBiZWVuIGF0dGFjaGVkJyk7XG4gICAgICAgICAgICAgIHJlbW92ZVRvZG8oaSk7XG4gICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0ZW5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vY2hlY2tzIGlmIGFuIGV2ZW50IGxpc3RlbmVyIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQsIGFuZCBhZGRzIG9uZSBpZiBpdCBkb2VzIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGlmICh0b2RvTGlzdGVuZXJBcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcpICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICB0b2RvTGlzdGVuZXJBcnJheVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdG9kb0xpc3RlbmVyQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXZlbnQgaGFzIGJlZW4gYXR0YWNoZWQgdG8gJHtpfWApO1xuICAgICAgICAgICAgICBhZGRUb2RvKGkpO1xuICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJkZWxldGUgdG9kbyBSYW5cIik7XG5cbiAgICAgIHJldHVybiBkZWxldGVUb2RvTGlzdGVuZXJBcnJheVxufSIsImltcG9ydCBDcmVhdGVQcm9qZWN0IGZyb20gJy4vY3JlYXRlUHJvamVjdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdENyZWF0aW9uUG9wdXAoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gICAgXG4gICAgY29uc3QgbWFpblBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tcG9wdXAtY29udGFpbmVyXCIpO1xuICAgIG1haW5Qb3B1cENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5Qb3B1cENvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHBvcHVwRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1mbGV4LWNvbnRhaW5lclwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3B1cEZsZXhDb250YWluZXJcIik7XG4gICAgbWFpblBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwRmxleENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybUNvbnRhaW5lclwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0b2RvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdG9kb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9JbnB1dFwiKTtcbiAgICB0b2RvTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvZG8tbGFiZWxcIik7XG4gICAgdG9kb0xhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvOlwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xhYmVsKTtcblxuICAgIGNvbnN0IHRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0b2RvSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9kb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1pbnB1dFwiKTtcbiAgICB0b2RvSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvSW5wdXRcIik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSW5wdXQpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idG5cIik7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0QnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWVcbiAgICB9XG4gICAgXG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2V0SW5wdXRWYWx1ZSgpO1xuICAgICAgICBtYWluQ29udGVudENvbnRhaW5lckxpc3RlbmVyLmFwcGVuZENoaWxkKG5ldyBDcmVhdGVQcm9qZWN0KGdldElucHV0VmFsdWUoKSkpO1xuICAgICAgICBtYWluUG9wdXBDb250YWluZXIucmVtb3ZlKCk7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBtYWluUG9wdXBDb250YWluZXJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21vZHVsZXMvYXBwZW5kVG9kby5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==