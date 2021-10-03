// ZY, 3 Oct 2021
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function toJadenCase(string) {
  let arrWords;
  let arrAlphabet;
  let capitalWord;
  let jadenString = [];
  if (typeof string === "string") {
    arrWords = string.split(" ");
    for (let i = 0; i < arrWords.length; i++) {
      arrAlphabet = arrWords[i].split("");
      let firstAlphabet = arrAlphabet[0].toUpperCase();
      arrAlphabet[0] = firstAlphabet;
      capitalWord = arrAlphabet.join("");
      jadenString.push(capitalWord);
    }
    let joinedJadenString = jadenString.join(" ");
    return joinedJadenString;
  } else {
    return "Sorry, strings only!";
  }
}
