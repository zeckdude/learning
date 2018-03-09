import libraryData from './LibraryList.json';

// Return the data from the JSON file. In a real app, this would be a JSON response from an API call.
// Each reducer needs to return an array
export default () => libraryData;

// Example:
// console.log(store.getState())
  // outputs:
  // {
  //   libraries: [
  //     {
  //       id: 1,
  //       title: 'webpack',
  //       description: '...'
  //     },
  //     {
  //       ...
  //     }
  //   ]
  // } 
