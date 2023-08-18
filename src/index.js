import './style.css';
import CreateProject from './modules/createProject.js'
import CreateTodo from './modules/createTodo.js'


function component() {

  console.log("Hello world")
   
  }
  
const contentCreation = (() => {
  const newProjectListener = document.getElementById("newProject"); 
  const todoListenerArray = document.querySelectorAll("#newTodo");

  newProjectListener.addEventListener("click", function() {
    const mainContentContainerListener = document.getElementById("mainContentContainer");
    mainContentContainerListener.appendChild(new CreateProject("99 woodcutting"));
  });


  // todoListenerArray.forEach(function(ele) {
  //   ele.addEventListener("click", function() {
  //     const todoTaskContainerListener = document.getElementById("todoTaskContainer");
  //     todoTaskContainerListener.appendChild(new CreateTodo("99 woodcutting", "7/31/2023"));
  //   });
  // })

  

})();

  component();

