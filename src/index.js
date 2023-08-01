import './style.css';
import CreateProject from './modules/createProject.js'
import CreateTodo from './modules/createTodo.js'


function component() {

  console.log("Hello world")
   
  }
  
const contentCreation = (() => {
  const newProjectListener = document.getElementById("newProject"); 
  const newTodoListener = document.getElementById("newTodo");

  newProjectListener.addEventListener("click", function() {
    new CreateProject();
  });

  newTodoListener.addEventListener("click", function() {
    const todoTaskContainerListener = document.getElementById("todoTaskContainer");
    todoTaskContainerListener.appendChild(new CreateTodo("99 woodcutting", "7/31/2023"));
    
    // new CreateTodo("99 woodcutting", "7/31/2023");

    
  });

})();

  component();

