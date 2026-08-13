// main.js

// Get the result button element
const resultBtn = document.getElementById('resultBtn');

resultBtn.addEventListener('click', () => {

    // Input values from the first time input
    const input1hours = document.getElementById('hours1').value;
    const input1minutes = document.getElementById('minutes1').value;
    const input1seconds = document.getElementById('seconds1').value;

    // Input values from the second time input
    const input2hours = document.getElementById('hours2').value;
    const input2minutes = document.getElementById('minutes2').value;
    const input2seconds = document.getElementById('seconds2').value;

    // Convert the input values to total seconds
    const totalSeconds1 = (parseInt(input1hours) * 3600) + (parseInt(input1minutes) * 60) + parseInt(input1seconds);
    const totalSeconds2 = (parseInt(input2hours) * 3600) + (parseInt(input2minutes) * 60) + parseInt(input2seconds);

    let resultHours, resultMinutes, resultSeconds;
    // Call the calcSum function to calculate the sum of the two time inputs
    if (document.getElementById('operation').value === 'sum') {
        ({ resultHours, resultMinutes, resultSeconds } = calcSum(totalSeconds1, totalSeconds2));
    } else {
        ({ resultHours, resultMinutes, resultSeconds } = calcDiff(totalSeconds1, totalSeconds2));
    }
    const result = `${resultHours} hours, ${resultMinutes} minutes, ${resultSeconds} seconds`;

    // Display the result in the result div
    document.getElementById('result').textContent = result;
});

function calcSum(totalSeconds1, totalSeconds2) {
    // Calculate the total seconds by adding the two time inputs
    const totalSeconds = totalSeconds1 + totalSeconds2; 

    // Convert the total seconds back to hours, minutes, and seconds
    const resultHours = Math.floor(totalSeconds / 3600);
    const resultMinutes = Math.floor((totalSeconds % 3600) / 60);
    const resultSeconds = totalSeconds % 60; 

    // Return the result as an object
    return { resultHours, resultMinutes, resultSeconds };
}

function calcDiff(totalSeconds1, totalSeconds2) {
    // Calculate the difference in seconds
    const totalSeconds = totalSeconds1 - totalSeconds2;
    
    // Convert the total seconds back to hours, minutes, and seconds
    const resultHours = Math.floor(totalSeconds / 3600);
    const resultMinutes = Math.floor((totalSeconds % 3600) / 60);
    const resultSeconds = totalSeconds % 60;

    // Return the result as an object
    return { resultHours, resultMinutes, resultSeconds };
} 