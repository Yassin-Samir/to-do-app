// @ts-nocheck
const input = document.querySelector("input");
const AddTaskBtn = document.querySelector(".main > button");
const mainDiv = document.querySelector(".main");
let f = 1;
if (localStorage.length) {
  let v = Object.entries(localStorage);
  for (let i = 0; i < v.length; i++) {
    if (typeof v[i][1] !== "string") break;
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.append(v[i][1]);
    const btn = document.createElement("button");
    btn.append("Delete");
    taskDiv.setAttribute("id", f);
    btn.onclick = () => {
      mainDiv.removeChild(btn.parentNode);
      console.log(`task${taskDiv.getAttribute("id")}`);
      window.localStorage.removeItem(
        `task${String(Number(taskDiv.getAttribute("id")) + 1)}`
      );
    };
    taskDiv.append(btn);
    mainDiv.append(taskDiv);
  }
}
AddTaskBtn.onclick = () => {
  if (!input.value) {
    alert("error please try again");
    return;
  }
  const newTaskDiv = document.createElement("div");
  newTaskDiv.append(input.value);
  f++;
  newTaskDiv.classList.add("task");
  newTaskDiv.setAttribute("id", f);
  window.localStorage.setItem(
    `task${newTaskDiv.getAttribute("id")}`,
    input.value
  );
  const btn = document.createElement("button");
  btn.append("Delete");
  btn.onclick = () => {
    mainDiv.removeChild(btn.parentNode);
    localStorage.removeItem(`task${newTaskDiv.getAttribute("id")}`);
    console.log(`task${newTaskDiv.getAttribute("id")}`);
  };
  newTaskDiv.append(btn);
  mainDiv.append(newTaskDiv);
  input.value = "";
};
