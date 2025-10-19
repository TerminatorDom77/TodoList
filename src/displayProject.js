import {projects} from './createProject.js';
import {currentTask} from './createTask.js';
import Task from './taskFactory.js'
let currentProject = null

function initCurrentProject() {
    currentProject = projects[0];
}

const displayProject = function(project){
    currentProject = project;
    let description = document.getElementById("description");
    let title = document.getElementById("title");
    let tasksSection = document.getElementById("tasks");

    title.textContent = project.title;
    description.textContent = project.description;
    tasksSection.replaceChildren();
    for (let i = 0; i < project.todos.length; i++){
        let task = project.todos[i];
        let taskTitle = document.createElement("div");
        let taskDescription = document.createElement("div");
        let taskPriority = document.createElement("div");
        let taskDate = document.createElement("div");
        let taskContainer = document.createElement("div");
        let taskLabel = document.createElement("div");
        let editButton = document.createElement("button");
        editButton.classList.add("edit-task-button");
        editButton.textContent = "Edit Task";
        editButton.addEventListener("click", () => {
            let parentElement = editButton.parentElement;
            let title = parentElement.children[2].textContent;
            let description = parentElement.children[3].textContent;
            let priority = parentElement.children[4].textContent;
            let dueDate = parentElement.children[5].textContent;
            currentTask = Task(title, description, priority, dueDate);
            modal.style.display = "flex";
            createButton.textContent = "Save Changes";
        });

        taskLabel.textContent = "Task";
        taskLabel.style.fontWeight = "bold";
        taskLabel.style.textDecoration = "underline";
        taskContainer.appendChild(taskLabel);
        taskContainer.appendChild(editButton);

        taskTitle.textContent = task.title;
        taskDescription.textContent = task.description;
        taskPriority.textContent = task.priority;
        taskDate.textContent = task.dueDate;
        taskContainer.append(taskTitle, taskDescription, taskPriority, taskDate);
        taskContainer.classList.add("task-container");
        tasksSection.appendChild(taskContainer);
    }
}

export {displayProject, currentProject, initCurrentProject}