// select HTML elements in the document
const currentTempOutput = document.querySelector('#current-temp');
const threeDayForcastOutput = document.querySelector('#three-day-forcast');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.158092&lon=-117.350594&appid=b5f961cb2b8355fb880eebbbe376e795&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
    }
}

function displayResults(data) {

    //Create current temperature text
    const currentTemp = (document.createElement('p'));
    currentTemp.setAttribute('id', 'current-degrees');
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;

    const currentHumid = (document.createElement('p'));
    currentHumid.setAttribute('id', 'current-humid');
    currentHumid.innerHTML = `humidity: ${data.list[0].main.humidity}`;



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
    currentTempOutput.appendChild(currentHumid);


    //Call function for the first three days
    firstThreeDays(data.list)
}

function firstThreeDays(days) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    for (let i = 1; i < days.length && i < 4; i++) {

        //Create day div
        const day = document.createElement('div');
        day.setAttribute('class', 'weather-day');

        //Get the date from days[i]
        const date = new Date(days[i].dt * 1000);

        //Get day of the week
        const dayOfWeek = weekdays[date.getDay()];

        //Create day name
        const dayName = document.createElement('p');
        dayName.setAttribute('class', 'weather-day-name');
        dayName.textContent = `Day ${i}`;

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