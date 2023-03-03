
let container = document.querySelector(".container");
let submitForm = document.querySelector(".submitForLength");
let submitValueTextField = document.querySelector("#lengthOfGrid");
let colorSubmitButton = document.querySelector(".colorSubmitButton");
let presetColorOptions  = document.querySelector("#presetColors");
let currentColor = 'black';
let currentColorDisplay = "Black";
let rValue = 255;
let gValue = 255;
let bValue = 255;
let usePreset = 1;

let submittedValue = 0;
let defaultColor = 1;

/* Test function to get keycodes

window.addEventListener('keydown', (e) => {console.log(e)}); */
/* This statement makes the submit button draw the square when clicked */
submitForm.addEventListener('click', drawPad);
/* This one makes the text field draw when the square when enter is pressed */
submitValueTextField.addEventListener("keydown", (e) => {
    /* console.log(e); */
    if (e.keyCode === 13) {
        /* console.log(e); */
        drawPad();
    } else {
        return;
    }
});

presetColorOptions.addEventListener('change', presetColor);

function presetColor (e) {
    currentColor = presetColorOptions.options[presetColorOptions.selectedIndex].value;
    currentColorDisplay = presetColorOptions.options[presetColorOptions.selectedIndex].text;
    console.log(currentColor);
    console.log(currentColorDisplay);
    usePreset = 1;
}
/* This eventListener is linked to the submit button for the color */
colorSubmitButton.addEventListener('click', changeColor);
/* This eventListener is linked to the drawing function */
container.addEventListener('mousemove', hoverOver);

/* Fired when the grid gets made.
playing class only gets added when the mouse
is pressed down */

function hoverOver(e) {
    if (e.target.classList[0] !== "boxes") {
        return;
    }
    if (e.buttons != 1) {
        return;
    }
    if (usePreset === 1) {
        e.target.style.backgroundColor = currentColor;
    } else if (usePreset === 0) {
        e.target.style.backgroundColor = ("rgb(" + rValue + "," + gValue + "," + bValue);
    }
}
/* General function that is called when
the submit button is clicked.
Removes any old grid squares and redraws a new grid
with a specified number */

function drawPad() {
    if(container.hasChildNodes()) {
        removeOldSquares();
    }
    createPad();
}

/*Removes an old grid */

function removeOldSquares() {
    while(container.hasChildNodes()) {
        container.removeChild(container.childNodes[0]);
    }
}

/* Function that makes x number of rows where x is the given number,
loops through each row giving it x number of divs before appending
all the rows to the container div */

function createPad () {
    lengthOfPad = document.getElementById("lengthOfGrid").value;
    for (let length = 1; length <= lengthOfPad; length++) {
        let row = document.createElement("p");
        row.classList.add("rowContainer");
        for (let width = 1; width <= lengthOfPad; width++) {
            let x_coord = document.createElement("div");
            x_coord.classList.add("boxes");
            row.appendChild(x_coord);
        }
        container.appendChild(row);
    }
}

function changeColor() {
    usePreset = 0;
    rValue = parseInt(document.querySelector("#rValue").value);
    gValue = parseInt(document.querySelector("#gValue").value);
    bValue = parseInt(document.querySelector("#bValue").value); 
}