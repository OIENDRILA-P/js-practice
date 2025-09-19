const limit = 15;
for (let counter = 2; counter < limit; counter++) {
let flag = 0;
for (let count = 2; count < counter; count++) {
    if (counter % count === 0) {
      console.log(counter, "is Composite");
      break;
    }
    flag++;
  }
  if(flag === (counter-2)){
  console.log(counter, "is prime" );  
}
}
