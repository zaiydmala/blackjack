let firstCard = 0;
let secondCard = 0;

let sum = firstCard + secondCard;

if(sum < 21) {
    console.log("do you wish to draw a new card? 🙂");
}
else if(sum === 21) {
    console.log("you win 🥳");
}

else if(sum > 21) {
    console.log("you're out of the game 😭");
}



