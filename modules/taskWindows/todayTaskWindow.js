


function createTodayTaskWindow(){

    let taskWindow = document.createElement("div")
    taskWindow.classList.add("taskWindow")
    taskWindow.setAttribute("id", "todayWindow")
    taskWindow.innerText = "Today"
    
    return taskWindow
}

function removeCurrentWindows(window){
    let child = document.querySelectorAll(".taskWindow")
    for (let i = 0; i < child.length; i++){
        console.log(child[i].classList)
        window.removeChild(child[i])
    }
   
}

function setTodayTaskWindow(){
    let window = document.querySelector(".navTaskWindow")
    console.log("today")
    removeCurrentWindows(window)
   
    let taskWindow = createTodayTaskWindow()

    window.appendChild(taskWindow)
    return window
}

export default setTodayTaskWindow