let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

function makeGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');
    const attemptsDisplay = document.getElementById('attempts');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    attemptsLeft--;
    
    if (guess === randomNumber) {
        result.textContent = `Congratulations! You guessed the number ${randomNumber} correctly.`;
        attemptsDisplay.textContent = '';
        document.querySelector('button').disabled = true;
    } else if (attemptsLeft > 0) {
        result.textContent = guess < randomNumber ? 'Too low!' : 'Too high!';
        attemptsDisplay.textContent =` Attempts left: ${attemptsLeft}``;
    } else {
        result.textContent = 'Sorry, you've run out of attempts. The number was ${randomNumber}.`;
        attemptsDisplay.textContent = '';
        document.querySelector('button').disabled = true;
    }
}
