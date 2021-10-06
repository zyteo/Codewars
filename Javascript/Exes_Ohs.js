// ZY, 6 Oct 2021
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let strArray = str.toUpperCase().split("");
  let xHolder = [];
  let oHolder = [];
  console.log(strArray);
  //   insert X/Os into array
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === "X") {
      xHolder.push(strArray[i]);
    } else if (strArray[i] === "O") {
      oHolder.push(strArray[i]);
    }
  }

  if (xHolder.length === oHolder.length) {
    return true;
  } else {
    return false;
  }
}
