
let button = document.getElementById("submit-join-request");

button.addEventListener("click", submitTime);

function submitTime() {
    let currentTime = Date.now();
    document.getElementById("submission-time").value = currentTime;
}