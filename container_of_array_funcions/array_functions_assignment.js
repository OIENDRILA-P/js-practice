const count = function (initialValue, element) {
  if (element === "blue") {
    initialValue++;
  }

  return initialValue;
};

console.log(["red", "blue", "red", "green", "red", "blue"].reduce(count, 0));

