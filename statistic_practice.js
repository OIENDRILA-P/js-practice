const SACHIN_LAST_100_INNINGS = [74, 7, 100, 106, 0, 12, 31, 28, 92, 67, 94, 35, 45,
  14, 100, 122, 82, 34, 56, 52, 12, 32, 91, 32, 8, 7, 15, 62, 34, 88, 7, 100,
  23, 80, 27, 22, 14, 67, 61, 20, 52, 41, 8, 100, 62, 88, 34, 10, 41, 100, 8,
  34, 7, 100, 9, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100, 17,
  34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100];
let numberOfTimes = 0;

function sort(data) {
  const sortedData = data.slice();

  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      numberOfTimes++;
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }

  return sortedData;
}

function meanOf(data) {
  let sum = 0;

  for (let index = 0; index < data.length; index++) {
    sum = sum + data[index];
  }
  return sum / data.length;
}

function standardDeviation(data) {
  let sum = 0;
  const mean = meanOf(data);

  for (let index = 0; index < data.length; index++) {
    const difference = data[index] - mean;

    sum = sum + Math.pow(difference, 2);
  }

  return Math.sqrt(sum / data.length);
}

function medianOf(data) {
  const sortedData = sort(data);
  const indexOfMedian = Math.floor(sortedData.length / 2);

  return sortedData[indexOfMedian];
}

function underline(length) {

  return "-".repeat(length);
}

function composeMessage(median, standardDeviation) {
  const heading = "SCORES OF SACHIN LAST 100 MATCHES";
  
  console.log(`${heading}\n${underline(heading.length)}`);
  console.log("Median of Sachin's last 100 matches :", median);
  console.log("Standard Deviation of Sachin's last 100 matches:", standardDeviation);
  console.log("Number of Times the loop runs", numberOfTimes);
}

function calculateStatistics(data) {
  const median = medianOf(data);
  const deviation = standardDeviation(data);

  return composeMessage(median, deviation);
}

function main() {
  calculateStatistics(SACHIN_LAST_100_INNINGS);
}

main();
