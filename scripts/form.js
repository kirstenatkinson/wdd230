
//password check same value
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm-password');
const message = document.querySelector('#form-message');

confirm.addEventListener('focusout', checkSame);

function checkSame() {
    if (password.value !== confirm.value) {
        message.textContent = "Passwords do not match";
        message.style.visibility = "show";
        password.style.backgroundColor = 'var(--invalid)';
        password.value = '';
        confirm.value = '';
        password.focus();
    } else {
        message.style.display = "none";
        password.style.backgroundColor = '#fff';
    }
}

//range display current value
const rangeValue = document.getElementById('current-range-value');
const range = document.getElementById('rating');

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValue.innerHTML = range.value;
}