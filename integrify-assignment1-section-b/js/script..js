// const clrAccent = "#16e0bd";
// const clrLight = "fff";
// const clrDark = "#303030";

// Delete a task func
let remove = document.getElementsByClassName("removeBtn");
for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

//Check task from task list
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

let taask = document.getElementsByClassName("task");
for (let index = 0; index < taask.length; index++) {
  taask[index].addEventListener(
    "click",
    function () {
      taask[index].classList.toggle("checked");
    }
  )
}


//Remove all
function removeAll() {
    let array = document.getElementsByClassName("task__list--item");
    for (let i = 0; i < array.length; i++) {
        array[i].style.display="none";
    }
}

// Add a task func
function addTask() {
    let li = document.createElement("li");
    li.classList.add("task__list--item");
    // let completeBtn = document.createElement("button");
    // let txt = document.createTextNode("✓");
    // completeBtn.className = "completeBtn";
    // completeBtn.appendChild(txt);
    // li.appendChild(completeBtn);

    let inputValue = document.getElementById("add__section--input").value;
    let t = document.createTextNode(inputValue);
    let paraT = document.createElement("P");
    paraT.classList.add("task");
    paraT.appendChild(t);
    li.appendChild(paraT);
    if(inputValue === ''){
        alert("You must write a title");
    }
    else{
        document.getElementById("task__list").appendChild(li);
    }
    document.getElementById("add__section--input").value = "";

    // var span = document.createElement("SPAN");
    // var txt = document.createTextNode("X");
    // span.className = "close";
    // span.appendChild(txt);
    // li.appendChild(span);

    let removeBtn = document.createElement("BUTTON");
    let txt = document.createTextNode("✗");
    removeBtn.classList.add("removeBtn");
    removeBtn.appendChild(txt);
    li.appendChild(removeBtn);

    for (let i = 0; i < remove.length; i++) {
      remove[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
      };
    }

    let taskClassArray = document.getElementsByClassName("task");
    for (let index = 0; index < taskClassArray.length; index++) {
      taskClassArray[index].onclick = function () {
        taskClassArray[index].classList.toggle("checked");
      };
    }
}