let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsNumber = document.getElementById("attemptsNumber");

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsNumber.textContent = attempts;

    if (userGuess === secretNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        guessInput.disabled = true;
    } else if (userGuess < secretNumber) {
        message.textContent = "Too low. Try again!";
    } else {
        message.textContent = "Too high. Try again!";
    }
}

startGame();
