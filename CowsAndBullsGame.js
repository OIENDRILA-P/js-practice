function confirmation() {
  const answer = confirm("Do you want to Play Again?");

  if (answer) {
    return playGame();
  }
}


function askingGuesses() {
  const guess = prompt("Enter your guess");

  return guess;
}

function isEqual(secretNumber, guessMade, index) {
  return secretNumber[index] === guessMade[index] ? "Cow" : "Bull";
}

function matchTwoStrings(secretNumber, guessMade) {
  const result = [];

  for (let index = 0; index < secretNumber.length; index = index + 2) {
    result.push(isEqual(secretNumber, guessMade, index));
  }

  return result.toString();
}


function playGame() {
  console.log("THIS COWS AND BULLS GAME IS MADE BY ME AND EXPLAINED BY AKKA🤪")
  console.log("Make a guess between 0-999");
  let secretNumber = Math.floor(Math.random() * 999).toString();
  secretNumber = secretNumber.split("").toString();

  for (let i = 0; i < 10; i++) {
    let guessMade = askingGuesses().split("").toString();
    let result = matchTwoStrings(secretNumber, guessMade);

    console.log(result + "\n");

    if (result === "Cow, Cow, Cow") {
      return console.log("YOU WON !!") + confirmation();
    }
    if (result === "Cow, Cow") {
      return console.log("YOU WON !!") + confirmation();
    }

  }
  return console.log("YOU LOOSE!!\nTHE SECRET NUMBER WAS :" + secretNumber)
    + confirmation();
}

playGame();
