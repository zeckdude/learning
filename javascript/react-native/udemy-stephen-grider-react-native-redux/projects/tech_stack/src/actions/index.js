
// Action creator
// An action creator is a function that returns an action
export const selectLibrary = (libraryId) => {
  // Redux action
  // Actions are used to tell a reducer to update in a specific way
  // The type property is required
  return {
    type: 'select_library',
    payload: libraryId
  };
};
