let given = "apple";
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
for (let index = 0; index < given.length; index++) {
  for (let count = index; count < given.length; count++) {
    if (isVowel(index) === true) {
      concat = concat + given[index];
      console.log(concat);
      index++;
      for (let count2 = index; count2 < given.length; count2++) {
        if (isVowel(index) === false) {
          concat = concat + given[index];
          console.log(concat);
          index++;
          break;
        }
      }
    }
  }
}

console.log("Input :", given, "Output :", concat);
