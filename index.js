let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

let saveBtn = document.getDocumentById("save-btn");

function save() {
    console.log(count);
}