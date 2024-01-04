window.onload = init;

let clicked = false;
let source;
let target;

// to draw
let position = 'cima';

function init() {
    let torre2 = document.querySelectorAll('#torre2 div');
    let torre3 = document.querySelectorAll('#torre3 div');

    for (let i = 0; i < torre2.length - 1; i++) {
        torre2[i + 1].style.visibility = 'hidden';
        torre3[i + 1].style.visibility = 'hidden';
    }

    let sources = document.querySelectorAll('input[name=source]');
    let targets = document.querySelectorAll('input[name=target]');
    for (let i = 0; i < sources.length; i++) {
        sources[i].addEventListener('change', () => sourcesListener(sources[i]));
        targets[i].addEventListener('click', () => targetsListener(targets[i]));
    }
}

// <<-LISTENERS->>
function sourcesListener(element) {
    clicked = true;
    source = element;
}

function targetsListener(element) {
    if (clicked) {
        clicked = false;
        target = element;
        draw();
        // Uncheck the source
        source.checked = false;
    }
    element.checked = false;
}

function draw() {
    let srcNum  = source.id.charAt(source.id.length - 1);
    let trgtNum = target.id.charAt(target.id.length - 1);

    let source2Draw = document.querySelector(`#torre${srcNum} .${position}`);
    let target2Draw = document.querySelector(`#torre${trgtNum} .${position}`);

    source2Draw.style.visibility = 'hidden';

    console.log(source2Draw.className.substring());
    target2Draw.style.visibility = 'visible';
}
