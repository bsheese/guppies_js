let money = 100;
const betInput = document.getElementById('bet');
const playButton = document.getElementById('play');
const moneyDisplay = document.getElementById('money');
const resultDisplay = document.getElementById('result');

playButton.addEventListener('click', () => {
    const bet = parseInt(betInput.value);

    if (isNaN(bet) || bet <= 0 || bet > money) {
        resultDisplay.textContent = 'Invalid bet. Please enter a valid bet.';
        return;
    }

    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const higherOrLower = prompt(`First number: ${firstNumber}\nWill the second number be higher or lower? (H/L)`).toUpperCase();

    const secondNumber = Math.floor(Math.random() * 10) + 1;

    if ((secondNumber > firstNumber && higherOrLower === 'H') || (secondNumber < firstNumber && higherOrLower === 'L')) {
        money += bet;
        resultDisplay.textContent = `Second number: ${secondNumber}\nCongratulations! You won!`;
    } else {
        money -= bet;
        resultDisplay.textContent = `Second number: ${secondNumber}\nSorry, you lost.`;
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
       
