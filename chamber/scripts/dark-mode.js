const modeButton = document.querySelector('#color-mode');
const darkMode = document.querySelector('body');

modeButton.addEventListener('click', () => {
    modeButton.classList.toggle('dark-mode');
    darkMode.classList.toggle('dark-mode');
});