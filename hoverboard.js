let number = 5;
let container = document.querySelector(".container");

function createPad (number) {
    let lengthOfPad = number;
    for (let length = 1; length <= lengthOfPad; length++) {
        for (let width = 1; width <= lengthOfPad; width++) {
            let x_coord = document.createElement("div");
            /* Bunch of if else statements to check if a box is a corner box */
            if (width === 1 && length === 1) {
                x_coord.classList.add("topLeftBox");
                container.appendChild(x_coord);
            } else if (width === lengthOfPad && length === 1) {
                x_coord.classList.add("topRightBox");
                container.appendChild(x_coord);
            } else if (width === 1 && length === lengthOfPad) {
                x_coord.classList.add("bottomLeftBox");
                container.appendChild(x_coord);
            } else if (width === lengthOfPad && length === lengthOfPad) {
                x_coord.classList.add("bottomRightBox");
                container.appendChild(x_coord);
                
            /* if statement checks if operands lie on the outside and
                assigns border box class to them
                If boxes are on corners, it skips over them */
            } else if ((length === 1) 
                || (width === 1)
                || (length === lengthOfPad) 
                || (width === lengthOfPad)) {
                    x_coord.classList.add("borderBox");
                    container.appendChild(x_coord);
            } else {
            /* else statement assigns class individualBox to every other box */
                x_coord.classList.add("individualBox");
                container.appendChild(x_coord);
            }
        }
    }
}