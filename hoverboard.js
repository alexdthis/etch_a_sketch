let number = 5;
let container = document.querySelector(".container");

function createPad (number) {
    let lengthOfPad = number;
    for (let length = 1; length <= lengthOfPad; length++) {
        for (let width = 1; width <= lengthOfPad; width++) {
            let x_coord = document.createElement("div");
            /* 1st if statement checks if sum of x and y are equal to
            2, 1 + length, or 2 * length, then assigns the following
            divs class "cornerBox". If either x or y coordinate do not
            equal 1 or the given length, it is skipped over */
            if ((((length + width) === 2)
                || ((length + width) === (1 + lengthOfPad))
                || ((length + width) === (2 * lengthOfPad)))
                && ((length === 1) || (width === 1)
                || (length === lengthOfPad) || (width === lengthOfPad)))
                    {
                    x_coord.classList.add("cornerBox");
                    container.appendChild(x_coord);
            /* if statement checks if operands lie on the outside and
                assigns border box class to them
                If boxes are on corners, it skips over them */
            } else if ((length === 1) 
                || (width === 1)
                || (length === lengthOfPad) 
                || (width === lengthOfPad)) 
                {
                    x_coord.classList.add("borderBox");
                    container.appendChild(x_coord);
            } else 
                {
            /* else statement assigns class individualBox to every other box */
                x_coord.classList.add("individualBox");
                container.appendChild(x_coord);
            }
        }
    }
}