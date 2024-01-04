
// EJERCICIOS DE PROGRAMACIÓN DE HA... TEC.
document.write('Check console for the results!');

// Exercise 1
document.querySelector('#exercise1').innerHTML =
        `<h2>Exercise 1 solution:</h2>
        The selected items are [${fillArray()}]`;

// Exercise 2
let result = validParenthesis(prompt("Introduce a word")) == 1 ?
        "Cadena correcta" :
        "Cadena incorrecta";
document.querySelector('#exercise2').innerHTML =
        `<h2>Exercise 2 solution:</h2> ${result}`;

// Exercise 3
let num = prompt('Introduce a number');
document.querySelector('#exercise3').innerHTML =
        `<h2>Exercise 3 solution:</h2>
        With ${num} pairs of parenthesis you can get ${getCombinations(Number(num))} combinations`

// <<-FUNCTIONS->>
function fillArray() {
    items = ["orange", "manzana", "pera", "plátano"];
    selectedIndex = [2, 3];

    selectedItems = [];
    for (let i = 0; i < selectedIndex.length; i++) {
        let index = selectedIndex[i];
        selectedItems[i] = items[index];
    }

    return selectedItems;
}

// (esto es una cadena cualquiera (hola))  -> 1
function validParenthesis(str) {
    let counterA = 0;
    let counterB = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "(")
            counterA++;
        else if (str.charAt(i) == ")")
            counterB++;

        if (counterB > counterA)
            return 0;
    }

    if (counterA == counterB)
        return 1;
    return 0;
}

// Dado un número entero, devolver el número de combinaciones posibles de paréntesis que se puedan hacer. 
// 1 -> () -> 1
// 2 -> ()(), (()) -> 2
// 3 -> ()()(), ((())), (())(), ()(()), (()()) -> 5
// 4 -> ()()()(), (((()))), (())(())->  
function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else return (num * factorialize(num - 1));
}

function getCombinations(n) {
    return factorialize(2 * n) / (factorialize(1 + n) * factorialize(n))
}
