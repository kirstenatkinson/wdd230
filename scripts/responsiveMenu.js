const hamButton = document.querySelector('#responsive-menu');
const navigation = document.querySelector('#main-nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});