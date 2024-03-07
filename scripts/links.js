const baseURL = "https://kirstenatkinson.github.io/wdd230/";
const linksURL = "https://kirstenatkinson.github.io/wdd230/data/links.json";
const list = document.querySelector('#learning-activities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data);
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        let listWeek = document.createElement('li');
        listWeek.textContent = `Week ${week.lesson}: `;

        week.links.forEach((link) => {
            let activityLink = document.createElement('a');
            activityLink.setAttribute('href', `${link.url}`);
            activityLink.setAttribute('target', '_blank');
            activityLink.textContent = `${title}`;
            listWeek.appendChild(activityLink);
        })

        list.appendChild(listWeek);
    })
}

getLinks();