
function createHeader(){
    let header = document.createElement("header")
    header.classList.add("heading")
    header.innerText = "Todo List" 
    return header 
}

function setHeader(){
    let doc = document.querySelector(".work")
    let header = createHeader()
    doc.appendChild(header) 
}

export default setHeader