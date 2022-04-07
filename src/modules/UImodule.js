import Project from "./projects.js"
import TodoList from "./todoList.js"
import Storage from "./Storage.js"


let content = document.getElementById("content")
const todoList = new TodoList();

export default class UI {

    static loadHomepage(){
        UI.createHeader()
        UI.setUpProjects()
        UI.presentProjects()
    }

    static createProjectList(project){
        let projectList = document.createElement("li")
        let projectButton = document.createElement("button")
        projectButton.innerText = project.name
        projectButton.classList.add("projectButton")
        projectList.appendChild(projectButton)
        return projectList
    }

    static presentProjects(){
        
        let projects = Storage.getProjects()
       
        var navBar = document.createElement("div")
        navBar.setAttribute("id", "navBar")
        var projectList = document.createElement("ul")
        projectList.setAttribute("id", "projectList")
        projects.forEach(element => {
            projectList.appendChild(UI.createProjectList(element))
        });

        content.appendChild(projectList)
    }

    static setUpProjects(){

        let todayProject = new Project("Today")
        let tomorrowProject = new Project("Tomorrow")
        let weekProject = new Project("This Week")
     
        todoList.addProject(todayProject)
        todoList.addProject(tomorrowProject)
        todoList.addProject(weekProject)
      
        todoList.saveProjects()
    }


    static createHeader(){
        
        let header = document.createElement("h1")
        header.innerText = "Todo List"
        header.setAttribute("id", "header")
        content.appendChild(header)
    }


}