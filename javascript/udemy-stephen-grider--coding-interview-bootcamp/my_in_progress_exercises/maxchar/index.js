// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let maxChar = {char: '', count: 0};

  for (let letter of str) {
    charMap[letter] = charMap[letter] + 1 || 1;
  }

  for (const letter in charMap) {
    const letterCount = charMap[letter];

    if (maxChar.count < letterCount) {
      maxChar = {
        char: letter,
        count: letterCount
      };
    }
  }

  return maxChar.char;
}

module.exports = maxChar;
