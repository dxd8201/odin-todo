export default function deleteTodo(j) {
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