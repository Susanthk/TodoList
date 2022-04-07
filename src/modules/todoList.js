import Storage from "./Storage.js"

export default class TodoList{

    constructor(){
        this.projects = []
    }

    addProject(project){
        this.projects.push(project)
    }

    saveProjects(){
        Storage.saveProjects(this.projects)
    }



}