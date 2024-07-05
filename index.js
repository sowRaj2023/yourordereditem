
let mainContainerEl = document.getElementById("mainContainer");
mainContainerEl.classList.add("mainContainer","text-center","p-5");

let unorderListEl = document.getElementById("unorderList");

let array = [
    {
        text:"HTML",
        id:1
    },
    {
        text:"CSS",
        id:2
    },
    {
        text:"Js",
        id:3
    },
]

function onDeleteItem(todoId){
    let todoEl = document.getElementById(todoId);

    unorderListEl.removeChild(todoEl)
}

function createAndAppend(todo){
    let todoId = "todo" + todo.id;
    let buttonId = "button" + todo.id;



let listEl =  document.createElement("li");
listEl.textContent =todo.text;
listEl.id=todoId;
listEl.classList.add("list")
unorderListEl.appendChild(listEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("bg-primary","p-2","ml-5");
buttonEl.textContent = "cancel";
buttonEl.id=buttonId;
buttonEl.onclick=function(){
   onDeleteItem(todoId)
}
listEl.appendChild(buttonEl);
}

for(let todo of array){
    createAndAppend(todo)
}