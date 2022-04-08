import Project from "./projects.js"
import TodoList from "./todoList.js"
import Storage from "./Storage.js"



let content = document.getElementById("content")
const todoList = new TodoList();
//const storage = new Storage();

export default class UI {

    static loadHomepage(){
        UI.createHeader()
        UI.setUpProjects()
        //UI.presentProjects()
        //UI.setUpTaskWindow()
        
    }

    static setUpTaskWindow(){
        let taskWindow = document.createElement("div")
        taskWindow.setAttribute("id", "taskWindow")
        
        content.appendChild(taskWindow)
    }
    
    static clearDiv(main){
        while(main.firstChild){
            main.removeChild(main.firstChild)
        }
    }

    static addTasks(task, currProject){
       // console.log(task)
        //console.log(currProject)

        currProject.addTask(task)
        currProject.save()
        UI.displayTasks(currProject.name)
        
        
    }
    static presentTask(projectName){

        let todolist = Storage.getProjects()
        
        //(todoList)
        //let currProject = todolist.projects.filter(project => (project.name == projectName))
        let currProject = todolist.getProject(projectName)
       

        let taskWindow = document.querySelector("#taskWindow")
        UI.clearDiv(taskWindow)

        //Project Title
        let projectTitle = document.createElement("h2")
        projectTitle.setAttribute("id", "projectTitle")
        projectTitle.textContent = projectName + " Tasks"

        let taskInput = document.createElement("input")
        taskInput.setAttribute("id", "taskInput")
        taskInput.placeholder = "task"
        
        
        //addTaskButton
        let addTaskButton = document.createElement("button")
        addTaskButton.innerText = "Add Task!"
        addTaskButton.addEventListener("click", () => UI.addTasks(taskInput.value, currProject))

        
        taskWindow.appendChild(projectTitle)
        taskWindow.appendChild(taskInput)
        taskWindow.appendChild(addTaskButton)
       
        
    }

    static displayTasks(projectName){
        let todolist = Storage.getProjects()
        let currProject = todolist.getProject(projectName)
        //console.log("PROJECT AND TASKS", currProject)
    }
    static createProjectList(project){
        let projectList = document.createElement("li")
        let projectButton = document.createElement("button")
        projectList.classList.add("project")
        projectButton.innerText = project.name
        projectButton.value = project.name
        projectButton.classList.add("projectButton")
        projectList.appendChild(projectButton)

        projectButton.addEventListener("click", (e) => UI.presentTask(e.target.value))
        return projectList
    }

    static presentProjects(){
        
        let todolist = Storage.getProjects()
        //console.log(todolist.projects)
        let navBar = document.createElement("div")
        navBar.setAttribute("id", "navBar")
        let projectList = document.createElement("ul")
        projectList.setAttribute("id", "projectList")
        todolist.projects.forEach(element => {
            projectList.appendChild(UI.createProjectList(element))
        });

        navBar.appendChild(projectList)
        content.appendChild(navBar)
    }

    static setUpProjects(){
        //console.log(storage)
        Storage.addProject("Today", todoList)
        Storage.addProject("Tomorrow", todoList)
        let content = Storage.getProjects()
        console.log("content",content)
        Storage.addTask("Today", "Study")
        Storage.addTask("Tomorrow", "Eat")
        //Storage.deleteProject("Tomorrow", todoList)
         //Storage.addTask("Today", "Study")
        //Storage.addProject("Tomorrow", todoList)
        content = Storage.getProjects()
        console.log("content", content)
        //let todayProject = new Project("Today")
        //let tomorrowProject = new Project("Tomorrow")
        //let weekProject = new Project("This Week")
     
        //todoList.addProject(todayProject)
        //todoList.addProject(tomorrowProject)
        //todoList.addProject(weekProject)
        //("befoore storage" , todoList)
        //todoList.saveProjects()
    }


    static createHeader(){
        
        let header = document.createElement("h1")
        header.innerText = "Todo List"
        header.setAttribute("id", "header")
        content.appendChild(header)
    }


}