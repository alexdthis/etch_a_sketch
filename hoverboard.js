let number = 5;
let container = document.querySelector(".container");

function createPad (number) {
    let lengthOfPad = number;
    for (let length = 1; length <= lengthOfPad; length++) {
        for (let width = 1; width <= lengthOfPad; width++) {
            let x_coord = document.createElement("div");
            /* Bunch of if else statements to check if a box is a corner box or a border box */
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
            } else if (length === 1) {
                x_coord.classList.add("topBoxes");
                container.appendChild(x_coord);
            } else if (length === lengthOfPad) {
                x_coord.classList.add("bottomBoxes");
                container.appendChild(x_coord);
            } else if (width === 1) {
                x_coord.classList.add("leftBoxes");
                container.appendChild(x_coord);
            } else if (width === lengthOfPad) {
                x_coord.classList.add("rightBoxes");
                container.appendChild(x_coord);
            } else {
            /* else statement assigns class individualBox to every other box */
                x_coord.classList.add("individualBox");
                container.appendChild(x_coord);
            }
        }
    }
}