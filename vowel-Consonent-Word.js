let given = "butterflies";
let vowelConsonentWord = "ape,p,l";
let concat = "";
function isVowel(index) {
  if (given[index] === 'a') {
    return true;
  }
  if (given[index] === 'e') {
    return true;
  }
  if (given[index] === 'i') {
    return true;
  }
  if (given[index] === 'o') {
    return true;
  }
  if (given[index] === 'u') {
    return true;
  }
  return false;
}
let flag1 = 0;
if (isVowel(0) === true) {
  concat = concat + given[0];
  for (let count = 1; count < given.length; count++) {
    if (isVowel(count - 1) === true) {
      if (isVowel(count) === false) {
        concat = concat + given[count];
        console.log(concat);
        count++;
      }
    }
    if (isVowel(count - 1) === false) {
      if (isVowel(count) === true) {
        concat = concat + given[count];
      }
    }
  }
}
if (isVowel(0) === false) {
  concat = concat + given[0];
  for (let count = 1; count < given.length; count++) {
    if (isVowel(count - 1) === false) {
      if (isVowel(count) === true) {
        concat = concat + given[count];
        console.log(concat);
        count++;
      }
    }
    if (isVowel(count - 1) === true) {
      if (isVowel(count) === false) {
        concat = concat + given[count];
      }
    }
  }
}

console.log("Input :", given, "Output :", concat);
