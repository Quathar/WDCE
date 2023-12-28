"use strict"

// <<-CONSTANTS->>
const numFilas = 9;
const numColumnas = 6;
const TOTAL = 50;

// <<-VARS->>
let total = 0;

let drawZone = document.querySelector('#boleto');
let button   = document.querySelector('#start');

let boxesInfo = [];
let boxes     = document.querySelectorAll('.numero');

let cellsModel = [];

// Creación del boleto
drawZone.style = 'display:flex;';

// Generamos el grid de números
for (let i = 0; i < numColumnas; i++) {
    let column = document.createElement('div');
    for (let j = 0; j < numFilas; j++) {
        if (total < 50) {
            let cell = document.createElement('div');
            total += 1;
            cell.textContent = total;
            cell.id = total;
            cell.className = 'celda numero';
            // cell.style = `border:2px solid red;
            //               padding:0.5rem;
            //               color:red;
            //               margin:1px`;
            cellsModel[total] = cell;
            column.appendChild(cell);
        }
    }
    drawZone.append(column);
}

// Finalmente añadimos el listener al botón 'Busca tu Millón'
button.addEventListener('click', iniciarSorteo);

// <<-LISTENERS->>
function iniciarSorteo() {
    // Ponemos el fondo blanco a las celdas
    // que fueron seleccionadas en la tirada anterior
    boxesInfo.forEach(i => cellsModel[i].style.background = 'white');

    // Pasos:
    // - Generamos un número aleatorio
    //   y lo guardamos en la posición i de nuestro contenido de las celdas
    // - Comprobamos que ese número no exista ya en otra casilla
    // - Si no existe en ninguna otra casilla, mostramos ese número
    boxes.forEach((box, i) => {
        boxesInfo[i] = Math.floor(Math.random() * TOTAL + 1);
        while (exist(boxesInfo[i])) boxesInfo[i] = Math.floor(Math.random() * TOTAL + 1);
        box.textContent = boxesInfo[i];
    });

    // En boxesContent tenemos los números que han sido seleccionados
    // Para cada uno de esos números vamos a buscarlos en cellsModel
    // y cambiar el color del fondo de esa celda a amarillo;
    boxesInfo.forEach(i => cellsModel[i].style.background = 'yellow');
}

function exist(randomNumber) {
    // return boxesInfo .includes(randomNumber);

    if (Number('7') === 7) {
        console.log("Son iguales");
    }

    boxesInfo.forEach(box => {
        if (Number(box.textContent) === randomNumber) return true; 
    });
    return false;
}