// seleccion del DOM
const inputEntrada = document.querySelector("#input");
const btnAgregar = document.querySelector("#btnAgregar");
const spanTotal = document.querySelector("#spanTotal");
const spanRealizado = document.querySelector("#spanRealizado");
spanTotal.innerHTML = "<b>0</b>";
spanRealizado.innerHTML = "<b>0</b>";

const ulTarea = document.querySelector("#ulTarea");

// Listas
const listaTareas = [];

// Funciones
function totalTareas() {
  const total = listaTareas.length;
  spanTotal.innerHTML = `<b>${total}</b>`;
  return total;
}

// Total
function totalRealizadas() {
  const total = listaTareas.filter((t) => t.estado === "Realizada").length;
  spanRealizado.innerHTML = `<b>${total}</b>`;
  return total;
}

function entradaInput() {
  const valor = inputEntrada.value;
  if (valor.trim() == "") {
    return null;
  } else {
    return valor;
  }
}

function btnCheck(id) {
  const parrafos = document.querySelectorAll(`p[id="${id}]"`);

  const tarea = listaTareas.find((e) => e.id === id);

  if (tarea.estado == "Realizada") {
    tarea.estado = "Pendiente";
  } else {
    tarea.estado = "Realizada";
  }
  generarHTML();
  totalTareas();
  totalRealizadas();
}

function generarHTML() {
  let html = "";
  for (let tarea of listaTareas) {
    const num = String(tarea.id).padStart(2, "0");
    if (tarea.estado == "Pendiente") {
      html += `<li>
      <p id="${num}" class="p-id">${num}</p>
      <p id="${num}" class="p-tarea">${tarea.tarea}</p>
      <div class="d-btns">
      <input onclick="btnCheck(${num})" type="checkbox" name="btnOk" id="btnOK" />
      <button onclick="eliminarTarea(${num})" id="btnEliminar">❌</button>
      </div>
      </li>`;
    } else {
      html += `<li>
      <p class="p-id realizada">${num}</p>
      <p class="p-tarea realizada">${tarea.tarea}</p>
      <div class="d-btns">
      <input checked onclick="btnCheck(${num})" type="checkbox" name="btnOk" id="btnOK" />
      <button onclick="eliminarTarea(${num})" id="btnEliminar">❌</button>
      </div>
      </li>`;
    }
  }
  ulTarea.innerHTML = html;
}

function agregarTareas() {
  let id = listaTareas.length;

  if (entradaInput() == null) return;

  listaTareas.push({
    id: (id += 1),
    tarea: entradaInput(),
    estado: "Pendiente",
  });
  inputEntrada.value = "";
  generarHTML();
  totalTareas();
  totalRealizadas();
  textoInforma();
}

function eliminarTarea(id) {
  const indice = listaTareas.findIndex((t) => t.id === id);

  if (indice === -1) {
    console.log("No existe la tarea");
    return;
  }

  const eliminada = listaTareas.splice(indice, 1);
  generarHTML();
  totalTareas();
  totalRealizadas();
  console.log(eliminada);
}

// Eventos
btnAgregar.addEventListener("click", agregarTareas);

