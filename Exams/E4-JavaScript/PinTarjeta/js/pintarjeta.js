"use strict"

// <<-CONSTANTS->>
const keyword = "javascript";
const keyyear = "2012";

// <<-VARS->>
let inputText = document.querySelector('#keyword');
let chk1      = document.querySelector('#chk1');
let chk2      = document.querySelector('#chk2');
let chk3      = document.querySelector('#chk3');

let init      = document.querySelector('#show');
let curtain   = document.querySelector('#cortina');
let code      = document.querySelector('#codigo');
let seconds = document.querySelector('#segundos');

init.addEventListener('click', iniciar);

// <<-FUNCTIONS->>
function iniciar() {
    // Comprobamos que:
    // - En el input este la palabra 'javascript'
    // - Esté el 2do check seleccionado y ninguno de los otros
    if (check()) {
        // Dejamos que se vea el div codigo y escondemos el div cortina
        curtain.style.visibility = 'hidden';
        code.style.visibility = 'visible';

        // Agregamos 5 en el visor de los segundos
        seconds.textContent = 5;

        // Le decimos que vaya decreciendo cada segundo hasta llegar a 0
        // Entonces se invoca la función finish()
        setInterval(() => {
            if (seconds.textContent > 0)
                seconds.textContent--;
            else finish();
        }, 1000);
    } else seconds.textContent = 'ERROR';
}

function check() {
    if (inputText.value == keyword)
        return !chk1.checked && chk2.checked && !chk3.checked
    return false;
}

function finish() {
    // Hacemos el proceso inverso, escondemos los números y mostramos la cortina de nuevo
    curtain.style.visibility = 'visible';
    code.style.visibility = 'hidden';
}