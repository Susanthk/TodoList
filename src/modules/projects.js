export default class Project{
    constructor(name){
        this.name = name;
        this.tasks = []
    }

   
    addTask(task){
        this.tasks.push(task)
    }

    setTasks(task){
        this.tasks = task;
    }

    
    getTasks(){
        return this.tasks
    }

    getName(){
        return this.name
    }

    
}