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
        console.log("projectname", projectName)
        console.log("adding to ", project)
        let taskLength = project.tasks.length
        project.addTask(new Task(taskLength,task))
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

    findProjectIndex(projectName){
        let index = 0
        for (let i = 0; i < this.projects.length; i++)
        {
            if (this.projects[i].name == projectName){
                return index
            }
            index++
        }
        return -1; 
    }

    findTaskIndex(projectIndex, taskId){
        let index = 0
        let tasks = this.projects[projectIndex].tasks
        for(let i = 0; i < tasks.length; i++){
            
            if (tasks[i].id == taskId){
                return index
            }
            index++
        }
        return -1
    }
    deleteProject(projectName){
        let deleteIndex = this.findProjectIndex(projectName)
        this.projects.splice(deleteIndex,1)
    }

    deleteTask(projectName, taskId){
        let projectIndex = this.findProjectIndex(projectName)
        let taskIndex = this.findTaskIndex(projectIndex, taskId)
        this.projects[projectIndex].tasks.splice(taskIndex,1)
        //console.log(this.projects[projectIndex].tasks[taskId])
    }


}