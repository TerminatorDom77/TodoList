import {projects} from './createProject.js';
let currentProject = null

function initCurrentProject() {
    currentProject = projects[0];
}

const displayProject = function(project){
    currentProject = project;
    let description = document.getElementById("description");
    let title = document.getElementById("title");
    title.textContent = project.title;
    description.textContent = project.description;
}

export {displayProject, currentProject, initCurrentProject}