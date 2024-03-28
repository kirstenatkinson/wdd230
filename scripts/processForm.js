const url = new URL(window.location);
const formData = url.searchParams;

document.querySelector('#username-output').innerHTML = formData.get('username');
document.querySelector('#password-output').textContent = formData.get('password');
document.querySelector('#email-output').textContent = formData.get('email');
document.querySelector('#rating-output').textContent = formData.get('rating');