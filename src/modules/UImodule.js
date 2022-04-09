import Project from "./projects.js"
import TodoList from "./todoList.js"
import Storage from "./Storage.js"



let content = document.getElementById("content")
const todoList = new TodoList();
//const storage = new Storage();

export default class UI {



    static loadHomepage(){
        UI.setUpProjects()
        UI.createStaticElements()
        UI.createStandardProjectWindow()
        
        
    }


    
    static setUpProjects(){
        Storage.saveProjects(new TodoList)
        Storage.addProject("Today", todoList)
        Storage.addProject("Tomorrow", todoList)
        Storage.addProject("This Week", todoList)
        let content = Storage.getProjects()  
    }


    static createStaticElements(){
        content.appendChild(UI.createHeader())
        content.appendChild(UI.createContentWindow())
    }


    static createContentWindow(){
        let contentWindow = document.createElement("div")
        contentWindow.setAttribute("id", "contentWindow")

        //projectWindow
        let projectWindow = UI.createProjectWindow()

        //TaskWindow
        
        let taskWindow = UI.createTaskWindow()

        contentWindow.appendChild(projectWindow)
        contentWindow.appendChild(taskWindow)

        return contentWindow
    }
   
    static addTask(project, userTask){
        
        //let taskInput = document.querySelector(".taskInput")
        console.log("projectt", project)
        //let project = e.target.id
        if (userTask != ""){
            Storage.addTask(project, userTask )
        }
        
        
        UI.displayTasks(project)
    }

    static displayTasks(project){

        //updating tasks buttons value 
        let taskButton = document.querySelector(".taskInputButton")
        taskButton.value = project

        let content = Storage.getProject(project)
        let taskDisplay = document.querySelector("#taskDisplay")
        UI.clearDiv(taskDisplay)
        let tasks = content.tasks
        let taskheading = document.querySelector("#taskHeading")
        taskheading.innerText = `${project}s Tasks`
        console.log(tasks)
        if (tasks.length > 0){
            let taskList = document.createElement("ul")
            
            for (let i = 0; i< tasks.length; i++){
                let task = document.createElement("li")
                let para = document.createElement("p")
                para.innerText = tasks[i].details

                let delButton = document.createElement("button")
                delButton.innerText = "delete task"
                delButton.value = tasks[i].id
                delButton.setAttribute("class","deleteTaskButton")
                delButton.addEventListener("click", e => UI.deleteTask(project,e))

                task.appendChild(para)
                task.appendChild(delButton)
                taskList.appendChild(task)
                
            }

            taskDisplay.appendChild(taskList)

        } else {
            let message = document.createElement("h3")
            message.innerText = "No Tasks Present"
            message.setAttribute("id", "taskDisplayMessage")
            taskDisplay.appendChild(message)
        }
       
    }

    static deleteTask(projectName,e){
        
        let taskId = e.target.value
        Storage.deleteTask(projectName,taskId)
        UI.displayTasks(projectName)
    }
    static getProject(projectName){
        Storage.getProject(projectName)
    }

