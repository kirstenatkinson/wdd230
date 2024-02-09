const modeButton = document.querySelector('#color-mode');
const darkMode = document.querySelector('.dark-mode');

modeButton.addEventListener('click', () => {
    modeButton.classList.toggle('open');
    darkMode.classList.toggle('open');
});