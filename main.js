let input = document.querySelector("input");
let button = document.querySelector(".main > button");
let maindiv = document.querySelector(".main");
let f = 0;
if (localStorage.length) {
  for (let i in localStorage) {
    if (typeof localStorage[i] == "string") {
      let k = document.createElement("div");
      k.classList.add("task");
      k.append(localStorage[i]);
      let btn = document.createElement("button");
      btn.append("Delete");
      btn.onclick = () => {
        document
          .getElementById(f)
          .parentNode.removeChild(document.getElementById(f));
      };
      k.append(btn);
      k.setAttribute("id", f);
      maindiv.append(k);
    } else break;
  }
}

button.onclick = () => {
  if (input.value) {
    f++;
    localStorage.setItem(`task${f}`, input.value);
    let newdiv = document.createElement("div");
    newdiv.append(input.value);
    newdiv.classList.add("task");
    newdiv.setAttribute("id", f);
    let btn = document.createElement("button");
    btn.append("Delete");
    btn.onclick = () => {
      document
        .getElementById(f)
        .parentNode.removeChild(document.getElementById(f));
    };
    newdiv.append(btn);
    maindiv.append(newdiv);
    input.value = "";
  } else {
    alert("error please try again");
  }
};