    static createTaskWindow(){
        let taskWindow = document.createElement("div")
        taskWindow.classList.add("classWindowElement")
        taskWindow.setAttribute("id", "taskWindow")

        //task heading
        let taskHeading = document.createElement("h2")
        taskHeading.id = "taskHeading"
        taskHeading.innerText = "Today Tasks"

        //task input
        let taskInputDiv = document.createElement("div")
        let taskInputHeading = document.createElement("h3")
        taskInputHeading.innerText =" Add a task!"
        let taskInput = document.createElement("input")
        taskInput.setAttribute("class","taskInput")
        taskInput.placeholder= "task"
        
        let taskButton = document.createElement("button")
        //Should make value the project name
        taskButton.setAttribute("id", "taskButton")
        taskButton.setAttribute("class", "taskInputButton")
        taskButton.value = "Today"
        taskButton.innerText = "Add"

        
        
        taskInputDiv.appendChild(taskInputHeading)
        taskInputDiv.appendChild(taskInput)
        taskInputDiv.appendChild(taskButton)

        taskButton.addEventListener("click", e => {
            console.log("clicked")
            
            UI.addTask(e.target.value, taskInput.value)
            taskInput.value = ""
        })

        taskInput.addEventListener("keypress", e => {
            
            if (e.code == "Enter"){
                e.preventDefault();
                taskInputDiv.querySelector(".taskInputButton").click();
            }
        })

        let taskDisplay = document.createElement("div")
        taskDisplay.setAttribute("id","taskDisplay" )


        taskWindow.appendChild(taskHeading)
        taskWindow.appendChild(taskInputDiv)
        taskWindow.appendChild(taskDisplay)
        return taskWindow
    }
    static createProjectWindow(){
        let projectWindow = document.createElement("div")
        projectWindow.classList.add("classWindowElement")
        projectWindow.setAttribute("id", "projectWindow")

        let standardProjectHeader = document.createElement("h2")
        standardProjectHeader.setAttribute("id", "standardPHeader")
        standardProjectHeader.innerText = "Welcome!"

        let standardProjects = document.createElement("div")
        standardProjects.setAttribute("id", "standardP")

        let userProjectHeader = document.createElement("h2")
        userProjectHeader.setAttribute("id", "userPHeader")
        userProjectHeader.innerText = "Projects"

        //UserprojectInputDiv
        let userProjectInputDiv = document.createElement("div")
        userProjectInputDiv.setAttribute("id", "userProjectInputDiv")
        
        let userProjectInput = document.createElement("input")
        userProjectInput.placeholder = "Add Project!"
        userProjectInput.setAttribute("id","userProjectInput")

        let userProjectInputButton = document.createElement("button")
        userProjectInputButton.innerText = "Add Project"
        userProjectInputButton.setAttribute("id", "userProjectInputButton")
        userProjectInputButton.addEventListener("click", e => {
            userProjectInputButton.value = userProjectInput.value
            let taskInput = document.querySelector(".taskInput")
            taskInput.value = ""
            UI.addProject(userProjectInput.value)
            UI.displayTasks(e.target.value)
            userProjectInput.value = ""
        })

        userProjectInput.addEventListener("keypress", e => {
            
            if (e.code == "Enter"){
                e.preventDefault();
                userProjectInputDiv.querySelector("#userProjectInputButton").click();
            }
        })


        userProjectInputDiv.appendChild(userProjectInput)
        userProjectInputDiv.appendChild(userProjectInputButton)

        let userProjects = document.createElement("div")
        userProjects.setAttribute("id", "userP")


        projectWindow.appendChild(standardProjectHeader)
        projectWindow.appendChild(standardProjects)
        projectWindow.appendChild(userProjectHeader)
        projectWindow.appendChild(userProjectInputDiv)
        projectWindow.appendChild(userProjects)
        
        
        return projectWindow
    }

    static addProject(project){
        if (project != ""){
            Storage.addProject(project) 
            UI.createUserProjectWindow()
        } else {
            alert("Please give valid name")
        }
        
        
    }

    static createUserProjectWindow(){
        
        let userProjects = document.getElementById("userP")

        UI.clearDiv(userProjects)
        let projects = Storage.getProjects().projects
        if (projects.length > 3){
            let projectsList = document.createElement("ul")
            for (let i = 3; i < projects.length; i++){
                let project = document.createElement("li")
                let button = document.createElement("button")
                button.innerText = projects[i].name
                button.id = projects[i].name
                button.value = projects[i].name
                button.addEventListener("click", e => {
                    UI.displayTasks(e.target.value)})
                project.appendChild(button)


                let delButton = document.createElement("button")
                delButton.innerText = "delete Project"
                delButton.id = projects[i].name
                delButton.value = projects[i].name
                delButton.addEventListener("click", e => UI.deleteProject(e.target.value))
                project.appendChild(delButton)

                projectsList.appendChild(project)
            }
            userProjects.appendChild(projectsList)
        } 
    }
    static deleteProject(project){
        let taskWindow = document.querySelector("#taskWindow")
        //UI.clearDiv(taskWindow)
        Storage.deleteProject(project)
        UI.createUserProjectWindow()
    }
    static createStandardProjectWindow(){

        let standardProjects = document.getElementById("standardP")
        UI.clearDiv(standardProjects)

        let projects = Storage.getProjects().projects
        console.log(projects)
        if (projects.length > 0 ){
            
            let projectsList = document.createElement("ul")
            for (let i = 0; i < projects.length; i++){
                let project = document.createElement("li")
                let button = document.createElement("button")
                button.innerText = projects[i].name
                button.id = projects[i].name
                button.value = projects[i].name
                button.addEventListener("click", e => {
                    let taskInput = document.querySelector(".taskInput")
                    taskInput.value = ""
                    UI.displayTasks(e.target.value)
                
                 })
                project.appendChild(button)
                projectsList.appendChild(project)
            }
            standardProjects.appendChild(projectsList)
            
        } else{
            let stdHeading = document.createElement("h3")
            stdHeading.innerText = "No projects"
            standardProjects.appendChild(stdHeading)
        }
    }
    static createHeader(){
        
        let header = document.createElement("h1")
        header.innerText = "Todo List"
        header.setAttribute("id", "header")
        return header
    }

     static clearDiv(main){
        while(main.firstChild){
            main.removeChild(main.firstChild)
        }
    }


}