const testCase1 = "ZLL   ZZZL";
let lion1 = 0;
let zebra1 = 0;
let lCount = 0;
let zCount = 0;
let lion2 = 0;
let lCount2 = testCase1.length;
let zCount2 = 0;
let outputCount1;
let zebra2 = 0;
let outputCount2;
for (let count = 0; count < testCase1.length; count++) {
    if (testCase1[count] === "L") {
        lion1++;
        lCount = count;
    }
    if (lion1 >= 1) {
        if (testCase1[count] === "Z") {
            zebra1++;
        }
        if (zebra1 === 1) {
            zCount = count;
            outputCount1 = (zCount - lCount) - 1;
            if ((outputCount1 === 0)) {
                break;
            }
        }
    }
    else if (lCount === 0 || zCount === 0) {
        outputCount1 = -1;
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
        }
        if (zebra2 === 1) {
            zCount2 = count;
            outputCount2 = (lCount2 - zCount2) - 1;
            if (outputCount2 === 0 && outputCount2 !== -1) {
                console.log("outputCount2", outputCount2);
                break;
            }
        }
    }
    else if (lCount2 === 0 || zCount2 === 0) {
        outputCount2 = -1;
    }
}
if ((outputCount1 < outputCount2) && (outputCount1 != -1) || (outputCount1 > outputCount2 && outputCount2 != 0)) {
    console.log("Input: ", testCase1, "Output: ", outputCount1);
}
else {
    console.log("Input: ", testCase1, "Output: ", outputCount2);
}
