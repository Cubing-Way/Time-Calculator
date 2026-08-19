//keyboard.js

// Initialize variables
let selected = "hours1"; // Default ffirst input
let resultFlag = false; // Prevents calc looping

    const orderArray = ["hours1", "minutes1", "seconds1", "hours2", "minutes2", "seconds2"];

function next(index) {
    return orderArray[index + 1];
}


orderArray.forEach((order) => {

    document.getElementById(order).addEventListener("input", () => {

        if (document.getElementById(order).value.length === 2) {

            const index = orderArray.indexOf(order);

            selected = next(index);
        }
    });

});

// Enter key event listener
document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {

        // Prevents auto typing last selected num
        event.preventDefault(); 

        // First input switching condition
        if (selected === "seconds1") {

            // Final switch to result
            selected = "result";

        // Compute and process operation result
        } else { 

            //Call the calc function
            const result = calcResult(); 

            // Display the result in the result div
            document. getElementById('result').textContent = result;

            // Resets switching
            selected = "hours1"; 

            // Sets result switching flag
            resultFlag = true; 
        }

        // Reset condition
        if (resultFlag) { 

            //Clear inputs for next operation
            document.querySelectorAll("input").forEach(input => input.value = "");

           // Resets result switching flag
            resultFlag = false
        }
}});



/** 
    Keyboard input event listeners 
**/ 


function addNumber(number) {
    const input = document.getElementById(selected);

    input.value += number;

    input.dispatchEvent(new Event("input", { bubbles: true }));
}

document.addEventListener("keydown", (event) => {

    if (event.key >= "0" && event.key <= "9") {
        event.preventDefault();

        addNumber(event.key);
    }

});

document.getElementById("btn0").addEventListener("click", () => addNumber("0"));
document.getElementById("btn1").addEventListener("click", () => addNumber("1"));
document.getElementById("btn2").addEventListener("click", () => addNumber("2"));
document.getElementById("btn3").addEventListener("click", () => addNumber("3"));
document.getElementById("btn4").addEventListener("click", () => addNumber("4"));
document.getElementById("btn5").addEventListener("click", () => addNumber("5"));
document.getElementById("btn6").addEventListener("click", () => addNumber("6"));
document.getElementById("btn7").addEventListener("click", () => addNumber("7"));
document.getElementById("btn8").addEventListener("click", () => addNumber("8"));
document.getElementById("btn9").addEventListener("click", () => addNumber("9"));