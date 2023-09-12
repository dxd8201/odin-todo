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
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
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
    
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvamVjdC5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDYzs7QUFFdkQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsRUFBRTtBQUMxRCxrREFBa0QsaUVBQWlCO0FBQ25FO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVCZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzQ0FBc0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ2U7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxQ0FBcUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxFQUFFO0FBQzFEO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEN3Qzs7QUFFekI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBVTtBQUN0QjtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7Ozs7OztVQ3BEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDQTtBQUNBO0FBQ3hDO0FBQ0E7O0FBRWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDJEQUFVO0FBQ2xCLFFBQVEsMERBQVU7QUFDbEIsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL2FwcGVuZFRvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvY3JlYXRlVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9kZWxldGVUb2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3RvZG9DcmVhdGlvblBvcHVwLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWF0ZVRvZG8gZnJvbSAnLi9jcmVhdGVUb2RvLmpzJztcbmltcG9ydCB0b2RvQ3JlYXRpb25Qb3B1cCBmcm9tICcuL3RvZG9DcmVhdGlvblBvcHVwLmpzJztcblxuLy9mdW5jdGlvbiB0byBjcmVhdGUgZXZlbnQgbGlzdGVuZXJzIGFuZCBhcHBlbmQgdG9kb3MgdG8gY29ycmVjdCBwcm9qZWN0IGNvbnRhaW5lclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kVG9kbyAoKSB7XG4gICAgbGV0IHRvZG9MaXN0ZW5lckFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNuZXdUb2RvXCIpO1xuICAgIGxldCB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b2RvVGFza0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkdyaWRDb250YWluZXJcIik7XG5cbiAgICAvLyAvL2Z1bmN0aW9uIHRvIGFwcGVuZCB0aGUgdG9kbyB0byB0aGUgY29ycmVzcG9uZGluZyB0b2RvIHRhc2sgY29udGFpbmVyXG4gICAgLy8gY29uc3QgYWRkVG9kbyA9IGZ1bmN0aW9uKGkpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGBZb3UgY3JlYXRlZCBhIGRvIG9uIHRoZSAke2l9dGggY29udGFpbmVyYCk7XG4gICAgLy8gICB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyW2ldLmFwcGVuZENoaWxkKG5ldyBDcmVhdGVUb2RvKHRvZG9DcmVhdGlvblBvcHVwKCksIFwiVEJEXCIpKTtcbiAgICAvLyB9XG5cbiAgICAvL3J1bnMgdGhyb3VnaCB0b2RvIGFycmF5IGFuZCBhZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0b2RvIGNyZWF0aW9uIGVsZW1lbnRzLlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdGVuZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAvL2NoZWNrcyBpZiBhbiBldmVudCBsaXN0ZW5lciBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkLCBhbmQgYWRkcyBvbmUgaWYgaXQgZG9lcyBub3QgaGF2ZSBhbiBldmVudCBsaXN0ZW5lclxuICAgICAgICBpZiAodG9kb0xpc3RlbmVyQXJyYXlbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWNsaWNrZWQnKSAhPT0gJ3RydWUnKSB7XG4gICAgICAgICAgdG9kb0xpc3RlbmVyQXJyYXlbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWNsaWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIHRvZG9MaXN0ZW5lckFycmF5W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYGV2ZW50IGhhcyBiZWVuIGF0dGFjaGVkIHRvICR7aX1gKTtcbiAgICAgICAgICAgICAgaGVhZGVyQ29udGFpbmVyTGlzdGVuZXIuYXBwZW5kQ2hpbGQodG9kb0NyZWF0aW9uUG9wdXAoaSkpO1xuICAgICAgICAgICAgICAvLyBhZGRUb2RvKGkpO1xuICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2RvTGlzdGVuZXJBcnJheVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRvZG8odGl0bGUsIGR1ZURhdGUsIGopIHtcbiAgICAvL3dvdWxkIGl0IGJlIGJldHRlciB0byBob2xkIHRoZSBhcnJheSBoZXJlP1xuICAgIGxldCB0b2RvTGlzdGVuZXJBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbmV3VG9kb1wiKTtcbiAgICBjb25zdCB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b2RvVGFza0NvbnRhaW5lclwiKTtcblxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXG4gICAgY29uc3Qgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtdG9kby10YXNrLWNvbnRhaW5lclwiKTtcbiAgICBzaW5nbGVUb2RvVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpbmdsZVRvZG9UYXNrQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdG9kb1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9UYXNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRhc2tcIik7XG4gICAgdG9kb1Rhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvVGFza1wiKTtcbiAgICB0b2RvVGFzay50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UYXNrKTtcblxuICAgIGNvbnN0IGVkaXRJY29uID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy02IGgtNiB0b2RvLWljb25cIiBpZD1cImVkaXRUb2RvXCI+IDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTYuODYyIDQuNDg3bDEuNjg3LTEuNjg4YTEuODc1IDEuODc1IDAgMTEyLjY1MiAyLjY1MkwxMC41ODIgMTYuMDdhNC41IDQuNSAwIDAxLTEuODk3IDEuMTNMNiAxOGwuOC0yLjY4NWE0LjUgNC41IDAgMDExLjEzLTEuODk3bDguOTMyLTguOTMxem0wIDBMMTkuNSA3LjEyNU0xOCAxNHY0Ljc1QTIuMjUgMi4yNSAwIDAxMTUuNzUgMjFINS4yNUEyLjI1IDIuMjUgMCAwMTMgMTguNzVWOC4yNUEyLjI1IDIuMjUgMCAwMTUuMjUgNkgxMFwiIC8+IDwvc3ZnPic7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGVkaXRJY29uO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInctNiBoLTYgdG9kby1pY29uXCIgaWQ9XCJkZWxldGVUb2RvXCI+IDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTQuNzQgOWwtLjM0NiA5bS00Ljc4OCAwTDkuMjYgOW05Ljk2OC0zLjIxYy4zNDIuMDUyLjY4Mi4xMDcgMS4wMjIuMTY2bS0xLjAyMi0uMTY1TDE4LjE2IDE5LjY3M2EyLjI1IDIuMjUgMCAwMS0yLjI0NCAyLjA3N0g4LjA4NGEyLjI1IDIuMjUgMCAwMS0yLjI0NC0yLjA3N0w0Ljc3MiA1Ljc5bTE0LjQ1NiAwYTQ4LjEwOCA0OC4xMDggMCAwMC0zLjQ3OC0uMzk3bS0xMiAuNTYyYy4zNC0uMDU5LjY4LS4xMTQgMS4wMjItLjE2NW0wIDBhNDguMTEgNDguMTEgMCAwMTMuNDc4LS4zOTdtNy41IDB2LS45MTZjMC0xLjE4LS45MS0yLjE2NC0yLjA5LTIuMjAxYTUxLjk2NCA1MS45NjQgMCAwMC0zLjMyIDBjLTEuMTguMDM3LTIuMDkgMS4wMjItMi4wOSAyLjIwMXYuOTE2bTcuNSAwYTQ4LjY2NyA0OC42NjcgMCAwMC03LjUgMFwiIC8+IDwvc3ZnPic7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGRlbGV0ZUljb247XG5cbiAgICBjb25zb2xlLmxvZyh0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChpID09PSBqKSB7XG4gICAgICAgICAgICB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyW2ldLmFwcGVuZENoaWxkKHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSB0b2RvIG1vZHVsZSBpcyBob29rZWQgdXBcIik7XG5cbiAgICByZXR1cm4gc2luZ2xlVG9kb1Rhc2tDb250YWluZXJcbiAgICB9XG4gICAgIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICBsZXQgZGVsZXRlVG9kb0xpc3RlbmVyQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2RlbGV0ZVRvZG9cIik7XG4gICAgbGV0IHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RvZG9UYXNrQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc29sZS5sb2coZGVsZXRlVG9kb0xpc3RlbmVyQXJyYXkpO1xuXG4gICAgLy9mdW5jdGlvbiB0byBhcHBlbmQgdGhlIHRvZG8gdG8gdGhlIGNvcnJlc3BvbmRpbmcgdG9kbyB0YXNrIGNvbnRhaW5lclxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSBmdW5jdGlvbihpKSB7XG4gICAgICBjb25zb2xlLmxvZyhgWW91IGNyZWF0ZWQgYSBkbyBvbiB0aGUgJHtpfXRoIGNvbnRhaW5lcmApO1xuICAgICAgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcltpXS5yZW1vdmUoKTtcbiAgICAgIC8vcmVtb3ZlcyB0aGUgaXRlbSBmcm9tIHRoZSBhcnJheSwgYnV0IG11c3QgcmVtb3ZlIHRoZSBpdGVtIGZyb20gYWxsIGFycmF5c1xuICAgICAgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lci5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gICAgLy9ydW5zIHRocm91Z2ggdG9kbyBhcnJheSBhbmQgYWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhbGwgdG9kbyBkZWxldGlvbiBlbGVtZW50cy5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vY2hlY2tzIGlmIGFuIGV2ZW50IGxpc3RlbmVyIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWRcbiAgICAgICAgaWYgKGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1jbGlja2VkJykgIT09ICd0cnVlJykge1xuICAgICAgICAgIGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5W2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1jbGlja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICBkZWxldGVUb2RvTGlzdGVuZXJBcnJheVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdldmVudCBoYXMgYmVlbiBhdHRhY2hlZCcpO1xuICAgICAgICAgICAgICByZW1vdmVUb2RvKGkpO1xuICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdGVuZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAvL2NoZWNrcyBpZiBhbiBldmVudCBsaXN0ZW5lciBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkLCBhbmQgYWRkcyBvbmUgaWYgaXQgZG9lcyBub3QgaGF2ZSBhbiBldmVudCBsaXN0ZW5lclxuICAgICAgICBpZiAodG9kb0xpc3RlbmVyQXJyYXlbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWNsaWNrZWQnKSAhPT0gJ3RydWUnKSB7XG4gICAgICAgICAgdG9kb0xpc3RlbmVyQXJyYXlbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWNsaWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIHRvZG9MaXN0ZW5lckFycmF5W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYGV2ZW50IGhhcyBiZWVuIGF0dGFjaGVkIHRvICR7aX1gKTtcbiAgICAgICAgICAgICAgYWRkVG9kbyhpKTtcbiAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlIHRvZG8gUmFuXCIpO1xuXG4gICAgICByZXR1cm4gZGVsZXRlVG9kb0xpc3RlbmVyQXJyYXlcbn0iLCJpbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL2NyZWF0ZVRvZG8uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9DcmVhdGlvblBvcHVwKGopIHtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudENvbnRhaW5lclwiKTtcbiAgICBcbiAgICBjb25zdCBtYWluUG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Qb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wb3B1cC1jb250YWluZXJcIik7XG4gICAgbWFpblBvcHVwQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblBvcHVwQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgcG9wdXBGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvcHVwLWZsZXgtY29udGFpbmVyXCIpO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcHVwRmxleENvbnRhaW5lclwiKTtcbiAgICBtYWluUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXBGbGV4Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtQ29udGFpbmVyXCIpO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRvZG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0b2RvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb0lucHV0XCIpO1xuICAgIHRvZG9MYWJlbC5jbGFzc0xpc3QuYWRkKFwidG9kby1sYWJlbFwiKTtcbiAgICB0b2RvTGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG86XCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGFiZWwpO1xuXG4gICAgY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b2RvSW5wdXQuY2xhc3NMaXN0LmFkZChcInBvcHVwLWlucHV0XCIpO1xuICAgIHRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9JbnB1dFwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JbnB1dCk7XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ0blwiKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXRCdG5cIik7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIGZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvSW5wdXRcIikudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0VmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlXG4gICAgfVxuICAgIFxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBnZXRJbnB1dFZhbHVlKCk7XG4gICAgICAgIG5ldyBDcmVhdGVUb2RvKGdldElucHV0VmFsdWUoKSwgXCJUaGUgZGF0ZVwiLCBqKVxuICAgICAgICBtYWluUG9wdXBDb250YWluZXIucmVtb3ZlKCk7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBtYWluUG9wdXBDb250YWluZXJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDcmVhdGVUb2RvIGZyb20gJy4vY3JlYXRlVG9kby5qcydcbmltcG9ydCBhcHBlbmRUb2RvIGZyb20gJy4vYXBwZW5kVG9kby5qcydcbmltcG9ydCBkZWxldGVUb2RvIGZyb20gJy4vZGVsZXRlVG9kby5qcydcbi8vc2hvdWxkIGNyZWF0ZSBhIG1vZGFsIHBvcHVwIGZvciBhIHByb2plY3QgY3JlYXRpb24gY2FyZFxuLy9iYWNrZ3JvdW5kIHNob3VsZCBiZSBjb3ZlcmVkIGJ5IG1vZGFsIGNhcmQgd2l0aCBhIHNlbWktdHJhbnNwYXJlbnQgY29sb3IuIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVQcm9qZWN0KHRpdGxlKSB7XG5cbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgXG4gICAgY29uc3QgdG9kb1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9Qcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIHRvZG9Qcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1Byb2plY3RDb250YWluZXJcIik7XG5cbiAgICBjb25zdCBtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3QtdGl0bGUtY29udGFpbmVyXCIpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyXCIpO1xuICAgIHRvZG9Qcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIpO1xuXG4gICAgY29uc3QgbWFpblByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LXRpdGxlXCIpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLXByb2plY3QtdGl0bGVcIik7XG4gICAgbWFpblByb2plY3RUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUHJvamVjdFRpdGxlKTtcbiAgICBtYWluUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb25zdCB0b2RvVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tdGFzay1jb250YWluZXJcIik7XG4gICAgdG9kb1Rhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvVGFza0NvbnRhaW5lclwiKTtcbiAgICB0b2RvUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGFza0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0b2RvQ3JlYXRpb25JY29uID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy02IGgtNiBhZGQtdG9kby1pY29uXCIgaWQ9XCJuZXdUb2RvXCI+IDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgNC41djE1bTcuNS03LjVoLTE1XCIvPiA8L3N2Zz4nO1xuICAgIG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIuaW5uZXJIVE1MICs9IHRvZG9DcmVhdGlvbkljb247XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJjcmVhdGUgcHJvamVjdCBtb2R1bGUgaXMgaG9va2VkIHVwXCIpXG4gICAgXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYXBwZW5kVG9kbygpO1xuICAgICAgICBkZWxldGVUb2RvKCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICBcbiAgICBcblxuICAgIHJldHVybiB0b2RvUHJvamVjdENvbnRhaW5lclxuICAgICBcbiAgICB9XG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9