let add= ()=> {
let taskValue= document.getElementById("task").value
if (taskValue.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = taskValue;
    li.id= "task" + Date.now();
    li.draggable=true;
    li.addEventListener("dragstart", dragstartHandler); //Add drag event
    document.getElementById("taskTodo").appendChild(li);
    document.getElementById("task").value = ""; // clear input field

    let listItems = document.querySelectorAll("#taskTodo li");
    let count = listItems.length;
    document.getElementById("currTask").textContent = `Task Count:0${count}`
    // document.getElementById("pendingTask").textContent = `Pending:0${pendingCount}`;
    // document.getElementById("doneTask").textContent = `Done:0${doneCount}`;
    let day = moment().format('dddd');                    // Friday
document.querySelector("#day").innerHTML=day;
    updatetaskCount();
}
}
// Enter Key 
document.querySelector("#task").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // (optional: stops form from submitting if inside a form)
      add();  // Call your function
    }
  });

  function dragstartHandler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }
  function dragoverHandler(ev) {
    ev.preventDefault(); // Necessary to allow a drop
  }

  function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    ev.target.appendChild(draggedElement); // Move the element into dropzone
  updatetaskCount();
  }
  window.addEventListener("DOMContentLoaded", () => {
    const dropzones = ["pending", "done"];
dropzones.forEach(id => {
    const zone = document.getElementById(id);
    zone.addEventListener("dragover", dragoverHandler);
    zone.addEventListener("drop", dropHandler);
  });
  });
  
  let updatetaskCount = ()=>{
    const taskTodoCount = document.querySelector("#taskTodo").querySelectorAll("li").length;
    const pendingCount = document.querySelector("#pending").querySelectorAll("li").length;
    const doneCount = document.querySelector("#done").querySelectorAll("li").length;
      // let taskTodoCount = document.querySelectorAll("#taskTodo li").length;
      // const pendingCount = document.querySelectorAll("#pending li").length;
      // const doneCount = document.querySelectorAll("#done li").length;
    
      document.getElementById("currTask").textContent = `To Do: ${taskTodoCount}`;
      document.getElementById("penTask").textContent = `Pending: ${pendingCount}`;
      document.getElementById("doneTask").textContent = `Done: ${doneCount}`;
    }
    let day = moment().format('dddd');                    // Friday
document.querySelector("day").innerHTML=day;