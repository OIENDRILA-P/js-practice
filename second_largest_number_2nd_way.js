const number1 = 15;
const number2 = 10;
const number3 = 25;
if (((number1 > number2) && (number1 < number3)) || ((number1 < number2) && (number1 > number3))) {
    console.log("Second Largest number=", number1);
}
else if (((number2 > number1) && (number2 < number3)) || ((number2 < number1) && (number2 > number3))) {
    console.log("Second Largest number=", number2);
}
else {
    console.log("Second Largest number=", number3);

}

