let score = 0;
let lives = 3;
let correctColor = "";

const rgbValue = document.getElementById("rgbValue");
const colorButtons = document.querySelectorAll(".color-btn");
const message = document.getElementById("message");
const scoreText = document.getElementById("score");
const livesText = document.getElementById("lives");

generateGame();

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateGame() {

    let colors = [];
    for (let i = 0; i < 3; i++) {
        colors.push(randomColor());
    }

    let randomIndex = Math.floor(Math.random() * 3);
    correctColor = colors[randomIndex];

    rgbValue.textContent = correctColor;

    colorButtons.forEach((btn, index) => {
        btn.style.background = colors[index];
    });

    message.textContent = "Choose the correct colour!";
}

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

    if (lives === 0) {
        message.textContent = "Game Over! Final Score: " + score;
        return;
    }

    setTimeout(generateGame, 800);
}

function restartGame() {
    score = 0;
    lives = 3;

    scoreText.textContent = score;
    livesText.textContent = lives;

    generateGame();
}