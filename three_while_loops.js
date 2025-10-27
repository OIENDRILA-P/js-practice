const n=15;
let startingOfNumber=1;
let sum=0;
let product=1;
while(startingOfNumber<=n){
    if(startingOfNumber%2!==0){
       sum=sum+startingOfNumber; 
    }
    startingOfNumber++;
}
console.log("The sum of n odd natural numbers is:",sum);
startingOfNumber=1;
while(startingOfNumber<n){
 if(startingOfNumber%2===0){
    product=product*startingOfNumber;
    }
    startingOfNumber++;
}
console.log("The product of n even natural numbers is:", product);
startingOfNumber=n;
while(startingOfNumber>=1){
    console.log("The descending order of n natural numbers is:",startingOfNumber);
    startingOfNumber--;
}
