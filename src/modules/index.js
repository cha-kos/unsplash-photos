import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import photos from './photo';
import getPhotosButton from './getPhotosButton';

export default combineReducers({
  routing: routerReducer,
  photos,
  getPhotosButton
});
