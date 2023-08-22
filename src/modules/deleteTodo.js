export default function deleteTodo() {
    let deleteTodoListenerArray = document.querySelectorAll("#deleteTodo");
    let todoTaskContainerListener = document.querySelectorAll("#todoTaskContainer");

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
          deleteTodoListenerArray[i].addEventListener('click', function (e) {
              const elementClicked = e.target;
              elementClicked.setAttribute('data-event-clicked', 'true');
              console.log('event has been attached');
              removeTodo(i);
         });
        }
      }

      console.log("delete todo Ran");

      return deleteTodoListenerArray
}