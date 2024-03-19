const hideButton = document.querySelector('#banner-toggle');
const banner = document.querySelector('#meet-and-greet');

function hideBanner() {
    const currentDay = new Date().getDay();
    if (currentDay !== 0 && currentDay <= 3) {
        hideButton.addEventListener('click', () => {
            banner.classList.add('hide');
        })
    }
    else {
        banner.classList.add('hide');
    }
}

hideBanner();