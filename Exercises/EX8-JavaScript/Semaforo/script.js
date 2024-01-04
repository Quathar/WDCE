window.onload = init;

// <<-CONSTANTS->>
const WAIT = 'Peatón Espere';
const CONTINUE = 'Cruce ahora';

// <<-VARS->>
let wait;
let touch;

let red;
let yellow;
let green;

// <<-FUNCTIONS->>
function init() {
    wait   = document.getElementById('wait');
    touch  = document.getElementById('touch');

    red    = document.getElementById('red');
    yellow = document.getElementById('yellow');
    green  = document.getElementById('green');

    touch.addEventListener('click', events);
}

// <<-LISTENERS->>
function events() {
    touch.disabled = true;
    wait.style.background = 'rgb(0, 128, 128)';
    setTimeout(firstChange, 2000);
}

function firstChange() {
    green.style.background = 'rgb(0, 255, 0, 0.5)';
    yellow.style.background = 'rgb(255, 255, 0, 1)';
    setTimeout(secondChange, 1000);
}

function secondChange() {
    yellow.style.background = 'rgb(255, 255, 0, 0.5)';
    red.style.background = 'rgb(255, 0, 0, 1)';
    wait.textContent = CONTINUE;
    wait.style.background = 'white';

    setTimeout(reset, 5000);
}

function reset() {
    touch.disabled = false;
    red.style.background = 'rgb(255, 0, 0, 0.5)';
    green.style.background = 'rgb(0, 255, 0, 1)';
    wait.textContent = WAIT;
}