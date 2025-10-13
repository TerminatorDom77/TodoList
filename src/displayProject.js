import {projects} from './createProject.js';
let currentProject = null

function initCurrentProject() {
    currentProject = projects[0];
}

const displayProject = function(project){
    currentProject = project;
    let description = document.getElementById("description");
    let title = document.getElementById("title");
    let taskContainer = document.getElementById("tasks");

    title.textContent = project.title;
    description.textContent = project.description;
    taskContainer.replaceChildren();
    for (let i = 0; i < project.todos.length; i++){
        let task = project.todos[i];
        let taskTitle = document.createElement("div");
        let taskDescription = document.createElement("div");
        let taskPriority = document.createElement("div");
        let taskDate = document.createElement("div");

        taskTitle.textContent = task.title;
        taskDescription.textContent = task.description;
        taskPriority.textContent = task.priority;
        taskDate.textContent = task.dueDate;
        taskContainer.append(taskTitle, taskDescription, taskPriority, taskDate);
    }
}

export {displayProject, currentProject, initCurrentProject}