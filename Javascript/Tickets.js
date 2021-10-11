// ZY, 11 Oct 2021
// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

// Plan: peopleInLine input is an array with the $ notes + number of people
// I can create an array to store Vasya's "hand" of notes.
// first note must be 25.
// subsequent notes: if $25, add 25 in hand.
// for $100, need 50 + 25 change, add 100 in hand.
//  for $50, need $25 change, add 50 in hand.
// if all ok, return YES. otherwise return NO.

let hand = [];

function tickets(peopleInLine) {
  // first element in array must be a 25
  if (peopleInLine[0] === 25) {
    hand.push(peopleInLine[0]);
    // subsequently, use a loop for 25/50/100
    for (let i = 1; i < peopleInLine.length; i++) {
      // for $50
      if (peopleInLine[i] === 50) {
        //   if have $25 change, give the $25 away and take the $50
        if (hand.indexOf(25) !== -1) {
          console.log("have 25 change for 50");
          let index = hand.indexOf(25);
          hand.splice(index, 1);
          hand.push(peopleInLine[i]);
        } else {
          return "NO";
          console.log("no 25 change");
        }
      }
      //   for $100
      else if (peopleInLine[i] === 100) {
        //   if have $75 change, give the $75 away and take the $100
        if (hand.indexOf(25) !== -1 && hand.indexOf(50) !== -1) {
          console.log("have 75 change for 100");
          let index = hand.indexOf(25);
          hand.splice(index, 1);
          let index2 = hand.indexOf(50);
          hand.splice(index2, 1);
          hand.push(peopleInLine[i]);
        }
        // or if there is 3 of $25s
        else if (hand.filter((element) => element === 25).length >= 3) {
          console.log("have 75 change for 100");
          let index = hand.indexOf(25);
          hand.splice(index, 1);
          let index2 = hand.indexOf(25);
          hand.splice(index2, 1);
          let index3 = hand.indexOf(25);
          hand.splice(index3, 1);

          hand.push(peopleInLine[i]);
        } else {
          console.log("no 75 change");
          return "NO";
        }
      }
      //   for $25
      else if (peopleInLine[i] === 25) {
        hand.push(peopleInLine[i]);
      }
    }
    return "YES";
  } else {
    return "NO";
  }
}

// tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100]);
// console.log(hand);
console.log(
  tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100])
);

// Codewars test case broken...
