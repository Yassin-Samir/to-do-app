// @ts-nocheck
let input = document.querySelector("input");
let button = document.querySelector(".main > button");
let maindiv = document.querySelector(".main");
let f = 1;
if (localStorage.length) {
  let v = Object.entries(localStorage);
  for (let i = 0; i < v.length; i++) {
    if (typeof v[i][1] == "string") {
      let k = document.createElement("div");
      k.classList.add("task");
      k.append(v[i][1]);
      let btn = document.createElement("button");
      btn.append("Delete");
      k.setAttribute("id", f);
      btn.onclick = () => {
        maindiv.removeChild(btn.parentNode);
        console.log(`task${k.getAttribute("id")}`);
        window.localStorage.removeItem(
          `task${String(Number(k.getAttribute("id")) + 1)}`
        );
      };
      k.append(btn);
      maindiv.append(k);
    } else break;
  }
}
button.onclick = () => {
  if (input.value) {
    let newdiv = document.createElement("div");
    newdiv.append(input.value);
    f++;
    newdiv.classList.add("task");
    newdiv.setAttribute("id", f);
    window.localStorage.setItem(
      `task${newdiv.getAttribute("id")}`,
      input.value
    );
    let btn = document.createElement("button");
    btn.append("Delete");
    btn.onclick = () => {
      maindiv.removeChild(btn.parentNode);
      localStorage.removeItem(`task${newdiv.getAttribute("id")}`);
      console.log(`task${newdiv.getAttribute("id")}`);
    };
    newdiv.append(btn);
    maindiv.append(newdiv);
    input.value = "";
  } else {
    alert("error please try again");
  }
};
