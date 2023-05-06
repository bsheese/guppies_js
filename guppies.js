let money = 100;
const betInput = document.getElementById('bet');
const guessInput = document.getElementById('guess');
const playButton = document.getElementById('play');
const moneyDisplay = document.getElementById('money');
const resultDisplay = document.getElementById('result');

document.addEventListener('DOMContentLoaded', () => {
    moneyDisplay.textContent = `Current money: $${money}`;
});

playButton.addEventListener('click', () => {
    const bet = parseInt(betInput.value);
    const guess = guessInput.value.toUpperCase();

    if (isNaN(bet) || bet <= 0 || bet > money) {
        resultDisplay.textContent = 'Invalid bet. Please enter a valid bet.';
        return;
    }

    if (guess !== 'H' && guess !== 'L') {
        resultDisplay.textContent = "Invalid input. Please enter 'H' for higher or 'L' for lower.";
        return;
    }

    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;

    if ((secondNumber > firstNumber && guess === 'H') || (secondNumber < firstNumber && guess === 'L')) {
        money += bet;
        resultDisplay.textContent = `First number: ${firstNumber}\nSecond number: ${secondNumber}\nCongratulations! You won!`;
    } else {
        money -= bet;
        resultDisplay.textContent = `First number: ${firstNumber}\nSecond number: ${secondNumber}\nSorry, you lost.`;
    }

    moneyDisplay.textContent = `Current money: $${money}`;

    if (money <= 0) {
        resultDisplay.textContent += '\nGame over. You lost all your money.';
        playButton.disabled = true;
    } else if (money >= 1000) {
        resultDisplay.textContent += '\nCongratulations! You reached $1000 and won the game!';
        playButton.disabled = true;
    }
});
