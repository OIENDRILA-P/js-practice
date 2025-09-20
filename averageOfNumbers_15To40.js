const startingNumber = 15;
const endingNumber = 40;
let sum = 0;
for (let count = startingNumber; count <= endingNumber; count++) {
    sum = sum + count;
}
const averageOfNumbers = sum / (endingNumber - startingNumber)
console.log("Average of numbers=", averageOfNumbers);
