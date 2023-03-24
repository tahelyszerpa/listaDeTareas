const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const itemLi = document.querySelector("ul li");
const total = document.querySelector("#total");
const completadas = document.querySelector("#completadas");
const fecha = document.querySelector("#fecha");

const fechaActual = new Date();
fecha.innerHTML = fechaActual.toLocaleDateString('es-AR', { weekday: 'long', month: 'short', day: 'numeric' })
let cont = 0

let tareas = []
addBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const text = input.value;
    const ObjTarea = {
        id: Date.now(),
        tarea: text,
        estado: false
    }

    tareas = [...tareas, ObjTarea];
    console.log(tareas);

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");

        p.textContent = text;

        li.appendChild(p);
        ul.appendChild(li);
        li.appendChild(addDeleteBtn());
        li.appendChild(addCheckBtn());

        input.value = "";
        empty.style.display = "none";

    }
    mostrarHTML();
});

function mostrarHTML() {
    tareas.forEach((item) => {

        const items = document.querySelectorAll("li");
        let totalT = items.length;
        let tareasCompletas = cont
        console.log('El valor es: ', tareasCompletas)


        total.textContent = `Total tareas: ${totalT}`;

    }
    )
}

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x"
    deleteBtn.className = "btn-delete"

    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");
        mostrarHTML();
        if (items.length === 0) {
            empty.style.display = "block";
        }

    })
    return deleteBtn;
};


function addCheckBtn() {

    const checkBtn = document.createElement("button");
    checkBtn.textContent = "/";
    checkBtn.className = "btn-check";

    checkBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        const listo = item.firstElementChild
        console.log()
        if (tareas.tarea == item.textContent) {
            tareas.forEach(function (item) {
                item.estado = true

            })
        }
        cont = cont + 1;

        listo.setAttribute("style", "text-decoration:line-through;");
        completadas.textContent = `Tareas Completadas: ${cont}`;

    });

    const items = document.querySelectorAll("li");
    mostrarHTML();
    return checkBtn;
};

