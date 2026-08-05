const input = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
const taskContainer = document.getElementById("taskContainer");

function addBtn(){
    const taskName = input.value

     if (taskName === "") {
        alert("Please enter a task");
        return;
    }

    const taskDiv = document.createElement("div")
        taskDiv.className = "task"

    const span = document.createElement("span")
    span.innerText = taskName

    const editBtn = document.createElement("button")
    editBtn.innerText = "Edit   "

    const deleteBtn  = document.createElement("button")
    deleteBtn.innerText = "Delete"

    taskDiv.appendChild(span)
    taskDiv.appendChild(editBtn)
    taskDiv.appendChild(deleteBtn)

    taskContainer.appendChild(taskDiv)

    input.value = ""    

    deleteBtn.addEventListener("click", () =>{
        taskDiv.remove()
    })

    editBtn.addEventListener("click", ()=>{
        console.log("heloo");
        
         const newTask = prompt("Edit Task", span.innerText);

        // if (newTask !== null && newTask !== "") {
            span.innerText = newTask;
        // }
    })
}