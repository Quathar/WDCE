
// <<-VARS->>
let counter = 1;
let table = document.createElement('table');

table.id = 'table';
for (let i = 0; i < 100; i++) {
    let tr = table.insertRow();
    for (let j = 0; j < 100; j++) {
        let td = tr.insertCell();
        td.id = counter.toString();
        td.textContent = counter.toString();
        td.style.border = '1px solid black';
        counter++;
    }
}

let btn = document.createElement('input');
btn.type = 'button';
btn.value = 'Almost primes'
btn.addEventListener('click', calculatePrimeNumber)

document.body.appendChild(btn)
document.body.appendChild(table);

// <<-FUNCTIONS->>
function calculatePrimeNumber() {
    let cells = document.getElementsByTagName('td');
    Array.from(cells)
        .filter(td => isAlmostPrime(Number(td.id)))
        .forEach(td => td.style.background = 'yellow');
}

function isAlmostPrime(num) {
    if (num < 9 || num % 2 === 0)
        return false;

    let counter = 0;
    for (let i = 2; i < num - 1; i++) {
        if (num % i === 0)
            counter++;
        if (counter >= 2)
            return false;
    }

    return true;
}