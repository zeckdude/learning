// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
      // '#  '
      // '## '
      // '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(desiredRowsNum) {
  for (let rowNum = 1; rowNum <= desiredRowsNum; rowNum++) {
    let rowChars = '';
    for (let columnNum = 1; columnNum <= desiredRowsNum; columnNum++) {
      rowChars += columnNum <= rowNum ? '#' : ' ';
    }
    console.log(rowChars);
  }
}

// Using recursion
// function steps(desiredRowsNum, rowNum = 1, rowChars = '') {
//   // Base case - If this condition is met, stop the recursive loop
//   // If the current row iteration is greater than the desired number of rows, stop the loop
//   if (rowNum > desiredRowsNum) {
//     return;
//   }
//
//   // If the number of characters in the built string are equal to the number of desired rows, then we know it is ready to print it
//   // Re-run the function and increment the row counter
//   if (desiredRowsNum === rowChars.length) {
//     console.log(rowChars);
//     // The function call must be returned so the rest of the function isn't executed
//     return steps(desiredRowsNum, rowNum + 1);
//   }
//
//   // If the built string hasn't reached the number of row iteration, then another pound sign must be added
//   // If the built string has reached the number of row iteration, then a space sign must be added
//   rowChars += rowChars.length < rowNum ? '#' : ' ';
//
//   // Re-run the function using the same row iteration counter so that the remaining pound or space characters are added
//   steps(desiredRowsNum, rowNum, rowChars);
// }

//
// function steps(numRows) {
//   for (let i = 1; i <= numRows; i++) {
//      console.log('#'.repeat(i).padEnd(numRows))
//   }
// }


module.exports = steps;
