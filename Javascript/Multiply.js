// ZY, 3 Oct 2021
// Multiply 2 numbers

function multiply(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else {
    return "Sorry, numbers only!";
  }
}