let number = 5;
let container = document.querySelector(".container");

function createPad (number) {
    let lengthOfPad = number;
    for (let length = 1; length <= lengthOfPad; length++) {
        for (let width = 1; width <= lengthOfPad; width++) {
            let x_coord = document.createElement("div");
            if ((length === 1) || (width === 1)
            || (length === lengthOfPad) || (width === lengthOfPad)) {
                x_coord.classList.add("borderBox");
                container.appendChild(x_coord);
            } else {
                x_coord.classList.add("individualBox");
                container.appendChild(x_coord);
            }
        }
    }
}