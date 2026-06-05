let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let string = "";
function updateDisplay() {
    input.value = string;
}

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        let value = button.innerHTML;
        if (value === "AC") {
            string = "";
            updateDisplay();
        }
        else if (value === "DEL") {
            string = string.slice(0, -1);
            updateDisplay();
        }

    
        else if (value === "=") {
            try {
                string = eval(string).toString();
                updateDisplay();
            } catch {
                input.value = "Error";
                string = "";
            }
        }

    
        else if (value === "%") {
            try {
                string = (eval(string) / 100).toString();
                updateDisplay();
            } catch {
                input.value = "Error";
                string = "";
            }
        }

    
        else {
            string += value;
            updateDisplay();
        }
    });

});