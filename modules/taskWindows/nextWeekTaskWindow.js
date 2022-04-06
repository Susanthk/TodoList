function createNextWeekTaskWindow(){

    let taskWindow = document.createElement("div")
    taskWindow.classList.add("taskWindow")
    taskWindow.setAttribute("id", "nextWeekWindow")
    taskWindow.innerText = "Next Week"
    
    return taskWindow
}

function removeCurrentWindows(window){
    let child = document.querySelectorAll(".taskWindow")
    for (let i = 0; i < child.length; i++){
        console.log(child[i].classList)
        window.removeChild(child[i])
    }
   
}

function setNextWeekTaskWindow(){
    let window = document.querySelector(".navTaskWindow")
    console.log("Next Week")
    removeCurrentWindows(window)
   
    let taskWindow = createNextWeekTaskWindow()

    window.appendChild(taskWindow)
    return window
}

export default setNextWeekTaskWindow