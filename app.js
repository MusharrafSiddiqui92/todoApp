let add = ()=> {
let taskValue= document.getElementById("task").value
if (taskValue.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = taskValue;
    li.id= "task" + Date.now();
    li.draggable=true;
    li.addEventListener("dragstart", dragstartHandler); //Add drag event
    document.querySelector("#taskTodo ul").appendChild(li);
    document.getElementById("task").value = ""; // clear input field
    let listItems = document.querySelectorAll("#taskTodo ul");
    let count = listItems.length;
    document.getElementById("currTask").textContent = `Task Count:0${count}`
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
// Enter Key End Here/
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
    let dropTarget = ev.target;
    if (dropTarget.tagName !== "UL") {
      dropTarget = dropTarget.closest("ul");
    }
  
    if (dropTarget) {
      dropTarget.appendChild(draggedElement);
  updatetaskCount();
  }
}
  window.addEventListener("DOMContentLoaded", () => {
    const dropzones = ["taskTodo","pending", "done"];
    dropzones.forEach(id => {
    const ul = document.querySelector(`#${id} ul`);
    ul.addEventListener("dragover", dragoverHandler);
    ul.addEventListener("drop", dropHandler);
     });
     });
     let updatetaskCount = ()=>{
    const taskTodoCount = document.querySelector("#taskTodo ul").querySelectorAll("li").length;
    const pendingCount = document.querySelector("#pending ul").querySelectorAll("li").length;
    const doneCount = document.querySelector("#done ul").querySelectorAll("li").length;  
      document.getElementById("currTask").textContent = `To Do: ${taskTodoCount}`;
      document.getElementById("penTask").textContent = `Pending: ${pendingCount}`;
      document.getElementById("doneTask").textContent = `Done: ${doneCount}`;
    }
    let day = moment().format('dddd');                    // Friday
    document.querySelector("#day").innerHTML=day;