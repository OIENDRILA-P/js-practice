function vowelConsonentWord(given) {

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
  function calOtherWords(concat, input) {
    let str = "";
    let cIndex = 0;
    for (let index = 0; index < input.length; index++) {
      if (input[index] !== concat[cIndex]) {
        str = str + "," + input[index];
      }
      else {
        cIndex++;
      }
    }
    return str;

  }

  return concat + calOtherWords(concat, given);
}
function printing(expected, actual) {
  const mark = (actual === expected) ? "✅" : "❌";
  console.log(mark + "Expected value is :", expected, "Actual value is:", actual);
}
function testCases() {
  let string1 = "butterflies";
  let string2 = "japanese";
  let string3 = "apple";
  let string4 = "opportunities"
  printing("buteris,t,f,l,e", vowelConsonentWord(string1));
  printing("japanese", vowelConsonentWord(string2));
  printing("ape,p,l", vowelConsonentWord(string3));
  printing("oporunitis,p,t,e", vowelConsonentWord(string4));
}
testCases();
