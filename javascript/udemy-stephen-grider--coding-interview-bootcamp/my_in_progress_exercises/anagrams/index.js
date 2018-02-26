// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//

function formatWord(word) {
  return word.replace(/[^\w]/g,'').toLowerCase();
}

function anagrams(stringA, stringB) {
  const formattedStringA = formatWord(stringA);
  const formattedStringB = formatWord(stringB);
  const sortedA = formattedStringA.split('').sort().join('');
  const sortedB = formattedStringB.split('').sort().join('');

  return sortedA === sortedB;
}

module.exports = anagrams;


// function formatWord(word) {
//   return word.replace(/[^\w]/g,'').toLowerCase();
// }
//
// function getCharMap(word) {
//   let charMap = {};
//   for (letter of word) {
//     charMap[letter] = charMap[letter] + 1 || 1;
//   }
//   return charMap;
// }
//
// function anagrams(stringA, stringB) {
//   const formattedStringA = formatWord(stringA);
//   const formattedStringB = formatWord(stringB);
//   const charMapA = getCharMap(formattedStringA);
//   const charMapB = getCharMap(formattedStringB);
//
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }
//
//   for (let letter in charMapA) {
//     if (charMapA[letter] !== charMapB[letter]) {
//       return false;
//     }
//   }
//
//   return true;
// }
