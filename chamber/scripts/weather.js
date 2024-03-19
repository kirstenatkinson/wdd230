// select HTML elements in the document
const currentTempOutput = document.querySelector('#current-temp');
const threeDayForcastOutput = document.querySelector('#three-day-forcast');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=59.334591&lon=18.063240&appid=b5f961cb2b8355fb880eebbbe376e795&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {

    //Create current temperature text
    const currentTemp = (document.createElement('p'));
    currentTemp.setAttribute('id', 'current-degrees');
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;


    //Create description to add to figure caption       
    let desc = data.list[0].weather[0].description;


    //Create icon for current temperature
    const currentIcon = (document.createElement('img'));
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    currentIcon.setAttribute('src', iconsrc);
    currentIcon.setAttribute('alt', `${desc} icon`);
    currentIcon.setAttribute('id', 'current-icon')

    //Create figure
    const figure = document.createElement('figure');
    const figCaption = document.createElement('figcaption');
    figCaption.textContent = `${desc}`;

    currentTempOutput.appendChild(figure);
    figure.appendChild(currentIcon);
    figure.appendChild(figCaption);
    currentTempOutput.appendChild(currentTemp);

    //Call function for the first three days
    firstThreeDays(data.list)
}

function firstThreeDays(days) {
    for (let i = 0; i < days.length && i < 3; i++) {
        console.log(days[i]);

        //Create day div
        const day = document.createElement('div');
        day.setAttribute('class', 'weather-day');

        //Create day name
        const dayName = document.createElement('p');
        dayName.setAttribute('class', 'weather-day-name');
        dayName.textContent = `Day ${i + 1}`;

        //Create day icon
        const dayIcon = document.createElement('img');
        const dayIconSrc = `https://openweathermap.org/img/w/${days[i].weather[0].icon}.png`
        dayIcon.setAttribute('src', dayIconSrc);
        dayIcon.setAttribute('alt', `${days[i].weather[0].description} icon`);

        //Create day temperature in degrees
        const dayTemp = (document.createElement('p'));
        dayTemp.setAttribute('class', 'day-degrees');
        dayTemp.innerHTML = `${days[i].main.temp}&deg;F`;


        //Append all created elements to the day div
        threeDayForcastOutput.appendChild(day);
        day.appendChild(dayName);
        day.appendChild(dayIcon);
        day.appendChild(dayTemp);
    }
}

apiFetch();