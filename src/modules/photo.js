// import fetchPhotos from '../services/unsplash';
import { unsplash } from '../services/unsplash';
import { toJson } from "unsplash-js";
const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type){
    case RECEIVE_PHOTOS:
      const photos = action.result;
      return {
        photos
      }
    default:
      return state;
  }
};

export const getPhotos = ()=> (dispatch) => {
  return (fetchPhotos()
    .then(result => dispatch(receivePhotos(result))
  ));
};

const fetchPhotos = () => {
  return (
    unsplash.photos.getRandomPhoto({count: 6})
    .then(toJson)
    .then(json => {
      return json;
    })
  );
};

const receivePhotos= (result) => {
  return {
    type: RECEIVE_PHOTOS,
    result: result
  };
};
