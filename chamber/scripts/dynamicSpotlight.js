const websiteURL = "https://kirstenatkinson.github.io/wdd230/chamber/directory";
const jsonFile = "https://kirstenatkinson.github.io/wdd230/chamber/data/directory.json";
const spotlightOne = document.querySelector('#spotlight-one');
const spotlightTwo = document.querySelector('#spotlight-two');

async function getMembers() {
    const response = await fetch(jsonFile);
    const data = await response.json();
    displaySpotlight(data.members);
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

const displaySpotlight = (members) => {
    const filteredMembers = members.filter(member => member.level === "Gold" || member.level === "Silver");

    if (filteredMembers.length >= 2) {
        const randomIndex1 = getRandomIndex(filteredMembers.length);
        let randomIndex2;

        do {
            randomIndex2 = getRandomIndex(filteredMembers.length);
        } while (randomIndex2 === randomIndex1);

        const spotlightMember1 = filteredMembers[randomIndex1];
        const spotlightMember2 = filteredMembers[randomIndex2];

        //Create content for spotlight member one
        let imgOne = document.createElement('img');
        let nameOne = document.createElement('h3');
        let websiteOne = document.createElement('a');

        imgOne.setAttribute('src', spotlightMember1.image);
        imgOne.setAttribute('alt', `${spotlightMember1.name} storefront`);
        imgOne.setAttribute('loading', 'lazy');

        nameOne.textContent = spotlightMember1.name;

        websiteOne.setAttribute('href', `${spotlightMember1.url}`);
        websiteOne.textContent = `${spotlightMember1.url}`;

        spotlightOne.appendChild(imgOne);
        spotlightOne.appendChild(nameOne);
        spotlightOne.appendChild(websiteOne);

        //Create content for spotlight member two
        let imgTwo = document.createElement('img');
        let nameTwo = document.createElement('h3');
        let websiteTwo = document.createElement('a');

        imgTwo.setAttribute('src', spotlightMember2.image);
        imgTwo.setAttribute('alt', `${spotlightMember2.name} storefront`);
        imgTwo.setAttribute('loading', 'lazy');

        nameTwo.textContent = spotlightMember2.name;

        websiteTwo.setAttribute('href', `${spotlightMember2.url}`);
        websiteTwo.textContent = `${spotlightMember2.url}`;

        spotlightTwo.appendChild(imgTwo);
        spotlightTwo.appendChild(nameTwo);
        spotlightTwo.appendChild(websiteTwo);
    }

}

getMembers();