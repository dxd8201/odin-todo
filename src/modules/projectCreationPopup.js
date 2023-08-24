import CreateProject from './createProject.js'

export default function projectCreationPopup() {
    const mainPopupContainer = document.createElement("div");
    mainPopupContainer.classList.add("main-popup-container");
    mainPopupContainer.setAttribute("id", "mainPopupContainer");

    const popupFlexContainer = document.createElement("div");
    popupFlexContainer.classList.add("popup-flex-container");
    popupFlexContainer.setAttribute("id", "popupFlexContainer");
    mainPopupContainer.appendChild(popupFlexContainer);

    

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.classList.add("popup-input");
    titleInput.setAttribute("id", "titleInput");

    const submitBtn = document.createElement("btn");
    submitBtn.classList.add("submit-btn");
    submitBtn.setAttribute("id", "submitBtn");

    submitBtn.addEventListener("click", CreateProject(titleInput.value));


}