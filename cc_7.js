//Small Business Website

document.addEventListener('DOMContentLoaded', () => {
const updateButton = document.getElementById('update-headline');
const inputField = document.getElementById('headline-input');
const headline = document.getElementById('cta-headline');

updateButton.addEventListener('click', () => {
    const newHeadline = inputField.value.trim();
    if (newHeadline) {
        headline.textContent = newHeadline;
        inputField.value = ''; // Clear the input field after updating
    } else {
        alert("Please enter a valid headline.");
    }
    });
});