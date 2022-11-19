let firstCard = 0;
let secondCard = 0;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

if(sum <= 20) {
    message = "do you wish to draw a new card? 🙂";
} else if(sum === 21) {
    message = "you win 🥳";
    hasBlackjack = true;
} else {
    message = "you're out of the game 😭";
    isAlive = false;
}


