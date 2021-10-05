// ZY, 5 Oct 2021
// Given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  let sortedNumbers = numbers.split(" ").sort((a, b) => a - b);
  let highestNum = sortedNumbers[parseInt(sortedNumbers.length - 1)];
  let lowestNum = sortedNumbers[0];
  let outputStr = `${highestNum} ${lowestNum}`;
  return outputStr;
}
