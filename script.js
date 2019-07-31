    
let randomNumber;
let wrongGuessNumber;

function resetGame() {
    randomNumber = parseInt(Math.random() * 101);
    wrongGuessNumber = 0;
    document.querySelector("input").value = " ";
}

resetGame();

function guessTheNumber() {
    let input = parseInt(document.querySelector("input").value);
    if (input > randomNumber) {
        alert("to Big");
        wrongGuessNumber++;
    } else if (input < randomNumber) {
        alert("too Small");
        wrongGuessNumber++;
    } else {
        alert("congratulation you have won ! number of wrong gusses" + wrongGuessNumber);
        resetGame();
    }
}