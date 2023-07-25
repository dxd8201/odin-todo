import './style.css';
import createProject from './modules/createProject.js'
import createTodo from './modules/createTodo.js'


function component() {

  console.log("Hello world")
   
  }
  
const contentCreation = (() => {
  const newProjectListener = document.getElementById("newProject"); 
  const newTodoListener = document.getElementById("newTodo");

  newProjectListener.addEventListener("click", function() {
    createProject();
  });

  newTodoListener.addEventListener("click", function() {
    createTodo();
  });

})();

  component();

