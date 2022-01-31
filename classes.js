const input = document.querySelector('input'); //del input de formulario
const addBtn = document.querySelector('.btn-add') //para el botón "Add"
const ul = document.querySelector('.add-list'); //lista
const empty = document.querySelector('.empty'); //cuando no hay to do

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== "") {

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteButton());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
}
});

function addDeleteButton() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click' , (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

    const items = document.querySelector("li");

    if(items.length === 0){
        empty.style.display = "block";
    }
    });
    return deleteBtn;
}