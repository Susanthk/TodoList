


function createNavBar(){

    let navTaskWindow = document.createElement("div")
    navTaskWindow.classList.add("navTaskWindow")

    let navDiv = document.createElement("div")
    navDiv.classList.add("navDiv")

    const elements = ["Today", "Tomorrow", "NextWeek"]
    let list = document.createElement("ul")
    
    elements.forEach((element) => {
        let li = document.createElement("li")
        let button = document.createElement("button")
        button.setAttribute("id", element.toLowerCase())
        button.innerText = element
        li.appendChild(button)
        list.appendChild(li)
    })

    navDiv.appendChild(list)

    navTaskWindow.appendChild(navDiv)
    return navTaskWindow
}


function setNavBar(){

    let content = document.querySelector("#content")
    let navBar = createNavBar()

    content.appendChild(navBar)
    return content
}

export default setNavBar