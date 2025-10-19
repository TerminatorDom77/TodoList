import Task from './taskFactory.js';
import {currentProject} from './displayProject.js';
let currentTask = null;

function renderTasks(){
    let tasksSection = document.getElementById("tasks");
    tasksSection.replaceChildren();
    currentProject.todos.forEach(task => {
        let taskContainer = document.createElement('div');
        let taskLabel = document.createElement("div");
        taskLabel.textContent = "Task";
        taskLabel.style.fontWeight = "bold";
        taskLabel.style.textDecoration = "underline";
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

        let taskTitle = document.createElement("div");
        taskTitle.textContent = task.title;
        let taskDescription = document.createElement("div");
        taskDescription.textContent = task.description;
        let taskPriority = document.createElement("div");
        taskPriority.textContent = task.priority;
        let taskDate = document.createElement("div");
        taskDate.textContent = task.dueDate;

        taskContainer.append(taskLabel, editButton, taskTitle, taskDescription, taskPriority, taskDate);
        taskContainer.classList.add("task-container");
        tasksSection.appendChild(taskContainer);
    });
}

const createTask = function(){
    let taskButton = document.getElementById("task-button");
    let createButton = document.getElementById("create-task");
    let cancelButton = document.getElementById("cancel-task");
    let deleteButton = document.getElementById("delete-task");
    let modal = document.getElementById("task-modal");

    taskButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    createButton.addEventListener("click", () => {
        let title = document.getElementById("task-title").value;
        let description = document.getElementById("task-desc").value;
        let priority = document.getElementById("priority").value;
        let dueDate = document.getElementById("date").value;
        if (createButton.textContent == "Create"){
            let task = Task(title, description, priority, dueDate);
            currentTask = task;
            currentProject.todos.push(task);

            let tasksSection = document.getElementById("tasks");
            let taskContainer = document.createElement("div");
            let taskLabel = document.createElement("div");
            taskLabel.textContent = "Task";
            taskLabel.style.fontWeight = "bold";
            taskLabel.style.textDecoration = "underline";
            taskContainer.appendChild(taskLabel);
            let taskTitle = document.createElement("div");
            let taskDescription = document.createElement("div");
            let taskPriority = document.createElement("div");
            let taskDate = document.createElement("div");

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
            taskContainer.appendChild(editButton);

            taskTitle.textContent = title;
            taskDescription.textContent = description;
            taskPriority.textContent = task.priority;
            taskDate.textContent = task.dueDate;
            tasksSection.classList.add("tasks");
            if (document.getElementById("title").textContent == currentProject.title){
                currentTask = Task(taskTitle, taskDescription, taskPriority, taskDate);
                taskContainer.append(taskTitle, taskDescription, taskPriority, taskDate);
                taskContainer.classList.add("task-container");
                tasksSection.appendChild(taskContainer);
            }
            modal.style.display = "none";
        }else if(createButton.textContent == "Save Changes"){
            currentProject.todos.forEach((task) => {
                if (task.title == currentTask.title){
                    task.title = title;
                    task.description = description;
                    task.priority = priority;
                    task.dueDate = dueDate;
                }
            });
            currentTask = Task(title, description, priority, dueDate);

            let tasksSection = document.getElementById("tasks");
            tasksSection.replaceChildren();
            currentProject.todos.forEach(task => {
                let taskContainer = document.createElement('div');
                let taskLabel = document.createElement("div");
                taskLabel.textContent = "Task";
                taskLabel.style.fontWeight = "bold";
                taskLabel.style.textDecoration = "underline";
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

                let taskTitle = document.createElement("div");
                taskTitle.textContent = task.title;
                let taskDescription = document.createElement("div");
                taskDescription.textContent = task.description;
                let taskPriority = document.createElement("div");
                taskPriority.textContent = task.priority;
                let taskDate = document.createElement("div");
                taskDate.textContent = task.dueDate;

                taskContainer.append(taskLabel, editButton, taskTitle, taskDescription, taskPriority, taskDate);
                taskContainer.classList.add("task-container");
                tasksSection.appendChild(taskContainer);
            });
            modal.style.display = "none";
            createButton.textContent = "Create";
        }
    });
    cancelButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
    deleteButton.addEventListener("click", () => {
        let tasksSection = document.getElementById("tasks");
        if (createButton.textContent == "Save Changes"){
            currentProject.todos = currentProject.todos.filter((task) => task.title != document.getElementById("task-title").value);
            tasksSection.replaceChildren();
            renderTasks();
            modal.style.display = "none";
        }
    });
}

export {createTask, currentTask}