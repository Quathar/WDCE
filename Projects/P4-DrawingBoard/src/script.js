'use strict'

// <<-CONSTANT->>
const MAX_INPUT_LENGTH = 10;

// <<-FIELDS->>
let currentColor = 'white';
let brush = false;

// <<-METHODS->>
// <<VALIDATION>>
function validInput() {
    let input = document.getElementById('key1').value;
    return input.length === MAX_INPUT_LENGTH
        && input.startsWith('J')
        && input.includes('ap');
}

function validCheckboxes() {
    let chk1 = document.getElementById('chk1').checked;
    let chk2 = document.getElementById('chk2').checked;
    let chk3 = document.getElementById('chk3').checked;
    let chk4 = document.getElementById('chk4').checked;
    let chk5 = document.getElementById('chk5').checked;
    let chk6 = document.getElementById('chk6').checked;

    return !chk1 && chk2 && chk3 && !chk4 && chk5 && !chk6;
}

function validEntry() {
    if (validInput() && validCheckboxes()) {
        alert('Correct!')
        createDrawZone();
        return true;
    }
    alert('Incorrect!')
    return false;
}

// <<BOARD>>
let createDrawZone = () => {
    drawBoard();
    addFunctionality();
}

function drawBoard() {
    document.getElementById('palet').style.visibility = 'visible';
    const zone = document.getElementById('drawZone');

    const rows = 30;
    const columns = 30;

    let str = '<table >';
    for (let i = 0; i < rows; i++) {
        str += '<tr>';
        for (let j = 0; j < columns; j++)
            str += '<td class="tablerodibujo cells"></td>';
        str += '</tr>';
    }
    str += '</table>';
    zone.innerHTML = str;
}

let addFunctionality = () =>
    document.querySelectorAll('.cells')
        .forEach(cell => {
            cell.addEventListener('click', () => {
                brush = !brush
                changeText();
            });
            cell.addEventListener('mouseover', () => {
                if (brush)
                    cell.style.background = currentColor;
            });
        });

let changeText = () =>
    document.getElementById('pincel').textContent =
        brush ?
            `Activated brush: ${currentColor}` :
            `Brush deactivated`;

let select = (color) => {
    changeText();
    currentColor = color;
}

function createTable() {
    const contenido = document.getElementById("drawZone");
    contenido.innerHTML = `<p>This paragraph disappears and the drawing board appears.</p>`;
}

let activarTablero = () => createTable();
