import TodoList from "./todoList.js"
import Project from "./projects.js"
import Task from "./task.js"

export default class Storage{


    static addTask(projectName, task){
        let todoList = Storage.getProjects()
        todoList.addTask(projectName, task)
        Storage.saveProjects(todoList)

    }

    static getProject(projectName){
        let todoList = Storage.getProjects()
        //console.log("projects", projects)
        let currProject = todoList.projects.find(project => (project.name == projectName))
        return currProject
    }

    static addProject(projectName){
        let todoList = Storage.getProjects()
        todoList.addProject(projectName)
        
        Storage.saveProjects(todoList)
    }

    static deleteProject(projectName){
        let todoList = Storage.getProjects()
        todoList.deleteProject(projectName)
        Storage.saveProjects(todoList)
    }

    static deleteTask(projectName,taskId){
        let todoList = Storage.getProjects()
        todoList.deleteTask(projectName, taskId)
        Storage.saveProjects(todoList)
    }

    static saveProjects(todoList){
        localStorage.setItem('TodoList', JSON.stringify(todoList))
    }

    static getProjects(){
        let todoList = new TodoList()
        let projects = JSON.parse(localStorage.getItem("TodoList"))
        //console.log("everythign", projects.projects)
        
        projects.projects.forEach(project => {
            //console.log("name", project.name)
            //console.log("tasks",project.tasks)
            todoList.fetchProject(project)
        });
        //console.log("after",todoList)
        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new Project(), project)))
        //console.log("after 2", todoList)
        
        todoList.getProjects().forEach(project => { project.setTasks(project.getTasks().map(task => Object.assign(new Task(), task)))
        })
        
        //console.log("after 3", todoList)
        return todoList
    }

}