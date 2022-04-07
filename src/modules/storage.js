import Project from './Project'
import Task from './Task'
import TodoList from './todoList'

export default class Storage{
    
    static saveTodoList(data){
        console.log(data)
        localStorage.setItem('todoList', JSON.stringify(data))
        console.log(localStorage)
    }

    static getTodoList() {
        //console.log(localStorage.getItem('todoList'))
        const todoList = Object.assign(
        new TodoList(),
        JSON.parse(localStorage.getItem('todoList'))
        )
        console.log(todoList)
        todoList.setProjects(
        todoList
            .getProjects()
            .map((project) => Object.assign(new Project(), project))
        )
/*
        todoList
        .getProjects()
        .forEach((project) =>
            project.setTasks(
            project.getTasks().map((task) => Object.assign(new Task(), task))
            )
        )
    */

    return todoList
  }
}