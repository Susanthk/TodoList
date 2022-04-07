export default class TodoList{
    constructor(){
        this.projects = []
        this.projects.push("Today")
        this.projects.push("Tomorrow")
        this.projects.push("This Week")
    }

    setProjects(projects){
        this.projects = projects
    }
    
    getProjects(){
        return this.project
    }
}