import CreateTodo from './createTodo.js'

//function to create event listeners and append todos to correct project container
export default function appendTodo () {
    let todoListenerArray = document.querySelectorAll("#newTodo");
    console.log(todoListenerArray);
    //runs through todo array and adds an event listener to all todo creation elements.
    //on click, runs through todoTaskContainerArray to add todo to the correct project task container 

      for (let i = 0; i < todoListenerArray.length; i++) {
        todoListenerArray[i].addEventListener('click', function() {
            todoListenerArray[i].appendChild(new CreateTodo("99 woodcutting", "7/31/2023"));
            console.log(`You created a do on the ${i}th container`);
        })
      }

      return todoListenerArray
      
}