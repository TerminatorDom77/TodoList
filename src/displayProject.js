const displayProject = function(project){
    let description = document.getElementById("description");
    let title = document.getElementById("title");
    title.textContent = project.title;
    description.textContent = project.description;
}

export default displayProject;