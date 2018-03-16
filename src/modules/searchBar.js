import { unsplash } from '../services/unsplash';
import { toJson } from "unsplash-js";
const RECEIVE_SEARCH_RESULT = "RECEIVE_SEARCH_RESULT";
export const CLEAR_SEARCH_RESULT = "CLEAR_SEARCH_RESULT";


const initialState = { result: [] };


export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULT:
      return{
        result: action.result
      };
    case CLEAR_SEARCH_RESULT:
       return{
         result: []
       };
    default:
      return state;
  }
};

export const searchPhotos = (query)=> (dispatch) => {
  return (
    photoSearch(query)
    .then(result => dispatch(receiveSearchResult(result)))
  );
};

const photoSearch = (query) => {
  // debugger
  return (
    unsplash.search.photos(query, 6)
    .then(toJson)
    .then(json => {
      return json;
    })
  );
};

const receiveSearchResult = (result) => {
  // debugger
  return {
    type: RECEIVE_SEARCH_RESULT,
    result: result.results
  };
};
