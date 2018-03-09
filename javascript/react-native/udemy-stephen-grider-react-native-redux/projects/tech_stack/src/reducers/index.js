import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Exporting reducers to use in the app
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
