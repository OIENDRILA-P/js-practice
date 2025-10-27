const limit = 15;
for (let count = 1; count <= limit; count++) {
    let isEven = ((count % 2) === 0) ? "is even" : "is odd";
    console.log(count, isEven);
}
