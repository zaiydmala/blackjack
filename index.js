let cards = []; //cards are stores in the array
let sum = 0; //adds the array elements ie. adds the cards //cards.reduce((sum, card) => sum + card, 0); 
let hasBlackjack = false;//checks if the player has won
let isAlive = false;//check whether the player is still in game or they lost
let message = "";//message that is shown to user, empty as it will be edited according to game state
let messageEl = document.querySelector('.message-el');
let cardEl = document.querySelector('.card-el');
let sumEl = document.querySelector('.sum-el');
const start = document.querySelector('.start');
const newCard = document.querySelector('.new-card');

/* Generates a random card */
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1; 
    if(randomCard === 1) { return 11; }
    else if(randomCard > 10) { return 10; }
    else { return randomCard; }
}

start.addEventListener('click', startGame);
function startGame() {
    start.style.display = 'none'; //removes start button once the game starts
    isAlive = true;
    let firstCard = getRandomCard();
    cards = [firstCard];
    sum = cards.reduce((sum, card) => sum + card); //array.reduce takes each [i] and does an operation on it.
    playRound(); //deals a new round
}
/* Logic to deal a round */
function playRound() {
    cardEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = `Sum: ${sum}`;
    if(sum <= 20) {
        message = "DO YOU WISH TO DRAW A CARD? 🙂";
    } else if(sum === 21) {
        message = "YEAAYYY YOU WIN 🥳";
        hasBlackjack = true;
    } else {
        message = "YOU'RE OUT OF THE GAME 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
    /* If player wins or loses, then they cannot draw a new card */
    if(!hasBlackjack && !isAlive || hasBlackjack) {
        newCard.style.display = "none";
    }
}
/* Draws a new card */
newCard.addEventListener('click', drawCard);
function drawCard() {
    if(isAlive === true && hasBlackjack === false) { 
    const card = getRandomCard();
    sum += card; //adds card to the sum variable
    cards.push(card);
    playRound();   
    }  
}

