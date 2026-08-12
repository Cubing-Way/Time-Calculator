// main.js

const resultBtn = document.getElementById('resultBtn');

resultBtn.addEventListener('click', () => {

    const input1hours = document.getElementById('hours1').value;
    const input1minutes = document.getElementById('minutes1').value;
    const input1seconds = document.getElementById('seconds1').value;

    const input2hours = document.getElementById('hours2').value;
    const input2minutes = document.getElementById('minutes2').value;
    const input2seconds = document.getElementById('seconds2').value;

    const totalSeconds1 = (parseInt(input1hours) * 3600) + (parseInt(input1minutes) * 60) + parseInt(input1seconds);
    const totalSeconds2 = (parseInt(input2hours) * 3600) + (parseInt(input2minutes) * 60) + parseInt(input2seconds);

    const totalSeconds = totalSeconds1 + totalSeconds2;

    const resultHours = Math.floor(totalSeconds / 3600);
    const resultMinutes = Math.floor((totalSeconds % 3600) / 60);
    const resultSeconds = totalSeconds % 60; 

    const result = `${resultHours < 10 ? `0${resultHours}` : resultHours} : ${resultMinutes < 10 ? `0${resultMinutes}` : resultMinutes}: ${resultSeconds < 10 ? `0${resultSeconds}` : resultSeconds} hours`;

    document.getElementById('result').textContent = result;

})