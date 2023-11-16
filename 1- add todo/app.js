const todo = document.querySelector("#todo");
const add = document.querySelector("#add");
const complete = document.querySelector("#check");
const list = document.querySelector(".newlist");
const clear = document.querySelector("#clear");


add.addEventListener("click", creatTodo);


function creatTodo() {
    let value = todo.value;
    if (value){
        const newList = document.createElement("tr");
        newList.classList.add("newtodo");
        const newTodo = `
        <td class="nom">1</td>
        <td class="do">${value}</td>
        <td class="check"><button id="check">beschäftigt</button></td>
        <td class="del"><button id="del">löschen</button></td>
        `;
        newList.innerHTML = newTodo;
        list.appendChild(newList);
        todo.value = "";
        addLocal(value);
    }
}
