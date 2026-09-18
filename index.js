let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

let saveBtn = document.getElementById("save-btn");

function save() {
    let saveEl = document.getElementById("save-el");
    let newVar = count + " - ";
    saveEl.innerText += newVar;
    console.log(count);
}