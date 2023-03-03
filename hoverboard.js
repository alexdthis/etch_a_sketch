
let container = document.querySelector(".container");
let submitForm = document.querySelector(".submitForLength");
let submitValueTextField = document.querySelector("#lengthOfGrid");
let colorSubmitButton = document.querySelector(".colorSubmitButton");
let rValue = 0;
let gValue = 0;
let bValue = 0;

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

/* This eventListener is linked to the submit button for the color */
colorSubmitButton.addEventListener('click', changeColor);
/* This eventListener is linked to the drawing function */
container.addEventListener('mousemove', (e) => {
    if (defaultColor === 0) {
        colorHoverOver(e);
    } else if (defaultColor === 1) {
        hoverOver(e);

    }
});

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
    /* console.log(e.target.classList); */
    e.target.classList.add("playing");
}

function colorHoverOver (e) {
    if (e.target.classList[0] !== "boxes") {
        return;
    }
    if (e.buttons != 1) {
        return;
    }
    e.target.style.backgroundColor = ("rgb(" + rValue + "," + gValue + "," + bValue);
    /* Attempt at trying to assign a new class that contains a new color when 
    a different color is selected. 
    e.target.classList.add("newColored");
    newColor = document.querySelectorAll(".newColored");
    newColor.; */
    /* e.target.backgroundColor = "red"; *//* String(`rgb($(rValue), $(gValue), $(bValue))`) */;
    /* e.target.querySelector(".colored").style.backgroundColor = String(`rgb($(rValue), $(gValue), $(bValue))`); */
}
/* General function that is called when
the submit button is clicked.
Removes any old grid squares and redraws a new grid
with a specified number */
function changeColorLoop() {

}

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

            /* Bunch of if else statements to check if a box is a corner box or a border box 
            if (width === 1 && length === 1) {
                x_coord.classList.add("topLeftBox");
                row.appendChild(x_coord);
            } else if (width === lengthOfPad && length === 1) {
                x_coord.classList.add("topRightBox");
                row.appendChild(x_coord);
            } else if (width === 1 && length === lengthOfPad) {
                x_coord.classList.add("bottomLeftBox");
                row.appendChild(x_coord);
            } else if (width === lengthOfPad && length === lengthOfPad) {
                x_coord.classList.add("bottomRightBox");
                row.appendChild(x_coord);
            } else if (length === 1) {
                x_coord.classList.add("topBoxes");
                row.appendChild(x_coord);
            } else if (length === lengthOfPad) {
                x_coord.classList.add("bottomBoxes");
                row.appendChild(x_coord);
            } else if (width === 1) {
                x_coord.classList.add("leftBoxes");
                row.appendChild(x_coord);
            } else if (width === lengthOfPad) {
                x_coord.classList.add("rightBoxes");
                row.appendChild(x_coord);
            } else {
            else statement assigns class individualBox to every other box
                x_coord.classList.add("individualBox");
                row.appendChild(x_coord); 
            } */
        }
        container.appendChild(row);
    }
}

function changeColor() {
    defaultColor = 0;
    rValue = parseInt(document.querySelector("#rValue").value);
    gValue = parseInt(document.querySelector("#gValue").value);
    bValue = parseInt(document.querySelector("#bValue").value);

    /* document
    let coloredState = document.querySelector(".playing");
    rValue = parseInt(document.querySelector("#rValue").value);
    gValue = parseInt(document.querySelector("#gValue").value);
    bValue = parseInt(document.querySelector("#bValue").value);
    coloredState.style.background = rgb(rValue, gValue, bValue);   */ 
}