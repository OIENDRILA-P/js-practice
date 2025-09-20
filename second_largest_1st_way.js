const number1 = 10;
const number2 = 35;
const number3 = 20;
const result = (number1 > number2 && number3 > number2) ? number1 : (number2 > number1 && number3 > number2) ? number2 : (number3 > number1 && number2 > number3) ? number3 : number1;
console.log("Second Largest Number is:", result);
