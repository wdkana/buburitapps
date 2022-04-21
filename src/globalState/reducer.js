import { ADD_ITEM } from "./types";

const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
