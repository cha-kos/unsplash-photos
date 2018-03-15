const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

const defaultState = {
  component: null,
  render: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {component: action.component, render: true};
    case CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
};


export const openModal = (component) => {
  return ({
    type: OPEN_MODAL,
    component: component
  });
};

export const closeModal = () => {
  return ({
    type: CLOSE_MODAL
  });
};
