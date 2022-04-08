import Storage from "./Storage.js"
import Project from "./projects.js"
import Task from "./task.js"


export default class TodoList{

    constructor(){
        this.projects = []
    }

    addProject(projectName){
        let project = new Project(projectName)
        //console.log("projects", project)
        this.projects.push(project)
        //console.log("projects", project)
    }

    fetchProject(projectInfo){
        let project = new Project(projectInfo.name)
        project.setTasks(projectInfo.tasks)
        this.projects.push(project)
    }


    addTask(projectName, task){
        let project = this.getProject(projectName)
        project.addTask(task)
        //console.log("PROJECT",project)
        //Project.addTask(new Task(task))
    }

    setProjects(projects){
        this.projects = projects
    }

    getProjects(){
        return this.projects
    }

    getProject(name){
        
        let curr = this.projects.find((project) => (project.name == name))
        return curr
    }

    deleteProject(projectName){
        //let projects = Project.getProjects()
        //console.log(projects)
        let projects = this.projects.find(project => project.name == projectName)
        console.log("Delete",projects)
        //console.log("after Deleting", projects)
        //this.setProjects(this.projects.filter(project => project.name != projectName))
    }



}