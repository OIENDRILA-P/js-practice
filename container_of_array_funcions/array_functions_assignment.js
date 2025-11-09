
const count = function (initialValue, element) {
  if (element === "blue") {
    initialValue++;
  }

  return initialValue;
};

function checkDecision(message, actual, expected) {
  return actual === expected ? passedMessage(message) :
    failedMessage(message, actual, expected);
}

function failedMessage(message, actual, expected) {
  return console.log("❌" + message, actual, expected);
}

function passedMessage(message) {
  return console.log("✅" + message);
}

function testQuestion1(description, actual, expected) {
  const result = checkDecision(description, actual, expected);
  return result;
}

const testFestivalRibbonCount = function () {
  console.log("The blue ribbons were cut are: ");
  console.log("-".repeat(15));
  testQuestion1("2 Blue Ribbons were cut", ["red", "blue", "red", "green", "red", "blue"].reduce(count, 0), 2);
};

const main = function () {
  testFestivalRibbonCount();
};

main();
