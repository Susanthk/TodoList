function createTomorrowTaskWindow(){

    let taskWindow = document.createElement("div")
    taskWindow.classList.add("taskWindow")
    taskWindow.setAttribute("id", "tomorrowWindow")
    taskWindow.innerText = "Tomorrow"
    
    return taskWindow
}

function removeCurrentWindows(window){
    let child = document.querySelectorAll(".taskWindow")
    for (let i = 0; i < child.length; i++){
        console.log(child[i].classList)
        window.removeChild(child[i])
    }
   
}

function setTomorrowTaskWindow(){
    let window = document.querySelector(".navTaskWindow")
    console.log("tomorrow")
    removeCurrentWindows(window)
   
    let taskWindow = createTomorrowTaskWindow()

    window.appendChild(taskWindow)
    return window
}

export default setTomorrowTaskWindow