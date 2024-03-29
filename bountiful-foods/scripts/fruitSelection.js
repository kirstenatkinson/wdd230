const fruitURL = "https://kirstenatkinson.github.io/wdd230/bountiful-foods/data/fruits.json";
const selectOptions = [document.querySelector('#form-fruit-one'), document.querySelector('#form-fruit-two'), document.querySelector('#form-fruit-three')];
const fruitsArray = [];

async function getFruits() {
    const response = await fetch(fruitURL);
    const data = await response.json();
    fruitsArray.push(data);
    displayInputs(selectOptions);
}

const displayInputs = (selectOptions) => {
    selectOptions.forEach((select) => {
        fruitsArray[0].forEach((fruit) => {
            let option = document.createElement('option');
            option.setAttribute('value', fruit.name);
            option.textContent = fruit.name;
            select.appendChild(option);
        })
    })
}

getFruits();