/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!***********************************!*\
  !*** ./src/modules/deleteTodo.js ***!
  \***********************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlVG9kby5tYWluLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixxQ0FBcUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxFQUFFO0FBQzFEO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZHVsZXMvZGVsZXRlVG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gICAgbGV0IGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkZWxldGVUb2RvXCIpO1xuICAgIGxldCB0b2RvVGFza0NvbnRhaW5lckxpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b2RvVGFza0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnNvbGUubG9nKGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5KTtcblxuICAgIC8vZnVuY3Rpb24gdG8gYXBwZW5kIHRoZSB0b2RvIHRvIHRoZSBjb3JyZXNwb25kaW5nIHRvZG8gdGFzayBjb250YWluZXJcbiAgICBjb25zdCByZW1vdmVUb2RvID0gZnVuY3Rpb24oaSkge1xuICAgICAgY29uc29sZS5sb2coYFlvdSBjcmVhdGVkIGEgZG8gb24gdGhlICR7aX10aCBjb250YWluZXJgKTtcbiAgICAgIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXJbaV0ucmVtb3ZlKCk7XG4gICAgICAvL3JlbW92ZXMgdGhlIGl0ZW0gZnJvbSB0aGUgYXJyYXksIGJ1dCBtdXN0IHJlbW92ZSB0aGUgaXRlbSBmcm9tIGFsbCBhcnJheXNcbiAgICAgIHRvZG9UYXNrQ29udGFpbmVyTGlzdGVuZXIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIC8vcnVucyB0aHJvdWdoIHRvZG8gYXJyYXkgYW5kIGFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRvZG8gZGVsZXRpb24gZWxlbWVudHMuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBkZWxldGVUb2RvTGlzdGVuZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAvL2NoZWNrcyBpZiBhbiBldmVudCBsaXN0ZW5lciBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkXG4gICAgICAgIGlmIChkZWxldGVUb2RvTGlzdGVuZXJBcnJheVtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcpICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICBkZWxldGVUb2RvTGlzdGVuZXJBcnJheVtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtY2xpY2tlZCcsICd0cnVlJyk7XG4gICAgICAgICAgZGVsZXRlVG9kb0xpc3RlbmVyQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnQgaGFzIGJlZW4gYXR0YWNoZWQnKTtcbiAgICAgICAgICAgICAgcmVtb3ZlVG9kbyhpKTtcbiAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3RlbmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9jaGVja3MgaWYgYW4gZXZlbnQgbGlzdGVuZXIgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCwgYW5kIGFkZHMgb25lIGlmIGl0IGRvZXMgbm90IGhhdmUgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgaWYgKHRvZG9MaXN0ZW5lckFycmF5W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1jbGlja2VkJykgIT09ICd0cnVlJykge1xuICAgICAgICAgIHRvZG9MaXN0ZW5lckFycmF5W2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1jbGlja2VkJywgJ3RydWUnKTtcbiAgICAgICAgICB0b2RvTGlzdGVuZXJBcnJheVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBldmVudCBoYXMgYmVlbiBhdHRhY2hlZCB0byAke2l9YCk7XG4gICAgICAgICAgICAgIGFkZFRvZG8oaSk7XG4gICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSB0b2RvIFJhblwiKTtcblxuICAgICAgcmV0dXJuIGRlbGV0ZVRvZG9MaXN0ZW5lckFycmF5XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9