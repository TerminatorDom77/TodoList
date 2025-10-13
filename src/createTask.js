import Task from './taskFactory.js';
import {currentProject} from './displayProject.js';

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
            console.log(currentProject);
            currentProject.todos.push(task);

            let tasksSection = document.getElementById("tasks");
            let taskContainer = document.createElement("div");
            taskContainer.textContent = "Task";
            let taskTitle = document.createElement("div");
            let taskDescription = document.createElement("div");
            let taskPriority = document.createElement("div");
            let taskDate = document.createElement("div");

            taskTitle.textContent = title;
            taskDescription.textContent = description;
            taskPriority.textContent = task.priority;
            taskDate.textContent = task.dueDate;
            if (document.getElementById("title").textContent == currentProject.title){
                taskContainer.append(taskTitle, taskDescription, taskPriority, taskDate);
                tasksSection.appendChild(taskContainer);
            }
            modal.style.display = "none";
        }
    });
    cancelButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
    deleteButton.addEventListener("click", () => {
        
    });
}

export default createTask