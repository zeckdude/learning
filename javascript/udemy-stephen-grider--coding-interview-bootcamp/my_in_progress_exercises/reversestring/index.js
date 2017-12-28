// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Using a for loop
// function reverse(str) {
//   var reversed = '';
//   for (var i = str.length-1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// Using a for-of loop
// function reverse(str) {
//   var reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// Using the reduce() method
function reverse(str) {
  return str.split('').reduce((reverseWord, letter) => letter + reverseWord, '');
}

// Using the reduceRight() method
// function reverse(str) {
//   return str.split('').reduceRight((reverseWord, letter) => reverseWord + letter, '');
// }

// Using the Array.prototype.reverse() method
// function reverse(str) {
//   // Using the reverse() method
//   return str.split('').reverse().join('');
// }

module.exports = reverse;
