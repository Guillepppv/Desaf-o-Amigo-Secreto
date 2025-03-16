/* Sección de entrada */
let amigos = [];
let amigosDisponibles = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre !== "") {
        if (!amigos.includes(nombre)) {
            amigos.push(nombre);
            actualizarLista();
            input.value = ""; 
        } else {
            alert("Este nombre ya fue agregado.");
        }
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}
/* Listas */
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = `${nombre} `;

        let eliminar = document.createElement("span");
        eliminar.textContent = "(X)";
        eliminar.style.cursor = "pointer";
        eliminar.style.marginLeft = "10px";
        eliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(eliminar);
        lista.appendChild(li);
    });

    amigosDisponibles = [...amigos];
}

function eliminarAmigo(index) {
    amigos.splice(index, 1); 
    actualizarLista(); 
}

/* sortear amigo */
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para sortear.");
        return;
    }

    if (amigosDisponibles.length === 0) {
        alert("Todos los amigos ya han sido sorteados. Reiniciando la lista...");
        amigosDisponibles = [...amigos]; 
    }

    let indice = Math.floor(Math.random() * amigosDisponibles.length);
    let seleccionado = amigosDisponibles.splice(indice, 1)[0]; 

   
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 
    let li = document.createElement("li");
    li.textContent = seleccionado;
    resultado.appendChild(li);
}