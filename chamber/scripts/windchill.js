const tempuratureInput = document.querySelector('#tempurature');
const windSpeedInput = document.querySelector('#wind-speed');
const button = document.querySelector('#calculate-chill');
const output = document.querySelector('#wind-chill-output');

button.addEventListener('click', () => {
    console.log('Button Works');

    const tempurature = parseFloat(tempuratureInput.value);
    const windSpeed = parseFloat(windSpeedInput.value);

    if (isNaN(tempurature) || isNaN(windSpeed)) {
        console.log('Filter successful!');
        output.textContent = 'Please enter valid temperature and wind speed (check to see if you have any letters in the input)';
    }
    else {
        const windChill = calculateWindChill(tempurature, windSpeed);
        output.textContent = `Calculated wind chill: ${windChill}`;
    }

});

function calculateWindChill(tempurature, windSpeed) {
    if (tempurature > 50 || windSpeed < 4.8) {
        return 'N/A';
    }
    else {
        return 35.74 + (0.6215 * tempurature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempurature * Math.pow(windSpeed, 0.16));
    }
}
