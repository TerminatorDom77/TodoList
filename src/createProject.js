import Project from './projectFactory.js';
import {displayProject, initCurrentProject} from './displayProject.js';
import {createTask} from './createTask.js';

let projects = [];
let projectBeingEdited = null;

const createProjectModal = function(){
    let projectContainer = document.getElementById("project-container");
    let projectButton = document.getElementById("project-button");
    let createButton = document.getElementById("create-project");
    let deleteButton = document.getElementById("delete-project");
    let cancelButton = document.getElementById("cancel-button");
    let editButton = document.querySelector("img");
    let modal = document.getElementById("project-modal");
    let taskModal = document.getElementById("task-modal");
    taskModal.style.display = "none";
    let modalCaption = document.getElementById("modal-caption");
    let titleInput = document.getElementById("project-title");
    let descriptionInput= document.getElementById("project-desc");
    modal.style.display = "none";

    //Creating default project below
    let newProjectBtn = document.createElement("div");
    newProjectBtn.classList.add("project"); 
    newProjectBtn.textContent = "Default Project";
    projectContainer.appendChild(newProjectBtn);
    let newProject = Project("Default Project", "");
    projects.push(Project("Default Project", "", []));
    newProjectBtn.addEventListener("click", () => {
        displayProject(newProject);
    });
    initCurrentProject();

    projectButton.addEventListener("click", () => {
        createButton.textContent = "Create";
        deleteButton.style.display = "none";
        modalCaption.textContent = "New Project";
        modal.style.display = "flex";
        titleInput.value = "";
        descriptionInput.value = "";
        projectBeingEdited = null;
    });
    cancelButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
    createButton.addEventListener("click", () => {
        let title = titleInput.value;
        let description = descriptionInput.value;
        if (createButton.textContent == "Create"){
            let newProjectBtn = document.createElement("div");
            newProjectBtn.classList.add("project"); 
            newProjectBtn.textContent = title;
            projectContainer.appendChild(newProjectBtn);
            modal.style.display = "none"; 
    
            let newProject = Project(title, description);
            projects.push(newProject);
            newProjectBtn.addEventListener("click", () => {
                displayProject(newProject);
            });
        } else {
            projectBeingEdited.title = title;
            projectBeingEdited.description = description;
            modal.style.display = "none"; 
            displayProject(projectBeingEdited);
        }
    });
    deleteButton.addEventListener("click", () => {
        let index = projects.indexOf(projectBeingEdited);
        let projectTitle = document.getElementById("title");
        let projectDesc = document.getElementById("description");
        projects.splice(index, 1);
        let projectButtons = document.querySelectorAll(".project");
        projectButtons.forEach(button => {
            if (button.textContent == projectBeingEdited.title){
                button.remove();
                projectTitle.textContent = "";
                projectDesc.textContent = "";
                modal.style.display = "none"; 
            }
        });
    });

    editButton.addEventListener("click", ()=> {
        let title = document.getElementById("title");
        projects.forEach(project => {
            if (title.textContent == project.title){
                titleInput.value = project.title;
                descriptionInput.value = project.description;
                modalCaption.textContent = "Editing: " + project.title;
                createButton.textContent = "Save changes";
                deleteButton.style.display = "inline-block";
                modal.style.display = "flex";
                projectBeingEdited = project;
            }
        });
    });
    createTask();
}

export {createProjectModal, projects};