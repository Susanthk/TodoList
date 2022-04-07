export default class Project{
    constructor(name){
        this.name = name;
        this.tasks = []
    }

    addtask(task){
        this.tasks.push(task)
    }

    
}