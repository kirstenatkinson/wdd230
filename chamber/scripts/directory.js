const baseURL = "https://kirstenatkinson.github.io/wdd230/chamber/directory";
const directoryURL = "https://kirstenatkinson.github.io/wdd230/chamber/data/directory.json";
const directory = document.querySelector('#directory');

async function getMember() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        //Create cards/list div
        let card = (document.createElement('div'));
        card.setAttribute('class', 'card');

        //Member name
        let name = document.createElement('h3');
        name.textContent = member.name;

        //Member address
        let address = document.createElement('p');
        address.textContent = member.address

        //Member phone number
        let phoneNumber = document.createElement('p');
        phoneNumber.textContent = member.phoneNumber;

        //Member website url
        let url = document.createElement('a');
        url.setAttribute('href', `${member.url}`);

        //Member image
        let image = document.createElement('img');
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.image} image`)
        image.setAttribute('loading', 'lazy');

        //Member level
        let level = document.createElement('p');
        level.textContent = `${member.level}`;


        //Append items to div
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(level);

        directory.appendChild(card);
    })
}

getMember();
