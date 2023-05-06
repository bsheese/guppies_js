let money = 100;
let round = 1;
const betInput = document.getElementById('bet');
const guessInput = document.getElementById('guess');
const betButton = document.getElementById('betButton');
const guessButton = document.getElementById('guessButton');
const moneyDisplay = document.getElementById('money');
const roundDisplay = document.getElementById('round');
const firstNumberDisplay = document.getElementById('firstNumber');
const betSection = document.getElementById('betSection');
const guessSection = document.getElementById('guessSection');
const resultDisplay = document.getElementById('result');

document.addEventListener('DOMContentLoaded', () => {
    moneyDisplay.textContent = `Current money: $${money}`;
});

betButton.addEventListener('click', submitBet);
guessButton.addEventListener('click', submitGuess);

function submitBet() {
    const bet = parseInt(betInput.value);

    if (isNaN(bet) || bet <= 0 || bet > money) {
        resultDisplay.textContent = 'Invalid bet. Please enter a valid bet.';
        return;
    }

    betSection.style.display = 'none';
    guessSection.style.display = 'block';

    const firstNumber = Math.floor(Math.random() * 10) + 1;
    firstNumberDisplay.textContent = `First number: ${firstNumber}`;
}

function submitGuess() {
    const guess = guessInput.value.toUpperCase();
    const bet = parseInt(betInput.value);
    const firstNumber = parseInt(firstNumberDisplay.textContent.split(' ')[2]);

    if (guess !== 'H' && guess !== 'L') {
        resultDisplay.textContent = "Invalid input. Please enter 'H' for higher or 'L' for lower.";
        return;
    }

    const secondNumber = Math.floor(Math.random() * 10) + 1;

    if ((secondNumber > firstNumber && guess === 'H') || (secondNumber < firstNumber && guess === 'L')) {
        money += bet;
        resultDisplay.textContent = `Second number: ${secondNumber}\nCongratulations! You won!`;
    } else {
        money -= bet;
        resultDisplay.textContent = `Second number: ${secondNumber}\nSorry, you lost.`;
    }

    moneyDisplay.textContent = `Current money: $${money}`;
    round++;
