import CreateTodo from './createTodo.js';
import todoCreationPopup from './todoCreationPopup.js';

//function to create event listeners and append todos to correct project container
export default function appendTodo () {
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
              headerContainerListener.appendChild(todoCreationPopup(i));
              // addTodo(i);
         });
        }
      }
      return todoListenerArray
}