// get all the tasks and task lists

const tasks = document.querySelectorAll(".task");

const taskLists = document.querySelectorAll('.task-list');

// handle the drag start
tasks.forEach(task => {
    task.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", task.id)
        setTimeout(() => {
            task.style.visibility = "hidden"
        }, 0)
    });

    // reset the dispaly after the drag ends
    task.addEventListener("dragend", () => {
        task.style.visibility = "visible"
    })
})

// handle the drag over and allow drop

taskLists.forEach(list => {
    list.addEventListener("dragover", (event) => {
        event.preventDefault();
        list.classList.add("hover"); //highlight the drop place
    });

    // remove the hightlight when leaving

    list.addEventListener("dragleave", () => {
        list.classList.remove("hover")
    });

    // handle drop

    list.addEventListener("drop", (event) => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData("text/plain"); //getting the task id
        console.log(`dragged task Id: ${taskId}`)

        const draggedTask = document.getElementById(taskId);// get the dragged task
        console.log("dragged task:", draggedTask)
        // append the task to drop place
        if(draggedTask){
            list.appendChild(draggedTask);
        } else {
            console.error("task with id ${taskId} not found")
        }


        // remove the hover effect
        list.classList.remove("hover")
    })
})


// draggable = "true" -> makes the elmenet draggable

//dataTransfer.setData()..tranfers data while dragging

// dataTransfer.getData() -> retrieves the data on drop




