const todo = document.querySelector("#todo");
const add = document.querySelector("#add");
const complete = document.querySelector("#check");
const list = document.querySelector(".newlist");
const clear = document.querySelector("#clear");

add.addEventListener("click", creatTodo);

list.addEventListener("click", delet);

clear.addEventListener("click", clearLocal);

function creatTodo() {
  let value = todo.value;
  if (value) {
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

document.addEventListener("DOMContentLoaded", domLoad);

function domLoad() {
  let local = getFrom();
  local.forEach((e) => {
    const newList = document.createElement("tr");
    newList.classList.add("newtodo");
    const newTodo = `
        <td class="nom">1</td>
        <td class="do">${e}</td>
        <td class="check"><button id="check">beschäftigt</button></td>
        <td class="del"><button id="del">löschen</button></td>
        `;
    newList.innerHTML = newTodo;
    list.appendChild(newList);
  });
  console.log(local);
}

function delet(e) {
  if (e.target.id === "del") {
    e.target.parentElement.parentElement.remove();

    removeFrom(e);
  }
}

function addLocal(value) {
  let local = getFrom();
  local.push(value);
  localStorage.setItem("local", JSON.stringify(local));
}

function getFrom() {
  let local;
  if (localStorage.getItem("local") === null) {
    local = [];
  } else {
    local = JSON.parse(localStorage.getItem("local"));
  }
  return local;
}

function removeFrom(e) {
  local = getFrom();
  let hadaf = e.target.parentElement.parentElement.children[1].innerText;
  if (local.includes(hadaf)) {
    let index = local.indexOf(hadaf);
    local.splice(index, 1);
  }
  localStorage.setItem("local", JSON.stringify(local));
  console.log(local);
}

function clearLocal() {
  list.innerHTML = "";
  localStorage.clear();
}
