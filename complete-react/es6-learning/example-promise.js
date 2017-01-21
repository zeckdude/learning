// // Example of how to use a traditional callback to return success/failure status
// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
//
// // Example of how to use a promise callback to return success/failure status
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function() {
//       // Success
//       resolve(79);
//
//       // Failure
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(
//   // Run on Success
//   function(temp){
//     console.log('promise success', temp);
//   },
//
//   // Run on Failure
//   function(err){
//     console.log('promise error', err);
//   }
// );

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if(typeof a !== 'number' || typeof b !== 'number') {
      reject('These are both not numbers');
    }

    resolve(a+b);
  });
}

function runAddition(a, b) {
  addPromise(a, b).then(
    // Run on Success
    function(sum){
      console.log('The addition equals to', sum);
    },

    // Run on Failure
    function(err){
      console.log('The addition errored:', err);
    }
  );
}

runAddition(5, 7);
runAddition(5, 'nothing');
runAddition(5);
