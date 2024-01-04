
// alert('Hello!');

// <<-PROGRAM FLOW->>
function main() {
    addListeners();
}

function addListeners() {
    let r1 = document.getElementById('r1');
    let r2 = document.getElementById('r2');
    let r3 = document.getElementById('r3');

    r1.addEventListener('mouseover', toBlue);
    r2.addEventListener('click',     r2Events);
    r3.addEventListener('dblclick',  r3Events);
}

function toBlue() {
    let r1 = document.getElementById('r1');
    r1.style.background = 'blue';
}

function r2Events() {
    // FINISH
    // FINISH
    // FINISH
}

function r3Events() {
    // FINISH
    // FINISH
    // FINISH
}
