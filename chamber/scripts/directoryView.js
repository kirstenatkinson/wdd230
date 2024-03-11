const gridButton = document.querySelector('#grid-view');
const listButton = document.querySelector('#list-view');
const displayView = document.querySelector('#directory');

gridButton.addEventListener('click', () => {
    displayView.classList.remove('directory-list');
    displayView.classList.add('directory-grid');
});

listButton.addEventListener('click', () => {
    displayView.classList.remove('directory-grid');
    displayView.classList.add('directory-list');
})