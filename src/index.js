import setHeader from "../modules/header.js";
import setNavBar from "../modules/navbar.js"
import setTodayTaskWindow from "../modules/taskWindows/todayTaskWindow.js"
import setTomorrowTaskWindow from "../modules/taskWindows/tomorrowTaskWindow.js";
import setNextWeekTaskWindow from "../modules/taskWindows/nextWeekTaskWindow.js";


function navBar(){

    let todayTask = document.querySelector("#today")
    todayTask.addEventListener("click", setTodayTaskWindow)

    let tomorrowTask = document.querySelector("#tomorrow")
    tomorrowTask.addEventListener("click", setTomorrowTaskWindow)

    let nextWeekTask = document.querySelector("#nextweek")
    nextWeekTask.addEventListener("click", setNextWeekTaskWindow)
}


setHeader()
setNavBar()
navBar()
//setTomorrowTaskWindow()
setTodayTaskWindow()

