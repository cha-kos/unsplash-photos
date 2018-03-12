import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import photo from './photo';

export default combineReducers({
  routing: routerReducer,
  photo
});
