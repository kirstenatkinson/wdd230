const dataUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=59.334591&lon=18.063240&appid=b5f961cb2b8355fb880eebbbe376e795&units=imperial';
const output = document.querySelector('#wind-chill-output');

async function apiFetch() {
    try {
        const response = await fetch(dataUrl);
        if (response.ok) {
            const data = await response.json();
            calculateWindChill(data.list[0].main.temp, data.list[0].wind.speed);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function calculateWindChill(tempurature, windSpeed) {
    if (tempurature > 50 || windSpeed < 4.8) {
        output.textContent = 'Wind Chill: N/A'
    }
    else {
        const windChill = 35.74 + (0.6215 * tempurature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempurature * Math.pow(windSpeed, 0.16));
        output.textContent = `Wind chill: ${windChill}`;
    }
}

apiFetch()