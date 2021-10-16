// ZY, 16 Oct 2021
// Reverse words
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  if (typeof str === "string") {
    let reverseArray = [];
    let finalArray;
    // words is an array containing all the individual words
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
      // wordReversed is the reversed version of each individual word
      let wordReversed = words[i].split("").reverse().join("");
      // reverseArray is the array containing all the reversed words
      reverseArray.push(wordReversed);
    }
    // join the words together and form a string
    finalArray = reverseArray.join(" ");
    return finalArray;
  } else {
    return "Sorry, strings only!";
  }
}