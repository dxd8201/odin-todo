/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!***********************************!*\
  !*** ./src/modules/appendTodo.js ***!
  \***********************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kVG9kby5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isc0NBQXNDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JDd0M7O0FBRXpCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVU7QUFDdEI7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOzs7Ozs7VUNwREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDYzs7QUFFdkQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsRUFBRTtBQUMxRCxrREFBa0QsaUVBQWlCO0FBQ25FO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kdWxlcy9jcmVhdGVUb2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL3RvZG9DcmVhdGlvblBvcHVwLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL2FwcGVuZFRvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlVG9kbyh0aXRsZSwgZHVlRGF0ZSwgaikge1xuICAgIC8vd291bGQgaXQgYmUgYmV0dGVyIHRvIGhvbGQgdGhlIGFycmF5IGhlcmU/XG4gICAgbGV0IHRvZG9MaXN0ZW5lckFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNuZXdUb2RvXCIpO1xuICAgIGNvbnN0IHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RvZG9UYXNrQ29udGFpbmVyXCIpO1xuXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG5cbiAgICBjb25zdCBzaW5nbGVUb2RvVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNpbmdsZS10b2RvLXRhc2stY29udGFpbmVyXCIpO1xuICAgIHNpbmdsZVRvZG9UYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2luZ2xlVG9kb1Rhc2tDb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0b2RvVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb1Rhc2suY2xhc3NMaXN0LmFkZChcInRvZG8tdGFza1wiKTtcbiAgICB0b2RvVGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9UYXNrXCIpO1xuICAgIHRvZG9UYXNrLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgc2luZ2xlVG9kb1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1Rhc2spO1xuXG4gICAgY29uc3QgZWRpdEljb24gPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJ3LTYgaC02IHRvZG8taWNvblwiIGlkPVwiZWRpdFRvZG9cIj4gPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk0xNi44NjIgNC40ODdsMS42ODctMS42ODhhMS44NzUgMS44NzUgMCAxMTIuNjUyIDIuNjUyTDEwLjU4MiAxNi4wN2E0LjUgNC41IDAgMDEtMS44OTcgMS4xM0w2IDE4bC44LTIuNjg1YTQuNSA0LjUgMCAwMTEuMTMtMS44OTdsOC45MzItOC45MzF6bTAgMEwxOS41IDcuMTI1TTE4IDE0djQuNzVBMi4yNSAyLjI1IDAgMDExNS43NSAyMUg1LjI1QTIuMjUgMi4yNSAwIDAxMyAxOC43NVY4LjI1QTIuMjUgMi4yNSAwIDAxNS4yNSA2SDEwXCIgLz4gPC9zdmc+JztcbiAgICBzaW5nbGVUb2RvVGFza0NvbnRhaW5lci5pbm5lckhUTUwgKz0gZWRpdEljb247XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy02IGgtNiB0b2RvLWljb25cIiBpZD1cImRlbGV0ZVRvZG9cIj4gPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk0xNC43NCA5bC0uMzQ2IDltLTQuNzg4IDBMOS4yNiA5bTkuOTY4LTMuMjFjLjM0Mi4wNTIuNjgyLjEwNyAxLjAyMi4xNjZtLTEuMDIyLS4xNjVMMTguMTYgMTkuNjczYTIuMjUgMi4yNSAwIDAxLTIuMjQ0IDIuMDc3SDguMDg0YTIuMjUgMi4yNSAwIDAxLTIuMjQ0LTIuMDc3TDQuNzcyIDUuNzltMTQuNDU2IDBhNDguMTA4IDQ4LjEwOCAwIDAwLTMuNDc4LS4zOTdtLTEyIC41NjJjLjM0LS4wNTkuNjgtLjExNCAxLjAyMi0uMTY1bTAgMGE0OC4xMSA0OC4xMSAwIDAxMy40NzgtLjM5N203LjUgMHYtLjkxNmMwLTEuMTgtLjkxLTIuMTY0LTIuMDktMi4yMDFhNTEuOTY0IDUxLjk2NCAwIDAwLTMuMzIgMGMtMS4xOC4wMzctMi4wOSAxLjAyMi0yLjA5IDIuMjAxdi45MTZtNy41IDBhNDguNjY3IDQ4LjY2NyAwIDAwLTcuNSAwXCIgLz4gPC9zdmc+JztcbiAgICBzaW5nbGVUb2RvVGFza0NvbnRhaW5lci5pbm5lckhUTUwgKz0gZGVsZXRlSWNvbjtcblxuICAgIGNvbnNvbGUubG9nKHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICBcbiAgICAgICAgaWYgKGkgPT09IGopIHtcbiAgICAgICAgICAgIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXJbaV0uYXBwZW5kQ2hpbGQoc2luZ2xlVG9kb1Rhc2tDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHRvZG8gbW9kdWxlIGlzIGhvb2tlZCB1cFwiKTtcblxuICAgIHJldHVybiBzaW5nbGVUb2RvVGFza0NvbnRhaW5lclxuICAgIH1cbiAgICAiLCJpbXBvcnQgQ3JlYXRlVG9kbyBmcm9tICcuL2NyZWF0ZVRvZG8uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9DcmVhdGlvblBvcHVwKGopIHtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudENvbnRhaW5lclwiKTtcbiAgICBcbiAgICBjb25zdCBtYWluUG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Qb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wb3B1cC1jb250YWluZXJcIik7XG4gICAgbWFpblBvcHVwQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblBvcHVwQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgcG9wdXBGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvcHVwLWZsZXgtY29udGFpbmVyXCIpO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcHVwRmxleENvbnRhaW5lclwiKTtcbiAgICBtYWluUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXBGbGV4Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtQ29udGFpbmVyXCIpO1xuICAgIHBvcHVwRmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRvZG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0b2RvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb0lucHV0XCIpO1xuICAgIHRvZG9MYWJlbC5jbGFzc0xpc3QuYWRkKFwidG9kby1sYWJlbFwiKTtcbiAgICB0b2RvTGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG86XCI7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGFiZWwpO1xuXG4gICAgY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0b2RvSW5wdXQuY2xhc3NMaXN0LmFkZChcInBvcHVwLWlucHV0XCIpO1xuICAgIHRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9JbnB1dFwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JbnB1dCk7XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ0blwiKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXRCdG5cIik7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBwb3B1cEZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIGZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvSW5wdXRcIikudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0VmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlXG4gICAgfVxuICAgIFxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBnZXRJbnB1dFZhbHVlKCk7XG4gICAgICAgIG5ldyBDcmVhdGVUb2RvKGdldElucHV0VmFsdWUoKSwgXCJUaGUgZGF0ZVwiLCBqKVxuICAgICAgICBtYWluUG9wdXBDb250YWluZXIucmVtb3ZlKCk7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBtYWluUG9wdXBDb250YWluZXJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDcmVhdGVUb2RvIGZyb20gJy4vY3JlYXRlVG9kby5qcyc7XG5pbXBvcnQgdG9kb0NyZWF0aW9uUG9wdXAgZnJvbSAnLi90b2RvQ3JlYXRpb25Qb3B1cC5qcyc7XG5cbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGV2ZW50IGxpc3RlbmVycyBhbmQgYXBwZW5kIHRvZG9zIHRvIGNvcnJlY3QgcHJvamVjdCBjb250YWluZXJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFRvZG8gKCkge1xuICAgIGxldCB0b2RvTGlzdGVuZXJBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbmV3VG9kb1wiKTtcbiAgICBsZXQgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9kb1Rhc2tDb250YWluZXJcIik7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyTGlzdGVuZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5HcmlkQ29udGFpbmVyXCIpO1xuXG4gICAgLy8gLy9mdW5jdGlvbiB0byBhcHBlbmQgdGhlIHRvZG8gdG8gdGhlIGNvcnJlc3BvbmRpbmcgdG9kbyB0YXNrIGNvbnRhaW5lclxuICAgIC8vIGNvbnN0IGFkZFRvZG8gPSBmdW5jdGlvbihpKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhgWW91IGNyZWF0ZWQgYSBkbyBvbiB0aGUgJHtpfXRoIGNvbnRhaW5lcmApO1xuICAgIC8vICAgdG9kb1Rhc2tDb250YWluZXJMaXN0ZW5lcltpXS5hcHBlbmRDaGlsZChuZXcgQ3JlYXRlVG9kbyh0b2RvQ3JlYXRpb25Qb3B1cCgpLCBcIlRCRFwiKSk7XG4gICAgLy8gfVxuXG4gICAgLy9ydW5zIHRocm91Z2ggdG9kbyBhcnJheSBhbmQgYWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhbGwgdG9kbyBjcmVhdGlvbiBlbGVtZW50cy5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3RlbmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9jaGVja3MgaWYgYW4gZXZlbnQgbGlzdGVuZXIgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCwgYW5kIGFkZHMgb25lIGlmIGl0IGRvZXMgbm90IGhhdmUgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgaWYgKHRvZG9MaXN0ZW5lckFycmF5W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1jbGlja2VkJykgIT09ICd0cnVlJykge1xuICAgICAgICAgIHRvZG9MaXN0ZW5lckFycmF5W2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1jbGlja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICB0b2RvTGlzdGVuZXJBcnJheVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBldmVudCBoYXMgYmVlbiBhdHRhY2hlZCB0byAke2l9YCk7XG4gICAgICAgICAgICAgIGhlYWRlckNvbnRhaW5lckxpc3RlbmVyLmFwcGVuZENoaWxkKHRvZG9DcmVhdGlvblBvcHVwKGkpKTtcbiAgICAgICAgICAgICAgLy8gYWRkVG9kbyhpKTtcbiAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9kb0xpc3RlbmVyQXJyYXlcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=