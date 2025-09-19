for (let counter = 2; counter <= 15; counter++) {
    let flag = 0;
    let count = 2;
    while (count < counter) {
        if (counter % count === 0) {
            console.log(counter, "is composite");
            break;
        }
        flag++;
        count++;
    }
    if (flag === (counter - 2)) {
        console.log(counter, "is prime");
    }
}
