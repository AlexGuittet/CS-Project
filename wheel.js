let sections = document.querySelectorAll('.section');
let highlightedIndex = 0;
let flickerInterval;
let spinInterval;
const flickerDuration = 200; // Flicker duration in milliseconds
const spinDuration = 5000; // 5 seconds

function startHighlight() {
    if (flickerInterval) clearInterval(flickerInterval);
    if (spinInterval) clearInterval(spinInterval);
    flickerInterval = setInterval(flickerNext, flickerDuration);
    setTimeout(stopFlicker, spinDuration); // Stop flickering after spin duration
}

function flickerNext() {
    sections.forEach(section => {
        section.classList.remove('highlighted');
    });
    highlightedIndex = Math.floor(Math.random() * sections.length); // Randomly select one of the values
    sections[highlightedIndex].classList.add('highlighted');
}

function stopFlicker() {
    clearInterval(flickerInterval);
    let selectedValue = sections[highlightedIndex].innerText;
    displaySelectedValue(selectedValue);
    let flickerCount = 0;
    let flickerTotal = 5; // Adjust the total number of flickers
    let flickerToggle = true;
    spinInterval = setInterval(function() {
        flickerCount++;
        if (flickerToggle) {
            sections[highlightedIndex].classList.remove('highlighted');
        } else {
            sections[highlightedIndex].classList.add('highlighted');
        }
        flickerToggle = !flickerToggle;
        if (flickerCount >= flickerTotal * 2) {
            clearInterval(spinInterval);
        }
    }, 100);
}

function displaySelectedValue(value) {
    let selectedValueContainer = document.querySelector('.selected-value-container');
    selectedValueContainer.textContent = value;
}
