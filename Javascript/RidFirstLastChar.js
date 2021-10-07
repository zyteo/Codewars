// ZY, 7 Oct 2021
// Remove the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  if (typeof str === "string") {
    if (str.length < 2) {
      return str;
    } else {
      let strArr = str.split("");
      strArr.shift();
      strArr.pop();
      return strArr.join("");
    }
  } else {
    return "Sorry, strings only!";
  }
}