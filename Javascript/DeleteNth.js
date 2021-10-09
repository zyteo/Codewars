// ZY, 9 Oct 2021
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering.

function deleteNth(arr, n) {
  if (typeof arr === "object") {
    let newList = [];
    for (let i = 0; i < arr.length; i++) {
      // use filter to get an array of arr[i], check if length is < n
      if (newList.filter((element) => element === arr[i]).length < n) {
        newList.push(arr[i]);
      }
    }
    return newList;
  } else {
    return "Sorry, arrays only!";
  }
}
