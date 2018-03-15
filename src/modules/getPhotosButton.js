// const DISABLED = 'DISABLED';
const LOADING = 'LOADING';
const COMPLETE = 'COMPLETE';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type){
    case LOADING:
      return {
        status: 'loading'
      };
    case COMPLETE:
      return{
        status: 'complete'
      };
    default:
      return state;
  }
};


// export const disabled = () => {
//   return {
//     type: DISABLED
//   };
// };

export const loading = () => {
  return {
    type: LOADING
  };
};

export const loadingComplete = () => {
  return {
    type: COMPLETE
  };
};
