// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Using the reverse() method
function palindrome(str) {
  return str.split('').reverse().join('') === str;
}

// Using the reduce() method
// function palindrome(str) {
//   return str.split('').reduce((reversedWord, letter) => letter + reversedWord, '') === str;
// }

// Using the every() method (This is inefficient since it will loop all the way through after it has already compared all the letters until the middle of the word)
// function palindrome(str) {
//   return str.split('').every((character, index) => character === str[str.length - 1 - index]);
// }

module.exports = palindrome;
