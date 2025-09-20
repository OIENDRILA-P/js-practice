const firstNumber = 12;
const secondNumber = 17;
const thirdNumber = 17;
const result = (firstNumber > secondNumber) ? (firstNumber > thirdNumber) ? firstNumber : secondNumber : (secondNumber > thirdNumber) ? secondNumber : thirdNumber;
console.log("Largest number is", result);
