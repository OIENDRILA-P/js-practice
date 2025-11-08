function isArray(x) {
  return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

const reduce = function (array, predicate, initialValue) {
  let previousValue = initialValue;
  for (let index = 0; index < array.length; index++) {
    const hasValue = !isUndefined(predicate(previousValue, array[index]));
    if (hasValue) {
      previousValue = predicate(previousValue, array[index]);
    }
  }

  return previousValue;
};

const mapPlusFilter = function (array, mapper) {
  const value = [];
  for (let index = 0; index < array.length; index++) {
    const hasValue = !isUndefined(mapper(array[index]));
    if (hasValue) {
      value.push(mapper(array[index]));
    }
  }

  return value;
};

const some = function (array, operation) {
  for (let index = 0; index < array.length; index++) {
    if (operation(array[index])) {
      return true;
    }
  }
  return false
};

const every = function (array, operation) {
  for (let index = 0; index < array.length; index++) {
    const hasValue = operation(array[index]);
    if (!hasValue) {
      return false;
    }
  }
  return true;
};

const islengthGreaterThan = function (element) {
  return element.length > 3;
}

const isGreaterThan100 = function (number) {
  return number > 100;
};

const isPositive = function (number) {
  return number > 0;
};

const hasAnyOddNumber = function (array) {
  return some(array, isOdd);
};

const oddNumbersPresent = function (array) {
  const lengthOf = mapPlusFilter(array, returnOdd).length;
  return lengthOf;
};

const multiply = function (previousValue, currentValue) {
  return previousValue * currentValue;
};

const join = function (previousValue, currentValue) {
  return previousValue + currentValue;
};

const maxValue = function (previousValue, currentValue) {
  if (previousValue.length > currentValue.length) {
    return previousValue;
  }
  return currentValue;
};

const isUndefined = function (a) {
  return a === undefined;
};

const toUpperCase = function (string) {
  return string.toUpperCase();
};

const isLong = function (element) {
  const elementString = element.length >= 5;
  return elementString ? element : undefined;
};

const calculateHalf = function (number) {
  return number / 2;
};

const isOdd = function (number) {
  return number % 2 === 1;
};

const returnOdd = function (number) {
  if (number % 2 === 1) {
    return number;
  }
};

function checkDecision(message, actual, expected) {
  return areDeepEqual(actual, expected) ? passedMessage(message) :
    failedMessage(message, actual, expected);
}

function failedMessage(message, actual, expected) {
  return console.log("❌" + message, actual, expected);
}

function passedMessage(message) {
  return console.log("✅" + message);
}

function testOfFunctions(message, operation, operand1, operand2, expected) {
  const actual = operation(operand1, operand2);
  const result = checkDecision(message, actual, expected);

  return result;
}

function testOfReduceFunctions(message, operand1, operand2, initialValue, expected,) {
  const actual = reduce(operand1, operand2, initialValue);
  const result = checkDecision(message, actual, expected);

  return result;
}

const testLengthGreaterThan3 = function () {
  testOfFunctions("every element's length is greater than 3", every, ["this", "that"], islengthGreaterThan, true);
};

const testIsGreaterThan100 = function () {
  testOfFunctions("greater than 100 present", some, [1, 150], isGreaterThan100, true);
};

const testAreAllPositive = function () {
  testOfFunctions("all Positive", every, [1, 2, 3, 4], isPositive, true);
  testOfFunctions("all negative", every, [-1, -2, -3, -4], isPositive, false);

};

const testOddNumberPresent = function () {
  testOfFunctions("odd numbers Present", some, [2, 3, 4], isOdd, true)
};

const testCountOddNumbers = function () {
  testOfFunctions("3 odd integers caught!", oddNumbersPresent, [1, 2, 3, 4, 5], returnOdd, 3);
  testOfFunctions("all are even", oddNumbersPresent, [4, 2, 8, 4, 6], returnOdd, 0);
};

const testProductOf = function () {
  testOfReduceFunctions("product of 2 integers", [1, 3], multiply, 1, 3);
};

const testMergedElement = function () {
  testOfReduceFunctions("merged splitted 'absolute", ["ab", "so", "lu", "te"], join, "", "absolute");
};

const testLongestString = function () {
  testOfReduceFunctions("longest string is of length 5", ["hello", "a", "b"], maxValue, "", "hello");
};

const testUppercase = function () {
  testOfFunctions("all characters in uppercase", mapPlusFilter, ["hello", "goodbye"], toUpperCase, ["HELLO", "GOODBYE"]);
};

const test5CharactersCheck = function () {
  testOfFunctions("words of more than five characters", mapPlusFilter, ["impossible", "possible", "no"], isLong, ["impossible", "possible"]);
  testOfFunctions("all words < 5 charactes", mapPlusFilter, ["a", "p", "n"], isLong, []);
};

const testHalfOf = function () {
  testOfFunctions("random four elements", mapPlusFilter, [10, 20, 31], calculateHalf, [5, 10, 15.5]);
};

const testSelectOdds = function () {
  testOfFunctions("first four natural numbers", mapPlusFilter, [1, 2, 3, 4], returnOdd, [1, 3]);
  testOfFunctions("all even numbers", mapPlusFilter, [2, 4, 56], returnOdd, []);
};

const testSquareRoot = function () {
  testOfFunctions("first four natural numbers", mapPlusFilter, [1, 4, 9, 16], Math.sqrt, [1, 2, 3, 4]);
  testOfFunctions("square root of 0", mapPlusFilter, [0], Math.sqrt, [0]);
};

function main() {
  testSquareRoot();
  testSelectOdds();
  testHalfOf();
  test5CharactersCheck();
  testUppercase();
  testLongestString();
  testMergedElement();
  testProductOf();
  testCountOddNumbers();
  testOddNumberPresent();
  testAreAllPositive();
  testIsGreaterThan100();
  testLengthGreaterThan3();
}

main();
