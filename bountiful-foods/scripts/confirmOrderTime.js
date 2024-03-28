document.addEventListener("DOMContentLoaded", function () {
    // Get the current time
    const currentTime = new Date();

    // Format the time as desired (e.g., HH:MM:SS)
    const formattedTime = currentTime.toLocaleTimeString();

    // Display the time in the order received paragraph
    const orderReceivedTime = document.querySelector('#order-received-time');
    orderReceivedTime.textContent = `Order received ${formattedTime}`;
});