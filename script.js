const inputbox = document.getElementById("inputbox")
const listcontainer = document.getElementById("listcontainer")
const example = document.getElementsByClassName("ex")

const saveData = () => {
    localStorage.setItem("data", listcontainer.innerHTML)
}
const getData = () => {
    listcontainer.innerHTML = localStorage.getItem("data")
}

const addTask = (value) => {
    if (inputbox.value === '') {
        alert("Please enter something")
    } else {

        for (let i = 0; i < example.length; i++) {
            example[i].setAttribute("hidden", true)
        }

        let li = document.createElement("li")
        li.innerHTML = inputbox.value
        listcontainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "&#x2715;"
        li.appendChild(span)
        inputbox.value = ""
        saveData();
    }
}

listcontainer.addEventListener("click", (event) => {
    if (event.target.tagName == "LI") {
        event.target.classList.toggle("checked")
    }
    if (event.target.tagName == "SPAN") {
        event.target.parentElement.remove("LI")
    }
    saveData();
})
if (localStorage.getItem("data") != null) {
    getData(); // boom
}