// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  // Change String to array, reverse it using reverse() method, change array to String
  // return str.split('').reverse().join('');

  // Use a for loop to loop through each letter in the array backwards and add it to a new string to be returned
  // let reversedString = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   debugger;
  //   reversedString += str[i];
  // }
  // return reversedString;

  // Use a for-of loop
  let reversedString = '';
  for (let letter of str) {
    reversedString = letter + reversedString;
  }
  return reversedString;

  // Change string to array, run a reduce method to create a string in the reverse order
  //return str.split('').reduce((reversedString, letter) => letter + reversedString, '');

  // Change string to array, run the reduceRight() method
  //return str.split('').reduceRight((reversedString, letter) => reversedString + letter, '');
}

reverse('abcd');

module.exports = reverse;
