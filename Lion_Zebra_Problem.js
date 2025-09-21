const testCase1 = "L   Z     L Z";
let lion1 = 0;
let zebra1 = 0;
let lCount = 0;
let zCount = 0;
let lion2 = 0;
let lCount2 = testCase1.length;
let zCount2 = 0;
let outputCount1;
let zebra2 = 0;
let min = 99;
let outputCount2;
for (let count = 0; count < testCase1.length; count++) {
    if (testCase1[count] === "L") {
        lion1++;
        lCount = count;
    }
    else if (lion1 >= 1) {
        if (testCase1[count] === "Z") {
            zebra1++;
            zCount = count;
            outputCount1 = (zCount - lCount) - 1;
            if (outputCount1 < min) {
                min = outputCount1;
            }
        }
    }
}

for (let count = testCase1.length - 1; count >= 0; count--) {
    if (testCase1[count] === "L") {
        lion2++;
        lCount2 = count;
    }
    if (lion2 >= 1) {
        if (testCase1[count] === "Z") {
            zebra2++;
            zCount2 = count;
            outputCount2 = (lCount2 - zCount2) - 1;
            if (outputCount2 < min) {
                min = outputCount2;
            }
        }
    }
}
if(min!=99){
    console.log("Input:", testCase1, "output:", min);
}
else{
    console.log("Input:", testCase1, "output:", -1);
    
}
