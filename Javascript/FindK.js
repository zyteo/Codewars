// ZY, 11 Nov 2021
// Find k in list

// Given a list, if k and -k are in the list, return the greatest value of k.
// return 0 otherwise.
array1 = [1, 2, 3, -1]; //1
array2 = [4, 6, 9]; //0
array3 = [4, 6, 9, -3]; //0
array4 = [1, -1, 4, 6, 8, -6]; //6

// Planning
// in a loop, get first digit
// find if negative of that digit inside array. If yes, keep that digit.
// move on to the next digit. If less than first digit, move on.
// continue to end of loop

const checkNumber = (array) => {
  // Not sure if using the every method is allowed, but this is to save time. If not allowed, just comment out these 3 lines, function works just fine without.
  // As long as the array contains all + or all - values, spit out a 0 and we're done. No need to continue the function.
  if (array.every((num) => num > 0) || array.every((num) => num < 0)) {
    return 0;
  }
  // define local variables.
  // I start maxNum at 0 to "save time", i.e. don't have to account for -x if it exists in the array, for the ===if (array[i] > maxNum)=== part
  let maxNum = 0;
  let maxNumOppSign = 0;
  //   now loop through the array
  for (i in array) {
    //  This runs only if the number is greater than maxNum
    if (array[i] > maxNum) {
      // need to save the current max num as previousMaxNum
      let previousMaxNum = maxNum;
      maxNum = array[i];
      maxNumOppSign = -maxNum;
      // check if there exists that number with opposite sign in the array
      if (array.indexOf(maxNumOppSign) == -1) {
        //   So if it doesn't exists, set maxNum back to the previous max number
        maxNum = previousMaxNum;
      }
    }
  }
  return maxNum;
};

console.log(checkNumber(array4));
