// ZY, 3 Oct 2021
// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
    if (bool) {
      return "Yes";
    } else if (!bool) {
      return "No";
    } else {
      return "Sorry, boolean values (true/false) only!";
    }
  }