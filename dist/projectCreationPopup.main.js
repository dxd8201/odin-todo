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
    const headerContainerListener = document.getElementById("mainGridContainer");

    // //function to append the todo to the corresponding todo task container
    // const addTodo = function(i) {
    //   console.log(`You created a do on the ${i}th container`);
    //   todoTaskContainerListener[i].appendChild(new CreateTodo(todoCreationPopup(), "TBD"));
    // }

    //runs through todo array and adds an event listener to all todo creation elements.
      for (let i = 0; i < todoListenerArray.length; i++) {
        //checks if an event listener has already been added, and adds one if it does not have an event listener
        if (todoListenerArray[i].getAttribute('data-event-clicked') !== 'true') {
          todoListenerArray[i].setAttribute('data-event-clicked', 'true');
          todoListenerArray[i].addEventListener('click', function (e) {
              console.log(`event has been attached to ${i}`);
              headerContainerListener.appendChild((0,_todoCreationPopup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i));
              // addTodo(i);
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
function CreateTodo(title, dueDate, j) {
    //would it be better to hold the array here?
    let todoListenerArray = document.querySelectorAll("#newTodo");
    const todoTaskContainerListener = document.querySelectorAll("#todoTaskContainer");

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

    console.log(todoTaskContainerListener);
    for (let i = 0; i < todoTaskContainerListener.length; i++) {
        
        if (i === j) {
            todoTaskContainerListener[i].appendChild(singleTodoTaskContainer);
        }
        
    }

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
/* harmony export */   "default": () => (/* binding */ todoCreationPopup)
/* harmony export */ });
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/modules/createTodo.js");


function todoCreationPopup(j) {
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
        let inputValue = document.getElementById("todoInput").value;
        console.log(inputValue);

        return inputValue
    }
    
    submitBtn.addEventListener("click", function () {
        getInputValue();
        new _createTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"](getInputValue(), "The date", j)
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/modules/projectCreationPopup.js ***!
  \*********************************************/
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

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "titleInput");
    titleLabel.classList.add("title-label");
    titleLabel.textContent = "Project Title:";
    formContainer.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.classList.add("popup-input");
    titleInput.setAttribute("id", "titleInput");
    formContainer.appendChild(titleInput);

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvZGVsZXRlVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy90b2RvQ3JlYXRpb25Qb3B1cC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0Q3JlYXRpb25Qb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL2NyZWF0ZVRvZG8uanMnO1xuaW1wb3J0IHRvZG9DcmVhdGlvblBvcHVwIGZyb20gJy4vdG9kb0NyZWF0aW9uUG9wdXAuanMnO1xuXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBldmVudCBsaXN0ZW5lcnMgYW5kIGFwcGVuZCB0b2RvcyB0byBjb3JyZWN0IHByb2plY3QgY29udGFpbmVyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRUb2RvICgpIHtcbiAgICBsZXQgdG9kb0xpc3RlbmVyQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25ld1RvZG9cIik7XG4gICAgbGV0IHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RvZG9UYXNrQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluR3JpZENvbnRhaW5lclwiKTtcblxuICAgIC8vIC8vZnVuY3Rpb24gdG8gYXBwZW5kIHRoZSB0b2RvIHRvIHRoZSBjb3JyZXNwb25kaW5nIHRvZG8gdGFzayBjb250YWluZXJcbiAgICAvLyBjb25zdCBhZGRUb2RvID0gZnVuY3Rpb24oaSkge1xuICAgIC8vICAgY29uc29sZS5sb2coYFlvdSBjcmVhdGVkIGEgZG8gb24gdGhlICR7aX10aCBjb250YWluZXJgKTtcbiAgICAvLyAgIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXJbaV0uYXBwZW5kQ2hpbGQobmV3IENyZWF0ZVRvZG8odG9kb0NyZWF0aW9uUG9wdXAoKSwgXCJUQkRcIikpO1xuICAgIC8vIH1cblxuICAgIC8vcnVucyB0aHJvdWdoIHRvZG8gYXJyYXkgYW5kIGFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRvZG8gY3JlYXRpb24gZWxlbWVudHMuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0ZW5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vY2hlY2tzIGlmIGFuIGV2ZW50IGxpc3RlbmVyIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQsIGFuZCBhZGRzIG9uZSBpZiBpdCBkb2VzIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGlmICh0b2RvTGlzdGVuZXJBcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcpICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICB0b2RvTGlzdGVuZXJBcnJheVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdG9kb0xpc3RlbmVyQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXZlbnQgaGFzIGJlZW4gYXR0YWNoZWQgdG8gJHtpfWApO1xuICAgICAgICAgICAgICBoZWFkZXJDb250YWluZXJMaXN0ZW5lci5hcHBlbmRDaGlsZCh0b2RvQ3JlYXRpb25Qb3B1cChpKSk7XG4gICAgICAgICAgICAgIC8vIGFkZFRvZG8oaSk7XG4gICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRvZG9MaXN0ZW5lckFycmF5XG59IiwiaW1wb3J0IENyZWF0ZVRvZG8gZnJvbSAnLi9jcmVhdGVUb2RvLmpzJ1xuaW1wb3J0IGFwcGVuZFRvZG8gZnJvbSAnLi9hcHBlbmRUb2RvLmpzJ1xuaW1wb3J0IGRlbGV0ZVRvZG8gZnJvbSAnLi9kZWxldGVUb2RvLmpzJ1xuLy9zaG91bGQgY3JlYXRlIGEgbW9kYWwgcG9wdXAgZm9yIGEgcHJvamVjdCBjcmVhdGlvbiBjYXJkXG4vL2JhY2tncm91bmQgc2hvdWxkIGJlIGNvdmVyZWQgYnkgbW9kYWwgY2FyZCB3aXRoIGEgc2VtaS10cmFuc3BhcmVudCBjb2xvci4gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2plY3QodGl0bGUpIHtcblxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICBcbiAgICBjb25zdCB0b2RvUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJvamVjdC1jb250YWluZXJcIik7XG4gICAgdG9kb1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvUHJvamVjdENvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC10aXRsZS1jb250YWluZXJcIik7XG4gICAgbWFpblByb2plY3RUaXRsZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5Qcm9qZWN0VGl0bGVDb250YWluZXJcIik7XG4gICAgdG9kb1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblByb2plY3RUaXRsZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtYWluUHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3QtdGl0bGVcIik7XG4gICAgbWFpblByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tcHJvamVjdC10aXRsZVwiKTtcbiAgICBtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Qcm9qZWN0VGl0bGUpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnN0IHRvZG9UYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby10YXNrLWNvbnRhaW5lclwiKTtcbiAgICB0b2RvVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9UYXNrQ29udGFpbmVyXCIpO1xuICAgIHRvZG9Qcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UYXNrQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRvZG9DcmVhdGlvbkljb24gPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJ3LTYgaC02IGFkZC10b2RvLWljb25cIiBpZD1cIm5ld1RvZG9cIj4gPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMiA0LjV2MTVtNy41LTcuNWgtMTVcIi8+IDwvc3ZnPic7XG4gICAgbWFpblByb2plY3RUaXRsZUNvbnRhaW5lci5pbm5lckhUTUwgKz0gdG9kb0NyZWF0aW9uSWNvbjtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBwcm9qZWN0IG1vZHVsZSBpcyBob29rZWQgdXBcIilcbiAgICBcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhcHBlbmRUb2RvKCk7XG4gICAgICAgIGRlbGV0ZVRvZG8oKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIFxuICAgIFxuXG4gICAgcmV0dXJuIHRvZG9Qcm9qZWN0Q29udGFpbmVyXG4gICAgIFxuICAgIH1cbiAgICAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUb2RvKHRpdGxlLCBkdWVEYXRlLCBqKSB7XG4gICAgLy93b3VsZCBpdCBiZSBiZXR0ZXIgdG8gaG9sZCB0aGUgYXJyYXkgaGVyZT9cbiAgICBsZXQgdG9kb0xpc3RlbmVyQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25ld1RvZG9cIik7XG4gICAgY29uc3QgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9kb1Rhc2tDb250YWluZXJcIik7XG5cbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblxuICAgIGNvbnN0IHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaW5nbGVUb2RvVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLXRvZG8tdGFzay1jb250YWluZXJcIik7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaW5nbGVUb2RvVGFza0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRvZG9UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvVGFzay5jbGFzc0xpc3QuYWRkKFwidG9kby10YXNrXCIpO1xuICAgIHRvZG9UYXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1Rhc2tcIik7XG4gICAgdG9kb1Rhc2sudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBzaW5nbGVUb2RvVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGFzayk7XG5cbiAgICBjb25zdCBlZGl0SWNvbiA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInctNiBoLTYgdG9kby1pY29uXCIgaWQ9XCJlZGl0VG9kb1wiPiA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE2Ljg2MiA0LjQ4N2wxLjY4Ny0xLjY4OGExLjg3NSAxLjg3NSAwIDExMi42NTIgMi42NTJMMTAuNTgyIDE2LjA3YTQuNSA0LjUgMCAwMS0xLjg5NyAxLjEzTDYgMThsLjgtMi42ODVhNC41IDQuNSAwIDAxMS4xMy0xLjg5N2w4LjkzMi04LjkzMXptMCAwTDE5LjUgNy4xMjVNMTggMTR2NC43NUEyLjI1IDIuMjUgMCAwMTE1Ljc1IDIxSDUuMjVBMi4yNSAyLjI1IDAgMDEzIDE4Ljc1VjguMjVBMi4yNSAyLjI1IDAgMDE1LjI1IDZIMTBcIiAvPiA8L3N2Zz4nO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmlubmVySFRNTCArPSBlZGl0SWNvbjtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJ3LTYgaC02IHRvZG8taWNvblwiIGlkPVwiZGVsZXRlVG9kb1wiPiA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTE0Ljc0IDlsLS4zNDYgOW0tNC43ODggMEw5LjI2IDltOS45NjgtMy4yMWMuMzQyLjA1Mi42ODIuMTA3IDEuMDIyLjE2Nm0tMS4wMjItLjE2NUwxOC4xNiAxOS42NzNhMi4yNSAyLjI1IDAgMDEtMi4yNDQgMi4wNzdIOC4wODRhMi4yNSAyLjI1IDAgMDEtMi4yNDQtMi4wNzdMNC43NzIgNS43OW0xNC40NTYgMGE0OC4xMDggNDguMTA4IDAgMDAtMy40NzgtLjM5N20tMTIgLjU2MmMuMzQtLjA1OS42OC0uMTE0IDEuMDIyLS4xNjVtMCAwYTQ4LjExIDQ4LjExIDAgMDEzLjQ3OC0uMzk3bTcuNSAwdi0uOTE2YzAtMS4xOC0uOTEtMi4xNjQtMi4wOS0yLjIwMWE1MS45NjQgNTEuOTY0IDAgMDAtMy4zMiAwYy0xLjE4LjAzNy0yLjA5IDEuMDIyLTIuMDkgMi4yMDF2LjkxNm03LjUgMGE0OC42NjcgNDguNjY3IDAgMDAtNy41IDBcIiAvPiA8L3N2Zz4nO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmlubmVySFRNTCArPSBkZWxldGVJY29uO1xuXG4gICAgY29uc29sZS5sb2codG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoaSA9PT0gaikge1xuICAgICAgICAgICAgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcltpXS5hcHBlbmRDaGlsZChzaW5nbGVUb2RvVGFza0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJjcmVhdGUgdG9kbyBtb2R1bGUgaXMgaG9va2VkIHVwXCIpO1xuXG4gICAgcmV0dXJuIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyXG4gICAgfVxuICAgICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gICAgbGV0IGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkZWxldGVUb2RvXCIpO1xuICAgIGxldCB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b2RvVGFza0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnNvbGUubG9nKGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5KTtcblxuICAgIC8vZnVuY3Rpb24gdG8gYXBwZW5kIHRoZSB0b2RvIHRvIHRoZSBjb3JyZXNwb25kaW5nIHRvZG8gdGFzayBjb250YWluZXJcbiAgICBjb25zdCByZW1vdmVUb2RvID0gZnVuY3Rpb24oaSkge1xuICAgICAgY29uc29sZS5sb2coYFlvdSBjcmVhdGVkIGEgZG8gb24gdGhlICR7aX10aCBjb250YWluZXJgKTtcbiAgICAgIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXJbaV0ucmVtb3ZlKCk7XG4gICAgICAvL3JlbW92ZXMgdGhlIGl0ZW0gZnJvbSB0aGUgYXJyYXksIGJ1dCBtdXN0IHJlbW92ZSB0aGUgaXRlbSBmcm9tIGFsbCBhcnJheXNcbiAgICAgIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIC8vcnVucyB0aHJvdWdoIHRvZG8gYXJyYXkgYW5kIGFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRvZG8gZGVsZXRpb24gZWxlbWVudHMuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBkZWxldGVUb2RvTGlzdGVuZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAvL2NoZWNrcyBpZiBhbiBldmVudCBsaXN0ZW5lciBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkXG4gICAgICAgIGlmIChkZWxldGVUb2RvTGlzdGVuZXJBcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcpICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICBkZWxldGVUb2RvTGlzdGVuZXJBcnJheVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgZGVsZXRlVG9kb0xpc3RlbmVyQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnQgaGFzIGJlZW4gYXR0YWNoZWQnKTtcbiAgICAgICAgICAgICAgcmVtb3ZlVG9kbyhpKTtcbiAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3RlbmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9jaGVja3MgaWYgYW4gZXZlbnQgbGlzdGVuZXIgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCwgYW5kIGFkZHMgb25lIGlmIGl0IGRvZXMgbm90IGhhdmUgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgaWYgKHRvZG9MaXN0ZW5lckFycmF5W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1jbGlja2VkJykgIT09ICd0cnVlJykge1xuICAgICAgICAgIHRvZG9MaXN0ZW5lckFycmF5W2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1jbGlja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICB0b2RvTGlzdGVuZXJBcnJheVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBldmVudCBoYXMgYmVlbiBhdHRhY2hlZCB0byAke2l9YCk7XG4gICAgICAgICAgICAgIGFkZFRvZG8oaSk7XG4gICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSB0b2RvIFJhblwiKTtcblxuICAgICAgcmV0dXJuIGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5XG59IiwiaW1wb3J0IENyZWF0ZVRvZG8gZnJvbSAnLi9jcmVhdGVUb2RvLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvQ3JlYXRpb25Qb3B1cChqKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gICAgXG4gICAgY29uc3QgbWFpblBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tcG9wdXAtY29udGFpbmVyXCIpO1xuICAgIG1haW5Qb3B1cENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5Qb3B1cENvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHBvcHVwRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1mbGV4LWNvbnRhaW5lclwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3B1cEZsZXhDb250YWluZXJcIik7XG4gICAgbWFpblBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwRmxleENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybUNvbnRhaW5lclwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0b2RvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdG9kb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9JbnB1dFwiKTtcbiAgICB0b2RvTGFiZWwuY2xhc3NMaXN0LmFkZChcInRvZG8tbGFiZWxcIik7XG4gICAgdG9kb0xhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvOlwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xhYmVsKTtcblxuICAgIGNvbnN0IHRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0b2RvSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdG9kb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1pbnB1dFwiKTtcbiAgICB0b2RvSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvSW5wdXRcIik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSW5wdXQpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idG5cIik7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0QnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0lucHV0XCIpLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZVxuICAgIH1cbiAgICBcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2V0SW5wdXRWYWx1ZSgpO1xuICAgICAgICBuZXcgQ3JlYXRlVG9kbyhnZXRJbnB1dFZhbHVlKCksIFwiVGhlIGRhdGVcIiwgailcbiAgICAgICAgbWFpblBvcHVwQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gbWFpblBvcHVwQ29udGFpbmVyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ3JlYXRlUHJvamVjdCBmcm9tICcuL2NyZWF0ZVByb2plY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRpb25Qb3B1cCgpIHtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudENvbnRhaW5lclwiKTtcbiAgICBcbiAgICBjb25zdCBtYWluUG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Qb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wb3B1cC1jb250YWluZXJcIik7XG4gICAgbWFpblBvcHVwQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblBvcHVwQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgcG9wdXBGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvcHVwLWZsZXgtY29udGFpbmVyXCIpO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcHVwRmxleENvbnRhaW5lclwiKTtcbiAgICBtYWluUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXBGbGV4Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtQ29udGFpbmVyXCIpO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZUlucHV0XCIpO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZChcInRpdGxlLWxhYmVsXCIpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgVGl0bGU6XCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1pbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVJbnB1dFwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idG5cIik7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0QnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWVcbiAgICB9XG4gICAgXG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2V0SW5wdXRWYWx1ZSgpO1xuICAgICAgICBtYWluQ29udGVudENvbnRhaW5lckxpc3RlbmVyLmFwcGVuZENoaWxkKG5ldyBDcmVhdGVQcm9qZWN0KGdldElucHV0VmFsdWUoKSkpO1xuICAgICAgICBtYWluUG9wdXBDb250YWluZXIucmVtb3ZlKCk7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBtYWluUG9wdXBDb250YWluZXJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=