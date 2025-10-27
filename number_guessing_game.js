function confirmation() {
  const answer = confirm("Do you want to Play Again?");

  if (answer) {
    return playGame();
  }
}

function askingGuesses() {
  const guess = prompt("Enter your guess");

  return parseInt(guess);
}

function playGame() {
  console.log("Make a guess between 0-100");
  let secretNumber = Math.floor(Math.random() * 100);

  for (let i = 0; i < 5; i++) {
    let guessMade = askingGuesses();

    if (guessMade > secretNumber) {
      console.log("the number is too high");
    }

    if (guessMade < secretNumber) {
      console.log("the number is too low");
    }

    if (guessMade === secretNumber) {
      return console.log("YOU WIN!!") + confirmation();
    }
  }
  return console.log("YOU LOOSE!!!, THE SECRET NUMBER IS:   " + secretNumber)
    + confirmation();
}

playGame();
