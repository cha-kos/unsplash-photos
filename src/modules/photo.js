import fetchPhotos from '../services/unsplash';
const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

const initialState = {};

export default (state = initialState, action) => {
  debugger
  switch(action.type){
    case RECEIVE_PHOTOS:
      const photos = action.result;
      return {
        ...state,
        photos: photos
      }
    default:
      return state;
  }
};

export const getPhotos = (dispatch) => {
  return (fetchPhotos()
    .then(result => dispatch(receivePhotos(result))
  ));
};

const receivePhotos= (result) => {
  return {
    type: RECEIVE_PHOTOS,
    result: result
  };
};
