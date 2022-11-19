let firstCard = 10;
let secondCard = 5;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector('.message-el');
let cardEl = document.querySelector('.card-el');
let sumEl = document.querySelector('.sum-el');
const start = document.querySelector('.start');
const newCard = document.querySelector('.new-card');


start.addEventListener('click', startGame);
function startGame() { playRound() }
function playRound() {
    cardEl.textContent = `Cards: ${firstCard}  ${secondCard}`;
    sumEl.textContent = `Sum: ${sum}`;

    if(sum <= 20) {
        message = "do you wish to draw a new card? 🙂";
    } else if(sum === 21) {
        message = "you win 🥳";
        hasBlackjack = true;
    } else {
        message = "you're out of the game 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
}

newCard.addEventListener('click', drawCard);
function drawCard() {
    const card = 6;
    sum += card;
    playRound();
}

