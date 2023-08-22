import CreateTodo from './createTodo.js'

//bug to fix --> creates more todo tasks if createProject has ran
//has something to do with not being able to read getAttribute

//function to create event listeners and append todos to correct project container
export default function appendTodo () {
    let todoListenerArray = document.querySelectorAll("#newTodo");
    let todoTaskContainerListener = document.querySelectorAll("#todoTaskContainer");

    //function to append the todo to the corresponding todo task container
    const addTodo = function(i) {
      console.log(`You created a do on the ${i}th container`);
      todoTaskContainerListener[i].appendChild(new CreateTodo("99 woodcutting", "7/31/2023"));
    }

    //runs through todo array and adds an event listener to all todo creation elements.
      for (let i = 0; i <= todoListenerArray.length; i++) {
        //checks if an event listener has already been added
        if (todoListenerArray[i].getAttribute('data-event-clicked') !== 'true') {
          todoListenerArray[i].addEventListener('click', function (e) {
              const elementClicked = e.target;
              elementClicked.setAttribute('data-event-clicked', 'true');
              console.log('event has been attached');
              addTodo(i);
         });
        }
      }

      return todoListenerArray
      
}