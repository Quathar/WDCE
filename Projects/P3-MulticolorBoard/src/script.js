
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function createTable(rows, columns) {
    // <body>
    let body = document.body;
    body.style =
        'height: 60vh;' +
        'display: flex;' +
        'justify-content: center;' +
        'margin-top: 5rem';

    // <table>
    let table = document.createElement('table');
    table.style =
        'width: 80%;' +
        'height: 100%;' +
        'border: 2px solid black;' +
        'font-family: monospace';

    // Creating header
    let thr = table.insertRow();
    let th = thr.insertCell();
    th.setAttribute('colspan', columns);
    th.style =
        'border:1px solid grey;' +
        'height: 1.5rem;' +
        'text-align: center;' +
        'font-size: 1.5rem';
    th.textContent = "Quathar's Table"

    // Creating data
    for (let i = 0; i < rows; i++) {
        let tr = table.insertRow();
        for (let j = 0; j < columns; j++) {
            let td = tr.insertCell();
            td.style =
                'border: 1px solid black;' +
                'height: 2rem;' +
                'text-align: center;' +
                'font-size: 1.2rem';
            let rgb = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
            td.style.background = rgb;
            td.textContent = rgb;
        }
    }

    // Adding table to the body
    body.appendChild(table);
}
