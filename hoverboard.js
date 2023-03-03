
/* Default color is set to black, the drop down menu is set by default */
let container = document.querySelector(".container");
let submitForm = document.querySelector(".submitForLength");
let submitValueTextField = document.querySelector("#lengthOfGrid");
let colorSubmitButton = document.querySelector(".colorSubmitButton");
let presetColorOptions  = document.querySelector("#presetColors");
let colorTextDisplayer = document.querySelector(".currentColor");
let colorValueDisplayer = document.querySelector(".currentColorDisplayer");
let currentColor = 'black';
let currentColorDisplay = "Black";
let rValue = 0;
let gValue = 0;
let bValue = 0;
let usePreset = 1;

/* This statement makes the submit button draw the square when clicked */

submitForm.addEventListener('click', drawPad);

/* This one makes the text field draw when the square when enter is pressed while the text field is in focus*/
submitValueTextField.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        drawPad();
    } else {
        return;
    }
});

/* This hooks the preset color drop down menu to presetColor function and allows you to change
preset colors while also setting usePreset to 1 */
presetColorOptions.addEventListener('change', presetColor);

function presetColor (e) {
    currentColor = presetColorOptions.options[presetColorOptions.selectedIndex].value;
    currentColorDisplay = presetColorOptions.options[presetColorOptions.selectedIndex].text;
    console.log(currentColor);
    console.log(currentColorDisplay);
    colorTextDisplayer.textContent = `Current color: ${currentColorDisplay}`;
    colorValueDisplayer.style.backgroundColor = currentColor;
    usePreset = 1;
}

/* This eventListener is linked to the submit button for the color.
This sets usePreset to 0 */
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

/* This hooks to the button for the three text fields below the square, sets a color
in RGB format */
function changeColor() {
    usePreset = 0;
    rValue = parseInt(document.querySelector("#rValue").value);
    gValue = parseInt(document.querySelector("#gValue").value);
    bValue = parseInt(document.querySelector("#bValue").value);
    colorTextDisplayer.textContent = `Current color: RGB (${rValue}, ${gValue}, ${bValue})`;
    colorValueDisplayer.style.backgroundColor = ("rgb(" + rValue + "," + gValue + "," + bValue); 
}