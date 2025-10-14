

function invalidChoiceCheck(userGuess, invalidChoice, index) {
  for (let i = 0; i < invalidChoice.length; i++) {
    if (userGuess[index] === invalidChoice[i]) {
      return true;
    }
  }
}

function displayInvalid(userGuess, secretMessage, message) {
  if (userGuess.length !== secretMessage.length) {
    return console.log("Invalid entry of sentence");
  }
  const invalidChoice = "123467890[];?/\|,+=_-)(*&^%$#@!~`".split("");
  for (let index = 0; index < invalidChoice.length; index++) {
    if (invalidChoiceCheck(userGuess, invalidChoice, index)) {
      return console.log("Invalid entry of sentence");
    }
  }
  return true;
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
  console.log("Rule 2: The vowels and spaces will be in corect position.\n");
  console.log("Rule 3: You can ask for only one hint, but you will be discarded from scoring BONUS.\n");
  console.log("Rule 4: The Hint will reveal only the first letter of each word");
  console.log("Rule 5: Enter 5 to get HINT");
}
function userGuess() {
  const guess = prompt("Enter your guess :\n").toLowerCase().split("");
  return guess;
}

function secretMessage() {
  const arrayOfLines = ["there are eight planets excluding pluto.", "Life first emerged in the ancient oceans as simple, self-replicating molecules."
    , "A swirling disk of gas and dust gave rise to our planet and its celestial companions."
    , "The age of the dinosaurs ended suddenly after a major impact from a celestial object."];
  return arrayOfLines[Math.floor(Math.random() * arrayOfLines.length)];
}
function displayEncodedMessage(message) {
  const encodedAlphabets = encodingAlphabets();
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let encodedstring = encodingString(message, encodedAlphabets, alphabets);

  return encodedstring.join("");
}
function isBothArrayLengthEqual(array1, array2) {
  return array1.length === array2.length;
}

function isArrayIndexEqual(array1, array2, index) {
  return array1[index] === array2[index];
}

function areEqual(array1, array2) {

  let booleanValue = isBothArrayLengthEqual(array1, array2);

  for (let index = 0; index < array1.length; index++) {    
    booleanValue = booleanValue && isArrayIndexEqual(array1, array2, index);
  }

  return booleanValue;
}

function play() {
  instructions();
  const message = secretMessage().toLowerCase().split("");  
  
  const decodedMessage = message; 
  console.log(decodedMessage);

  const secretScript = displayEncodedMessage(message);
  console.log(secretScript);
  // console.log(message);

  
  
  for (let move = 0; move < 10; move++) {
    const guessArray = userGuess();
      console.log(guessArray);
        
    
    if (displayInvalid(guessArray, secretScript, message)) {
      const check = areEqual(guessArray, decodedMessage);
      
      return check;   
    }
  }
  return console.log("YOU LOST!!");
  
}


play();
