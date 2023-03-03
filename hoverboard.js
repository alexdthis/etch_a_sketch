
let container = document.querySelector(".container");
let submitForm = document.querySelector(".submitForLength");
let submittedValue = 0;
    
submitForm.addEventListener('click', drawPad);
container.addEventListener('mousemove', hoverOver);

function hoverOver(e) {
    if (e.target.classList[0] !== "boxes") {
        return;
    }

    if (e.buttons != 1) {
        return;
    }
    console.log(e.target.classList);
    e.target.classList.add("playing");
}
function drawPad(e) {
    if(container.hasChildNodes()) {
        removeOldSquares();
    }
    createPad();
}

function removeOldSquares() {
    while(container.hasChildNodes()) {
        container.removeChild(container.childNodes[0]);
    }
}

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