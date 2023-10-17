import CreateTodo from './createTodo.js';
import appendTodo from './appendTodo.js';

let todoArray = [];

function arrayHandler() {
    return todoArray
}

function todoCreationPopup(j) {
    const mainContentContainerListener = document.getElementById("mainContentContainer");

    const uuid = require('uuid');
    const id = uuid.v4();

    console.log(id);

    
    
    const mainPopupContainer = document.createElement("div");
    mainPopupContainer.classList.add("main-popup-container");
    mainPopupContainer.setAttribute("id", "mainPopupContainer");

    const popupFlexContainer = document.createElement("div");
    popupFlexContainer.classList.add("popup-flex-container");
    popupFlexContainer.setAttribute("id", "popupFlexContainer");
    mainPopupContainer.appendChild(popupFlexContainer);

    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    formContainer.setAttribute("id", "formContainer");
    popupFlexContainer.appendChild(formContainer);

    const todoLabel = document.createElement("label");
    todoLabel.setAttribute("for", "todoInput");
    todoLabel.classList.add("todo-label");
    todoLabel.textContent = "Todo:";
    formContainer.appendChild(todoLabel);

    const todoInput = document.createElement("input");
    todoInput.setAttribute("type", "text");
    todoInput.classList.add("popup-input");
    todoInput.setAttribute("id", "todoInput");
    formContainer.appendChild(todoInput);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-btn");
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.textContent = "Submit";
    popupFlexContainer.appendChild(submitBtn);

    function getInputValue() {
        let inputValue = document.getElementById("todoInput").value;
        console.log(inputValue);

        return inputValue
    }
    
    submitBtn.addEventListener("click", function () {
        getInputValue();
        // new CreateTodo(getInputValue(), "The date", j, id);
        todoArray.push(new CreateTodo(getInputValue(), "The date", j, id));
        appendTodo(id);
        mainPopupContainer.remove();
        console.log(todoArray);
    });

    return mainPopupContainer

}

export { arrayHandler, todoCreationPopup }