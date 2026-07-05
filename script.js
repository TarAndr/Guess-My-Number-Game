// DOM Селекторы
const msgSelector = document.querySelector('.main-right-side > span');
const scoreSelector = document.querySelector('.score-value');
const highscoreSelector = document.querySelector('.highscore-value');
const guessInput = document.querySelector('#user-answer');
const btnCheck = document.querySelector('#btn-check');
const btnAgain = document.querySelector('#btn-again');
const btnClearHS = document.querySelector('#btn-clr-hs');
const centerDivSpan = document.querySelector('.center-div > span');

// Состояние игры (State)
let secretQuantity;
let score;
let highscore = Number(localStorage.getItem('guessGameHighscore')) || 0;
highscoreSelector.textContent = highscore;

function resetGame() {
    score = 20;
    scoreSelector.textContent = score;
    secretQuantity = Math.trunc(Math.random() * 20) + 1;

    msgSelector.textContent = 'Start guessing...';
    centerDivSpan.textContent = '?';
    guessInput.value = '';
    setContainerColor('#444444');

    guessInput.disabled = false;
    btnCheck.disabled = false;
}

// Включаем игру на старте
resetGame();

// ГЛОБАЛЬНЫЕ СЛУШАТЕЛИ СОБЫТИЙ (навешиваются строго 1 раз в корне файла)
btnAgain.addEventListener('click', resetGame);
btnCheck.addEventListener('click', checkAnswer);
btnClearHS.addEventListener('click', clearHS);

guessInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

function checkAnswer() {
    const guess = Number(guessInput.value);
    guessInput.value = '';
    if (!guess) {
        msgSelector.textContent = 'No number';
    } else if (guess < 1 || guess > 20) {
        msgSelector.textContent = 'The number must be between 1 and 20!';
    } else {
        compareAnswer(guess, secretQuantity);
    }
}

function compareAnswer(answer, secret) {
    const result = answer - secret;
    if (!result) {
        youWin();
    } else {
        score--;
        scoreSelector.textContent = score;
        
        msgSelector.textContent = result > 0 ? 'Too high!' : 'Too low!';
        
        if (score <= 0) {
            gameOver();
        }
    }
}

function setContainerColor(color) {
    document.querySelector('.app-container').style.backgroundColor = color;
}

function youWin() {
    stopGame();
    setContainerColor('#447744');
    msgSelector.textContent = 'Correct Number!';
    centerDivSpan.textContent = secretQuantity;
    
    if (score > highscore) {
        highscore = score;
        highscoreSelector.textContent = highscore;
        localStorage.setItem('guessGameHighscore', highscore);
    }
}

function gameOver() {
    stopGame();
    setContainerColor('#994444');
    msgSelector.textContent = 'You lost the game!';
}

function stopGame() {
    guessInput.disabled = true;
    btnCheck.disabled = true;
}

function clearHS(){
    if(highscore && confirm('Are you sure?')){
        highscore = 0;
        localStorage.setItem('guessGameHighscore', highscore);
        highscoreSelector.textContent = highscore;
    }
}