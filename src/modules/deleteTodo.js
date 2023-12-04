import { arrayHandler, todoCreationPopup } from './todoCreationPopup.js';

export default function deleteTodo(id) {
    let todoTaskContainerListener = document.querySelectorAll("#singleTodoTaskContainer");
    let array = Array.from(todoTaskContainerListener);
    console.log(array);
    console.log(arrayHandler());

    //function to remove the todo from the corresponding todo task container
    const removeTodo = function(id) {
      
      // todoTaskContainerListener[i].remove();
      //removes the item from the array, but must remove the item from all arrays
      // todoTaskContainerListener.splice(i, 1);

      //Needs to read if (object.id === id)
      for(let i = 0; i < todoTaskContainerListener.length; i++) {
        if(arrayHandler()[i].id === id) {
          todoTaskContainerListener[i].remove();
          //must convert the nodelist to an array for this code to work
          arrayHandler().splice(i, 1);
          console.log(array);
          console.log(`You deleted a do on the ${i}th container`);
        }
      }

      //code from previous project to remove todos
      // const todoIndex = todos.findIndex((todo) => todo.id === id)
      // if (todoIndex > -1) {
      //   todos.splice(todoIndex, 1);
      // }
    }

    removeTodo(id);
      console.log("delete todo Ran");
      return todoTaskContainerListener
}