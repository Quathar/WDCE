'use strict'

window.onload = init;

// <<-VARS->>
let start;
let stopB;
let pause;
let reset;
let fwd;
let rew;

let buttons = [];

let miliseconds;
let seconds;
let minutes;

active = false;

function init() {
    miliseconds = document.getElementById('miliseconds');
    seconds     = document.getElementById('seconds');
    minutes     = document.getElementById('minutes');

    start = document.getElementById('start');
    stopB = document.getElementById('stop');
    pause = document.getElementById('pause');
    reset = document.getElementById('reset');
    fwd   = document.getElementById('fwd');
    rew   = document.getElementById('rew');

    buttons.push(start);
    buttons.push(stopB);
    buttons.push(pause);
    buttons.push(reset);
    buttons.push(fwd);
    buttons.push(rew);

    buttons.forEach((button, i) => {
        if (i != 0) button.disabled = true;
        button.addEventListener('click', () => {
            switch (i) {
                case 0:
                    startListener();
                    break;
                case 1:
                    stopListener();
                    break;
                case 2:
                    pauseListener();
                    break;
                case 3:
                    resetListener();
                    break;
                case 4:
                    fwdListener();
                    break;
                case 5:
                    rewListener();
                    break;
            }
        });
    });
    startChrono();
}

let disableAll = () =>
    buttons.forEach((button, i) => button.disabled = true);

function startChrono(){
    setInterval(() => add1000(miliseconds), 1);
    setInterval(() => add60  (seconds),     1000);
    setInterval(() => add60  (minutes),     1000 * 60);
}

function add1000(element) {
    if (active) {
        let num = Number(element.textContent);
        if (num < 99)
             element.textContent = num + 1;
        else element.textContent = '00';
    }
}

function add60(element) {
    if (active) {
        let num = Number(element.textContent);
        if (num < 59)
             element.textContent = num + 1;
        else element.textContent = '00';
    }
}

// <<-LISTENERS->>
function startListener() {
    active = true;

    disableAll();
    stopB.disabled = false;
    pause.disabled = false;
}

function stopListener() {
    active = false;

    disableAll();
    start.disabled = false;
    reset.disabled = false;
    fwd.disabled   = false;
    rew.disabled   = false;
}

function pauseListener() {
    active = false;

    disableAll();
    start.disabled = false;
}


function resetListener() {
    disableAll();
    start.disabled = false;

    miliseconds.textContent = '00';
    seconds    .textContent = '00';
    minutes    .textContent = '00';
}

function fwdListener() {
    let num = Number(minutes.textContent);
    minutes.textContent = num + 1;
}

function rewListener() {
    let num = Number(minutes.textContent);
    if (num > 1)
         minutes.textContent = num - 1;
    else minutes.textContent = '00';
}
