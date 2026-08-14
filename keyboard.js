//keyboard.js

// Initialize variables
let selected = "hours1"; // Default ffirst input
let resultFlag = false; // Prevents calc looping

// Enter key event listener
document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {

        // Prevents auto typing last selected num
        event.preventDefault(); 

        // Input switcher
        if (selected === "hours1") {
            // Prevents calc looping
            if (resultFlag) return; 

            // IF reset goes back to switching inputs
            selected = "minutes1";
        } else if (selected === "minutes1") {
            selected = "seconds1"
        } else if (selected === "seconds1") {
            selected = "hours2";
        } else if (selected === "hours2") {
            selected = "minutes2";
        } else if (selected === "minutes2") {
            selected = "seconds2";
        } else if (selected === "seconds1") {
            selected = "result";

        } else { // Compute and process operation result

            //Call the calc function
            const result = calcResult(); 

            // Display the result in the result div
            document. getElementById('result').textContent = result;

            // Resets switching
            selected = "hours1"; 

            // Sets result switching flag
            resultFlag = true; 
        }
        if (resultFlag) { // Reset condition

            //Clear inputs for next operation
            document.querySelectorAll("input").forEach(input => input.value = "");

           // Resets result switching flag
            resultFlag = false
        }
}});

document.getElementById("okBtn").addEventListener("click", () => {
        // Prevents auto typing last selected num
        event.preventDefault(); 

        // First input switching condition
        if (selected === "hours1") { 
            // Prevents calc looping
            if (resultFlag) return; 

            //  Reset Switches nack to first input
            selected = "minutes1"; 

        // Next switching condition
        } else if (selected === "minutes1") { 

            // Switches to next input
            selected = "seconds1"

        
        } else if (selected === "seconds1") {

            // Switches to next input
            selected = "hours2";

        } else if (selected === "hours2") {

            // Switches to next input
            selected = "minutes2";

        } else if (selected === "minutes2") {
            // Switches to next input
            selected = "seconds2";

        // Next switching condition
        } else if (selected === "seconds1") {

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
});

/** 
    Keyboard input event listeners 
**/ 

// Keyboard's btn event listener
document.getElementById("btn0").addEventListener("click", function() {

    // Adds num to curr input
    document.getElementById(selected).value += "0"; 

});

// Keyboard's btn event listener
document.getElementById("btn1").addEventListener("click", function() {

    // Adds num to curr input
    document.getElementById(selected).value += "1";

});

// Keyboard's btn event listener
document.getElementById("btn2").addEventListener("click", function() {

    // Adds num to curr input
    document.getElementById(selected).value += "2";

});

// Keyboard's btn event listener
document.getElementById("btn3").addEventListener("click", function() {

    // Adds num to curr input
    document.getElementById(selected).value += "3";

});

// Keyboard's btn event listener
document.getElementById("btn4").addEventListener("click", function() {

    // Adds num to curr input
    document.getElementById(selected).value += "4";

});

// Keyboard's btn event listener
document.getElementById("btn5").addEventListener("click", function() {
    
    // Adds num to curr input
    document.getElementById(selected).value += "5";

});

// Keyboard's btn event listener
document.getElementById("btn6").addEventListener("click", function() {
    
    // Adds num to curr input
    document.getElementById(selected).value += "6";

});

// Keyboard's btn event listener
document.getElementById("btn7").addEventListener("click", function() {
    
    // Adds num to curr input
    document.getElementById(selected).value += "7";

});

// Keyboard's btn event listener
document.getElementById("btn8").addEventListener("click", function() {

    // Adds num to curr input
    document.getElementById(selected).value += "8";

});

// Keyboard's btn event listener
document.getElementById("btn9").addEventListener("click", function() {

    // Adds num to curr input
    document.getElementById(selected).value += "9";

});