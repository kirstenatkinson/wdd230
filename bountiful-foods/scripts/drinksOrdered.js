let drinksOrdered = Number(window.localStorage.getItem('numVisits-ls'));

const displayPoints = document.querySelector('#points');

displayPoints.textContent = drinksOrdered * 10;