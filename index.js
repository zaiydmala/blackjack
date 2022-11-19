//let firstCard = 10;
//let secondCard = 5;
let cards = [10, 5];
let sum = cards.reduce((sum, card) => sum + card, 0); //adds the array elements ie. adds the cards
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
    cardEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    //cardEl.textContent = `Cards: ${cards[0]}  ${cards[1]} ` + cards[3];
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
    sum += card; //adds card to the sum variable
    cards.push(card);
    playRound();
}

