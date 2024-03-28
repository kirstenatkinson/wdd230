const windowURL = new URL(window.location);
const formData = windowURL.searchParams;

document.querySelector('#fname-confirm').textContent = formData.get('fname');
document.querySelector('#lname-confirm').textContent = formData.get('lname');
document.querySelector('#email-confirm').textContent = formData.get('email');
document.querySelector('#phone-confirm').textContent = formData.get('phone');

document.querySelector('#fruit-one-confirm').textContent = formData.get('fruit1');
document.querySelector('#fruit-two-confirm').textContent = formData.get('fruit2');
document.querySelector('#fruit-three-confirm').textContent = formData.get('fruit3');
document.querySelector('#special-instructions-confirm').textContent = formData.get('special-instructions');

//Calculate and output Nutritional Value
const fruitNutritionURL = "https://kirstenatkinson.github.io/wdd230/bountiful-foods/data/fruits.json";
const selectedFruits = [formData.get('fruit1'), formData.get('fruit2'), formData.get('fruit3')];
const nutritionOutput = document.querySelector('#order-nutrition');


let totalCalories = 0;
let totalCarbs = 0;
let totalProtein = 0;
let totalFat = 0;
let totalSugar = 0;

async function getNutritionalInformation() {
    const response = await fetch(fruitNutritionURL);
    const data = await response.json();
    displayNutrition(data);
}

const displayNutrition = (fruits) => {
    fruits.forEach((fruit) => {
        if (fruit.name === selectedFruits[0] || fruit.name === selectedFruits[1] || fruit.name === selectedFruits[2]) {
            totalCalories += fruit.nutritions.calories;
            totalCarbs += fruit.nutritions.carbohydrates;
            totalProtein += fruit.nutritions.protein;
            totalFat += fruit.nutritions.fat;
            totalSugar += fruit.nutritions.sugar;
        }
    })

    let calories = document.createElement('h3');
    let carbs = document.createElement('p');
    let protein = document.createElement('p');
    let fat = document.createElement('p');
    let sugar = document.createElement('p');

    calories.textContent = `Total Calories: ${totalCalories}`;
    carbs.textContent = `Carbohydrates: ${totalCarbs}`;
    protein.textContent = `Protein: ${totalProtein}`;
    fat.textContent = `Fat: ${totalFat}`;
    sugar.textContent = `Sugars: ${totalSugar}`;

    nutritionOutput.appendChild(calories);
    nutritionOutput.appendChild(carbs);
    nutritionOutput.appendChild(protein);
    nutritionOutput.appendChild(fat);
    nutritionOutput.appendChild(sugar);
}

getNutritionalInformation();