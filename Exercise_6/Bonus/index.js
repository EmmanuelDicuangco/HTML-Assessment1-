// Game variables
let score = 0;
let lives = 3;
let correctColor = "";

// Get elements
const rgbValue = document.getElementById("rgbValue");
const colorButtons = document.querySelectorAll(".color-btn");
const message = document.getElementById("message");
const scoreText = document.getElementById("score");
const livesText = document.getElementById("lives");

// Start game
generateGame();

// Create random RGB color
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Generate new round
function generateGame() {

    // Create 3 random colors
    let colors = [];
    for (let i = 0; i < 3; i++) {
        colors.push(randomColor());
    }

    // Pick one correct answer
    let randomIndex = Math.floor(Math.random() * 3);
    correctColor = colors[randomIndex];

    // Show RGB text
    rgbValue.textContent = correctColor;

    // Set button colors
    colorButtons.forEach((btn, index) => {
        btn.style.background = colors[index];
    });

    message.textContent = "Choose the correct colour!";
}

// Check answer
function checkAnswer(selected) {

    if (lives <= 0) return;

    if (selected.style.background === correctColor) {
        score++;
        scoreText.textContent = score;
        message.textContent = "Correct!";
    } else {
        lives--;
        livesText.textContent = lives;
        message.textContent = "Wrong!";
    }

    // Game over
    if (lives === 0) {
        message.textContent = "Game Over! Final Score: " + score;
        return;
    }

    // Next round
    setTimeout(generateGame, 800);
}

// Restart game
function restartGame() {
    score = 0;
    lives = 3;

    scoreText.textContent = score;
    livesText.textContent = lives;

    generateGame();
}