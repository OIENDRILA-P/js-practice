function hint(secretMessage, decodedMessage) {
  secretMessage = secretMessage.join("").padStart(secretMessage.length + 1, " ");
  secretMessage = secretMessage.split("");
  for (let index = 0; index < secretMessage.length; index++) {
    if (secretMessage[index] === " ") {
      secretMessage[index + 1] = decodedMessage[index];
    }
  }
  return secretMessage;
}

function isEntered5(guessArray) {
  const guess = parseInt(guessArray);
  return guess === 5;
}

function crossChecking(arrayOfCon) {
  const randomAlpha = arrayOfCon[Math.floor(Math.random() * 22)];
  return randomAlpha === "❌" || randomAlpha === undefined ? crossChecking(arrayOfCon) : randomAlpha;
}

function checkVowel(arrayOfAlpha, index) {
  const vowels = "a,e,i,o,u";
  for (let i = 0; i < vowels.length; i++) {
    if (arrayOfAlpha[index] === vowels[i]) {
      return index + 1;
    }
  }
  return index;
}

function encodingAlphabets() {
  const arrayOfAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const arrayOfCon = "bcdfghjklmnpqrstvwxyz".split("");
  for (let i = 0; i < 26; i++) {
    i = checkVowel(arrayOfAlpha, i);
    arrayOfAlpha[i] = crossChecking(arrayOfCon);
    let index = arrayOfCon.indexOf(arrayOfAlpha[i]);
    arrayOfCon[index] = "❌";

  }
  return arrayOfAlpha;
}

function encodingString(arrayOfLines, encodedAlphabets, alphabets) {
  for (let i = 0; i < arrayOfLines.length; i++) {
    if (arrayOfLines[i] !== " ") {
      let poisition = alphabets.indexOf(arrayOfLines[i]);
      arrayOfLines[i] = encodedAlphabets[poisition];
    }
  }
  return arrayOfLines;

}

function instructions() {
  console.log("\n\n\n\t\t\tWELCOME TO THE WORLD OF ENCODING AND DECODING\t\t\t\n\n\n");
  console.log("Rule 1: You will be given 10 chances to decode the sentence correctly.\n");
  console.log("Rule 2: The vowels and spaces will be in correct position.\n");
  console.log("Rule 3: You can ask for only one hint, but you will be discarded from scoring BONUS.\n");
  console.log("Rule 4: The Hint will reveal only the first letter of each word");
  console.log("Rule 5: Enter 5 to get HINT");
}

function userGuess() {
  const guess = prompt("Enter your guess:").toLowerCase().split("");
  return guess;
}

function secretMessage() {
  const arrayOfLines = ["there are eight planets excluding pluto", "Life first emerged in the ancient oceans as simple selfreplicating molecules"
    , "A swirling disk of gas and dust gave rise to our planet and its celestial companions"
    , "The age of the dinosaurs ended suddenly after a major impact from a celestial object"];

  return arrayOfLines[Math.floor(Math.random() * arrayOfLines.length)];
}

function processEncodedMessage(message) {
  const encodedAlphabets = encodingAlphabets();
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let encodedstring = encodingString(message, encodedAlphabets, alphabets);

  return encodedstring.join("");
}

function isArray(x) {
  return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return "Invalid entered";
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return "Invalid Entered";
    }
  }

  return "YOU WON!!";
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return "Invalid characters entered";
  }
  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }
  if (array1 === array2) {
    return "YOU WON!!";
  }
}

function play() {
  instructions();
  let message = secretMessage();
  const decodedMessage = message.toLowerCase().split("");
  message = message.toLowerCase().split("");
  const secretScript = processEncodedMessage(message);
  let statement = "";
  let flag = 0;

  console.log("\n\n\t\t\tTHE ENCODED MESSAGE IS\t\t\t\n\n", secretScript);
  for (let move = 0; move < 10; move++) {
    const guessArray = userGuess();

    if (isEntered5(guessArray) && flag === 0) {
      console.log(hint(message, decodedMessage).join(""));
      flag = 1;
    }

    statement = areDeepEqual(guessArray, decodedMessage);
    console.log(statement);

    if (flag === 0 && statement === "YOU WON!!") {
      console.log("\nYOU GOT BONUS 100 POINTS\n");
      return;
    }
    if (statement === "YOU WON!!") {
      return;
    }

  }
  console.log(decodedMessage.join(""));

  return console.log("YOU LOST!!");
}

play();
