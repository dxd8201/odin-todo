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
/* harmony import */ var _deleteTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTodo.js */ "./src/modules/deleteTodo.js");
/* harmony import */ var _todoCreationPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreationPopup.js */ "./src/modules/todoCreationPopup.js");



//function to create event listeners and append todos to correct project container
function appendTodo () {
    let todoListenerArray = document.querySelectorAll("#newTodo");
    const mainGridContainerListener = document.getElementById("mainGridContainer");
    const deleteIconListener = document.querySelectorAll("#deleteTodo");

      //runs through todo array and adds an event listener to all todo creation elements.
      for (let i = 0; i < todoListenerArray.length; i++) {
        //checks if an event listener has already been added, and adds one if it does not have an event listener
        if (todoListenerArray[i].getAttribute('data-event-clicked') !== 'true') {
          todoListenerArray[i].setAttribute('data-event-clicked', 'true');
          todoListenerArray[i].addEventListener('click', function () {
              console.log(`event has been attached to ${i}`);
              mainGridContainerListener.appendChild((0,_todoCreationPopup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i));
         });
        }
      }

      //runs through todo array and adds an event listener to all todo creation elements.
      for (let i = 0; i < deleteIconListener.length; i++) {
        //checks if an event listener has already been added, and adds one if it does not have an event listener
        if (deleteIconListener[i].getAttribute('data-event-clicked') !== 'true') {
         deleteIconListener[i].setAttribute('data-event-clicked', 'true');
          deleteIconListener[i].addEventListener('click', function() {
            console.log("You clicked on the delete icon");
            (0,_deleteTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i);
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
    
    //appends the todo to the correct container
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
function deleteTodo(j) {
    let todoTaskContainerListener = document.querySelectorAll("#todoTaskContainer");
    // let array = array.from(todoTaskContainerListener);

    //function to remove the todo from the corresponding todo task container
    const removeTodo = function(i) {
      console.log(`You deleted a do on the ${i}th container`);
      // todoTaskContainerListener[i].remove();
      //removes the item from the array, but must remove the item from all arrays
      // todoTaskContainerListener.splice(i, 1);

      for(let i = 0; i < todoTaskContainerListener.length; i++) {
        if(i === j) {
          todoTaskContainerListener[i].remove();
          //must convert the nodelist to an array for this code to work
          todoTaskContainerListener.splice(i, 1);
        }
      }
    }

    removeTodo(j);

      console.log("delete todo Ran");

      return todoTaskContainerListener
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
/* harmony import */ var _appendTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendTodo.js */ "./src/modules/appendTodo.js");



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
        new _createTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"](getInputValue(), "The date", j);
        (0,_appendTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdENyZWF0aW9uUG9wdXAubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7O0FBRXZEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEVBQUU7QUFDMUQsb0RBQW9ELGlFQUFpQjtBQUNyRSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQVU7QUFDdEIsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3dDO0FBQ0E7QUFDQTtBQUN4QztBQUNBOztBQUVlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwyREFBVTtBQUNsQixRQUFRLDBEQUFVO0FBQ2xCLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlDZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNDQUFzQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLEVBQUU7QUFDL0M7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixzQ0FBc0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCeUM7QUFDQTs7QUFFMUI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBVTtBQUN0QixRQUFRLDBEQUFVO0FBQ2xCO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7Ozs7O1VDdERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRWhDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQseURBQWE7QUFDbEU7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9hcHBlbmRUb2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvY3JlYXRlVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9kZWxldGVUb2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3RvZG9DcmVhdGlvblBvcHVwLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3RDcmVhdGlvblBvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWxldGVUb2RvIGZyb20gJy4vZGVsZXRlVG9kby5qcyc7XG5pbXBvcnQgdG9kb0NyZWF0aW9uUG9wdXAgZnJvbSAnLi90b2RvQ3JlYXRpb25Qb3B1cC5qcyc7XG5cbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGV2ZW50IGxpc3RlbmVycyBhbmQgYXBwZW5kIHRvZG9zIHRvIGNvcnJlY3QgcHJvamVjdCBjb250YWluZXJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFRvZG8gKCkge1xuICAgIGxldCB0b2RvTGlzdGVuZXJBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbmV3VG9kb1wiKTtcbiAgICBjb25zdCBtYWluR3JpZENvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluR3JpZENvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkZWxldGVJY29uTGlzdGVuZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2RlbGV0ZVRvZG9cIik7XG5cbiAgICAgIC8vcnVucyB0aHJvdWdoIHRvZG8gYXJyYXkgYW5kIGFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRvZG8gY3JlYXRpb24gZWxlbWVudHMuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0ZW5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vY2hlY2tzIGlmIGFuIGV2ZW50IGxpc3RlbmVyIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQsIGFuZCBhZGRzIG9uZSBpZiBpdCBkb2VzIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGlmICh0b2RvTGlzdGVuZXJBcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcpICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICB0b2RvTGlzdGVuZXJBcnJheVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgdG9kb0xpc3RlbmVyQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBldmVudCBoYXMgYmVlbiBhdHRhY2hlZCB0byAke2l9YCk7XG4gICAgICAgICAgICAgIG1haW5HcmlkQ29udGFpbmVyTGlzdGVuZXIuYXBwZW5kQ2hpbGQodG9kb0NyZWF0aW9uUG9wdXAoaSkpO1xuICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9ydW5zIHRocm91Z2ggdG9kbyBhcnJheSBhbmQgYWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhbGwgdG9kbyBjcmVhdGlvbiBlbGVtZW50cy5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlSWNvbkxpc3RlbmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vY2hlY2tzIGlmIGFuIGV2ZW50IGxpc3RlbmVyIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQsIGFuZCBhZGRzIG9uZSBpZiBpdCBkb2VzIG5vdCBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGlmIChkZWxldGVJY29uTGlzdGVuZXJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWNsaWNrZWQnKSAhPT0gJ3RydWUnKSB7XG4gICAgICAgICBkZWxldGVJY29uTGlzdGVuZXJbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWNsaWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIGRlbGV0ZUljb25MaXN0ZW5lcltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgY2xpY2tlZCBvbiB0aGUgZGVsZXRlIGljb25cIik7XG4gICAgICAgICAgICBkZWxldGVUb2RvKGkpO1xuICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9kb0xpc3RlbmVyQXJyYXlcbn0iLCJpbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL2NyZWF0ZVRvZG8uanMnXG5pbXBvcnQgYXBwZW5kVG9kbyBmcm9tICcuL2FwcGVuZFRvZG8uanMnXG5pbXBvcnQgZGVsZXRlVG9kbyBmcm9tICcuL2RlbGV0ZVRvZG8uanMnXG4vL3Nob3VsZCBjcmVhdGUgYSBtb2RhbCBwb3B1cCBmb3IgYSBwcm9qZWN0IGNyZWF0aW9uIGNhcmRcbi8vYmFja2dyb3VuZCBzaG91bGQgYmUgY292ZXJlZCBieSBtb2RhbCBjYXJkIHdpdGggYSBzZW1pLXRyYW5zcGFyZW50IGNvbG9yLiBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvamVjdCh0aXRsZSkge1xuXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIFxuICAgIGNvbnN0IHRvZG9Qcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICB0b2RvUHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9Qcm9qZWN0Q29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbWFpblByb2plY3RUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblByb2plY3RUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblByb2plY3RUaXRsZUNvbnRhaW5lclwiKTtcbiAgICB0b2RvUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1haW5Qcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC10aXRsZVwiKTtcbiAgICBtYWluUHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1wcm9qZWN0LXRpdGxlXCIpO1xuICAgIG1haW5Qcm9qZWN0VGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblByb2plY3RUaXRsZSk7XG4gICAgbWFpblByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgY29uc3QgdG9kb1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9UYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRhc2stY29udGFpbmVyXCIpO1xuICAgIHRvZG9UYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1Rhc2tDb250YWluZXJcIik7XG4gICAgdG9kb1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1Rhc2tDb250YWluZXIpO1xuXG4gICAgY29uc3QgdG9kb0NyZWF0aW9uSWNvbiA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInctNiBoLTYgYWRkLXRvZG8taWNvblwiIGlkPVwibmV3VG9kb1wiPiA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDQuNXYxNW03LjUtNy41aC0xNVwiLz4gPC9zdmc+JztcbiAgICBtYWluUHJvamVjdFRpdGxlQ29udGFpbmVyLmlubmVySFRNTCArPSB0b2RvQ3JlYXRpb25JY29uO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHByb2plY3QgbW9kdWxlIGlzIGhvb2tlZCB1cFwiKVxuICAgIFxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFwcGVuZFRvZG8oKTtcbiAgICAgICAgZGVsZXRlVG9kbygpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgXG4gICAgXG5cbiAgICByZXR1cm4gdG9kb1Byb2plY3RDb250YWluZXJcbiAgICAgXG4gICAgfVxuICAgICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRvZG8odGl0bGUsIGR1ZURhdGUsIGopIHtcbiAgICBjb25zdCB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b2RvVGFza0NvbnRhaW5lclwiKTtcbiAgICBcblxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXG4gICAgY29uc3Qgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtdG9kby10YXNrLWNvbnRhaW5lclwiKTtcbiAgICBzaW5nbGVUb2RvVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpbmdsZVRvZG9UYXNrQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdG9kb1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9UYXNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRhc2tcIik7XG4gICAgdG9kb1Rhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvVGFza1wiKTtcbiAgICB0b2RvVGFzay50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UYXNrKTtcblxuICAgIGNvbnN0IGVkaXRJY29uID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy02IGgtNiB0b2RvLWljb25cIiBpZD1cImVkaXRUb2RvXCI+IDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTYuODYyIDQuNDg3bDEuNjg3LTEuNjg4YTEuODc1IDEuODc1IDAgMTEyLjY1MiAyLjY1MkwxMC41ODIgMTYuMDdhNC41IDQuNSAwIDAxLTEuODk3IDEuMTNMNiAxOGwuOC0yLjY4NWE0LjUgNC41IDAgMDExLjEzLTEuODk3bDguOTMyLTguOTMxem0wIDBMMTkuNSA3LjEyNU0xOCAxNHY0Ljc1QTIuMjUgMi4yNSAwIDAxMTUuNzUgMjFINS4yNUEyLjI1IDIuMjUgMCAwMTMgMTguNzVWOC4yNUEyLjI1IDIuMjUgMCAwMTUuMjUgNkgxMFwiIC8+IDwvc3ZnPic7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGVkaXRJY29uO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInctNiBoLTYgdG9kby1pY29uXCIgaWQ9XCJkZWxldGVUb2RvXCI+IDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTQuNzQgOWwtLjM0NiA5bS00Ljc4OCAwTDkuMjYgOW05Ljk2OC0zLjIxYy4zNDIuMDUyLjY4Mi4xMDcgMS4wMjIuMTY2bS0xLjAyMi0uMTY1TDE4LjE2IDE5LjY3M2EyLjI1IDIuMjUgMCAwMS0yLjI0NCAyLjA3N0g4LjA4NGEyLjI1IDIuMjUgMCAwMS0yLjI0NC0yLjA3N0w0Ljc3MiA1Ljc5bTE0LjQ1NiAwYTQ4LjEwOCA0OC4xMDggMCAwMC0zLjQ3OC0uMzk3bS0xMiAuNTYyYy4zNC0uMDU5LjY4LS4xMTQgMS4wMjItLjE2NW0wIDBhNDguMTEgNDguMTEgMCAwMTMuNDc4LS4zOTdtNy41IDB2LS45MTZjMC0xLjE4LS45MS0yLjE2NC0yLjA5LTIuMjAxYTUxLjk2NCA1MS45NjQgMCAwMC0zLjMyIDBjLTEuMTguMDM3LTIuMDkgMS4wMjItMi4wOSAyLjIwMXYuOTE2bTcuNSAwYTQ4LjY2NyA0OC42NjcgMCAwMC03LjUgMFwiIC8+IDwvc3ZnPic7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGRlbGV0ZUljb247XG4gICAgXG4gICAgLy9hcHBlbmRzIHRoZSB0b2RvIHRvIHRoZSBjb3JyZWN0IGNvbnRhaW5lclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA9PT0gaikge1xuICAgICAgICAgICAgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcltpXS5hcHBlbmRDaGlsZChzaW5nbGVUb2RvVGFza0NvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSB0b2RvIG1vZHVsZSBpcyBob29rZWQgdXBcIik7XG5cbiAgICByZXR1cm4gc2luZ2xlVG9kb1Rhc2tDb250YWluZXJcbiAgICB9XG4gICAgIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVG9kbyhqKSB7XG4gICAgbGV0IHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RvZG9UYXNrQ29udGFpbmVyXCIpO1xuICAgIC8vIGxldCBhcnJheSA9IGFycmF5LmZyb20odG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcik7XG5cbiAgICAvL2Z1bmN0aW9uIHRvIHJlbW92ZSB0aGUgdG9kbyBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIHRvZG8gdGFzayBjb250YWluZXJcbiAgICBjb25zdCByZW1vdmVUb2RvID0gZnVuY3Rpb24oaSkge1xuICAgICAgY29uc29sZS5sb2coYFlvdSBkZWxldGVkIGEgZG8gb24gdGhlICR7aX10aCBjb250YWluZXJgKTtcbiAgICAgIC8vIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXJbaV0ucmVtb3ZlKCk7XG4gICAgICAvL3JlbW92ZXMgdGhlIGl0ZW0gZnJvbSB0aGUgYXJyYXksIGJ1dCBtdXN0IHJlbW92ZSB0aGUgaXRlbSBmcm9tIGFsbCBhcnJheXNcbiAgICAgIC8vIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIuc3BsaWNlKGksIDEpO1xuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihpID09PSBqKSB7XG4gICAgICAgICAgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcltpXS5yZW1vdmUoKTtcbiAgICAgICAgICAvL211c3QgY29udmVydCB0aGUgbm9kZWxpc3QgdG8gYW4gYXJyYXkgZm9yIHRoaXMgY29kZSB0byB3b3JrXG4gICAgICAgICAgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUb2RvKGopO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSB0b2RvIFJhblwiKTtcblxuICAgICAgcmV0dXJuIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXJcbn0iLCJpbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL2NyZWF0ZVRvZG8uanMnO1xuaW1wb3J0IGFwcGVuZFRvZG8gZnJvbSAnLi9hcHBlbmRUb2RvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0NyZWF0aW9uUG9wdXAoaikge1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyTGlzdGVuZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50Q29udGFpbmVyXCIpO1xuICAgIFxuICAgIGNvbnN0IG1haW5Qb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLXBvcHVwLWNvbnRhaW5lclwiKTtcbiAgICBtYWluUG9wdXBDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluUG9wdXBDb250YWluZXJcIik7XG5cbiAgICBjb25zdCBwb3B1cEZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicG9wdXAtZmxleC1jb250YWluZXJcIik7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wdXBGbGV4Q29udGFpbmVyXCIpO1xuICAgIG1haW5Qb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cEZsZXhDb250YWluZXIpO1xuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG4gICAgZm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1Db250YWluZXJcIik7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4gICAgY29uc3QgdG9kb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRvZG9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvSW5wdXRcIik7XG4gICAgdG9kb0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxhYmVsXCIpO1xuICAgIHRvZG9MYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbzpcIjtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MYWJlbCk7XG5cbiAgICBjb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdG9kb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRvZG9JbnB1dC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtaW5wdXRcIik7XG4gICAgdG9kb0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb0lucHV0XCIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0lucHV0KTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdEJ0blwiKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9JbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWVcbiAgICB9XG4gICAgXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdldElucHV0VmFsdWUoKTtcbiAgICAgICAgbmV3IENyZWF0ZVRvZG8oZ2V0SW5wdXRWYWx1ZSgpLCBcIlRoZSBkYXRlXCIsIGopO1xuICAgICAgICBhcHBlbmRUb2RvKCk7XG4gICAgICAgIG1haW5Qb3B1cENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIG1haW5Qb3B1cENvbnRhaW5lclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENyZWF0ZVByb2plY3QgZnJvbSAnLi9jcmVhdGVQcm9qZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdENyZWF0aW9uUG9wdXAoKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRDb250YWluZXJcIik7XG4gICAgXG4gICAgY29uc3QgbWFpblBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tcG9wdXAtY29udGFpbmVyXCIpO1xuICAgIG1haW5Qb3B1cENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5Qb3B1cENvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHBvcHVwRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wdXBGbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1mbGV4LWNvbnRhaW5lclwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3B1cEZsZXhDb250YWluZXJcIik7XG4gICAgbWFpblBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwRmxleENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybUNvbnRhaW5lclwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVJbnB1dFwiKTtcbiAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1sYWJlbFwiKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IFRpdGxlOlwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlSW5wdXRcIik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdEJ0blwiKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0VmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlXG4gICAgfVxuICAgIFxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdldElucHV0VmFsdWUoKTtcbiAgICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJMaXN0ZW5lci5hcHBlbmRDaGlsZChuZXcgQ3JlYXRlUHJvamVjdChnZXRJbnB1dFZhbHVlKCkpKTtcbiAgICAgICAgbWFpblBvcHVwQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gbWFpblBvcHVwQ29udGFpbmVyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9