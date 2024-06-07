let sections = document.querySelectorAll('.section');
let highlightedIndex = 0;
let flickerInterval;
let spinInterval;
const flickerDuration = 200; 
const spinDuration = 5000;

function startHighlight() {
    if (flickerInterval) clearInterval(flickerInterval);
    if (spinInterval) clearInterval(spinInterval);
    flickerInterval = setInterval(flickerNext, flickerDuration);
    setTimeout(stopFlicker, spinDuration); 
}

function flickerNext() {
    sections.forEach(section => {
        section.classList.remove('highlighted');
    });
    highlightedIndex = Math.floor(Math.random() * sections.length); 
    sections[highlightedIndex].classList.add('highlighted');
}

function stopFlicker() {
    clearInterval(flickerInterval);
    let selectedValue = sections[highlightedIndex].innerText;
    displaySelectedValue(selectedValue);
    let flickerCount = 0;
    let flickerTotal = 5; 
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
