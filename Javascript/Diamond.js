// ZY, 17 Oct 2021
// Give me a Diamond
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
// n = 3
//  *
// ***
//  *
// n = 5
//   *
//  ***
// *****
//  ***
//   *

// Refer: https://dev.to/thepracticaldev/daily-challenge-2-string-diamond-21n2
// Plan : Note that the number of spaces at the first * is 1 for 3, 2 for 5
// This space is equivalent to (n-1)/2, where n = 3,5...
// Once the diamond hits the middle, longest row of *, the order repeats, in reverse direction
// Looking at the first top half of the diamond, minus the longest row of *, there is 1 row for n=3, 2 rows for n=5, 3 rows for n=7... with each increasing row having 1 less space in front of *.
// Can represent the above with a for loop.
// After that is generated, just need to create the middle longest row of *, then add the bottom half

function diamond(n) {
  if (n % 2 === 0 || n < 0) {
    return null;
  } else {
    const SPACE = " ";
    const STAR = "*";
    let diamond = "";
    // for loop to generate the top half of diamond, minus the longest row
    // n is odd number. Want i to increment by 2 to not mess spacing + ensure row has odd number of *
    for (let i = 1; i < n; i += 2) {
      frontSpace = SPACE.repeat((n - i) / 2);
      // create the top half - generate first row, then add the next row, and so on
      diamond = diamond + (frontSpace + STAR.repeat(i) + frontSpace + "\n");
    }
    // now add the middle longest row (which has no spaces), then split the top half of diamond,
    // reverse the top half, and then join them back
    diamond = diamond + STAR.repeat(n) + diamond.split("").reverse().join("");
    return diamond + "\n";
  }
}

// Above method not accepted by codewars since there are spaces at the back. Had to use another code.

function diamond2(n) {
  if (n <= 0 || n % 2 === 0) {
    return null;
  }

  const repeater = (ch) => (n) => ch.repeat(n);
  const spacer = repeater(" ");
  const asterixer = repeater("*");

  let diam = "";
  for (let row = 1; row <= n; row++) {
    const spaces = Math.abs(n - (2 * row - 1));
    const stars = n - spaces;
    diam += `${spacer(spaces / 2)}${asterixer(stars)}\n`;
  }
  return diam;
}

console.log(diamond2(11));
