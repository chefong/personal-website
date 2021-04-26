import actions from "./actions";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case actions.SET_THEME:
      return { ...state, theme: action.payload };
    default:
      throw new Error('No action found for: ', type);
  }  
};

export default reducer;
