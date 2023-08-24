import './style.css';
import CreateProject from './modules/createProject.js';
import appendTodo from './modules/appendTodo';
  
const contentCreation = (() => {
  const newProjectListener = document.getElementById("newProject"); 
  const todoListenerArray = document.querySelectorAll("#newTodo");

  newProjectListener.addEventListener("click", function() {
    const mainContentContainerListener = document.getElementById("mainContentContainer");
    mainContentContainerListener.appendChild(new CreateProject("99 woodcutting"));
  });

  //test container
  //runs appendTodo to add eventlistener to create todo icons on load
  const mainContentContainerListener = document.getElementById("mainContentContainer");
  mainContentContainerListener.appendChild(new CreateProject('Test Project'));

})();

