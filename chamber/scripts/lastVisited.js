const output = document.querySelector('#welcome-message');

function daysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
}

function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getLastVisitDate() {
    return localStorage.getItem('lastVisit');
}

function setLastVisitDate(date) {
    localStorage.setItem('lastVisit', date);
}

function displayMessage() {
    const lastVisitDate = getLastVisitDate();
    if (!lastVisitDate) {
        output.textContent = 'Welcome! Let us know if you have any questions.';
    }
    else {
        const currentDate = getCurrentDate();
        const daysSinceLastVisit = daysBetween(new Date(currentDate), new Date(lastVisitDate));
        if (daysSinceLastVisit === 0) {
            output.textContent = 'Back so soon! Awesome!';
        }
        else {
            output.textContent = `You visited ${daysSinceLastVisit} days ago.`;
        }
    }

    setLastVisitDate(getCurrentDate());
}

displayMessage();