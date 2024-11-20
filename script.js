let score = 0; // Initialize score
const scoreDisplay = document.getElementById('score'); // Get the score element
const moles = document.querySelectorAll('.mole'); // Get all mole elements

// Function to increase the score when the mole is clicked
function whackMole(event) {
    score++;
    scoreDisplay.textContent = score; // Update score display
    const mole = event.target;
    mole.style.bottom = '-60px'; // Hide the mole again after clicking
}

// Add click event listeners to all mole elements
moles.forEach(mole => {
    mole.addEventListener('click', whackMole);
});

// Randomly pop up the moles
setInterval(() => {
    const randomMole = moles[Math.floor(Math.random() * moles.length)];
    randomMole.style.bottom = '10px'; // Make the mole pop up
    setTimeout(() => {
        randomMole.style.bottom = '-60px'; // Hide the mole after 1 second
    }, 1000);
}, 1500); // Moles pop up every 1.5 seconds