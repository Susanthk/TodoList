//import setHeader from "./header.js";
//import setNavBar from "../modules/navbar.js"
//import setTodayTaskWindow from "../modules/modules/todayTaskWindow.js"
import Storage from './storage'
import Project from './project'
import Task from './task'
import TodoList from './todoList'

export default class UI {

    static loadHomepage(){
       //UI.setProjects()
       UI.setHeader()
       UI.saveTodoList()
       UI.displayProjects()
    }


    static setHeader(){
        let header = document.createElement("header")
        let doc = document.querySelector(".work")
        header.classList.add("heading")
        header.innerText = "Todo List" 
        doc.appendChild(header) 
    }

    static displayProjects(){
        let todolist = Storage.getTodoList()
        console.log(todolist)
    }

    static saveTodoList(){
        let todolist = new TodoList()
        Storage.saveTodoList(todolist)
    }

    
}