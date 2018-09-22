import {combineReducers} from 'redux';
import isAddingReducer from './isAddingReducer';
import arrWordReducer from './arrWordReducer';
import filterStatusReducer from './filterStatusReducer';


const reducer = combineReducers({
  arrWord: arrWordReducer,
  filterStatus:filterStatusReducer,
  isAdding:isAddingReducer
});

export default reducer;
