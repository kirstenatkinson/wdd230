const hamButton = document.querySelector('#responsive-menu');
const navigation = document.querySelector('#main-nav');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
    console.log('Hello World!')
});