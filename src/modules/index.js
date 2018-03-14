import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import photos from './photo';

export default combineReducers({
  routing: routerReducer,
  photos
});
