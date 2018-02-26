// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// // Using Splice()
function chunk(array, size) {
  let newArray = [];
  while (array.length > 0) {
    newArray.push(array.splice(0, size));
  }
  return newArray;
}

// Looping through each element and manually adding it to the new array
// function chunk(array, size) {
//   const newArray = [];
//
//   for (let element of array) {
//     const last = newArray[newArray.length - 1];
//
//     if (!last || last.length === size) {
//       newArray.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//
//   return newArray;
// }

// Using slice() with a while() loop
// function chunk(array, size) {
//   let newArray = [];
//   let index = 0;
//   while (index < array.length) {
//     newArray.push(array.slice(index, index + size));
//     index += size;
//   }
//   return newArray;
// }

// Using slice() with a for loop
// function chunk(array, size) {
//   let newArray = [];
//   for (let index = 0; index < array.length; index += size) {
//     newArray.push(array.slice(index, index + size));
//   }
//   return newArray;
// }

// Using splice() with recursion
// function chunk(array, size, result) {
//   result = result || [];
//   if (array.length > 0) {
//     result.push(array.splice(0, size));
//     return chunk(array, size, result);
//   } else {
//     return result;
//   }
// }

module.exports = chunk;
