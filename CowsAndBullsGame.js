function startAgain(yes) {
  if (yes) {
    return playGame();
  }
}

function confirmation() {
  return confirm("Do you want to Play Again?");
}
function displayLoseResult(secretNumber) {
  console.log("YOU LOSE!!\nTHE SECRET NUMBER WAS :" + secretNumber.join(""));
}

function displayWinResult() {
  console.log("YOU WIN!!");
}

function resultEqualityCheck(result, actualResult) {
  for (let index = 0; index < actualResult.length; index++) {
    if (result[index] !== actualResult[index]) {
      return false;
    }
  }
  return true;
}

function isEqual(secretNumber, guessMade, index) {
  return secretNumber[index] === guessMade[index] ? "Cow" : "Bull";
}

function guessCheckWithSN(guessMade, secretNumber) {
  let result = [];

  for (let i = 0; i < secretNumber.length; i++) {
    result.push(isEqual(secretNumber, guessMade, i));
  }
  return result;
}

function convertToNumberArray(array) {
  let numberArray = [];
  for (let index = 0; index < array.length; index++) {
    numberArray.push(parseInt(array[index]));
  }
  return numberArray;
}

function userGuess() {
  let guess = [];
  let numberArray = [];
  guess = prompt("Enter your guess").split("");
  numberArray = convertToNumberArray(guess);
  return numberArray;
}

function instructions() {
  console.log("This is a different version of COWS AND BULLS.\n");
  console.log("COW WILL BE DECLARED: WHEN THE DIGIT IS CORRECT AND IN CORRECT LOCATION.\n");
  console.log("BULL WILL BE DECLARED: WHEN THE DIGIT IS WRONG OR CORRECT IN WRONG LOCATION.\n");
  console.log("Make a guess between 0-999");
}

function playGame() {
  instructions();
  let secretNumber = Math.floor(Math.random() * 999).toString().padStart(3, "0").split("");
  let numberArray = [];
  let result = [];
  const actualResult = [];
  let confirmationAnswer = false;

  numberArray = convertToNumberArray(secretNumber);

  for (let i = 0; i < numberArray.length; i++) {
    actualResult.push("Cow");
  }

  for (let i = 0; i < 10; i++) {
    result = guessCheckWithSN(userGuess(), numberArray);
    console.log(result);

    if (resultEqualityCheck(result, actualResult)) {
      displayWinResult();
      confirmationAnswer = confirmation();
      return startAgain(confirmationAnswer);
    }

  }
  displayLoseResult(secretNumber);
  confirmationAnswer = confirmation();
  return startAgain(confirmationAnswer);
}

playGame();
