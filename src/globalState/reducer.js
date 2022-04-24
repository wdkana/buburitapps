import { HANDLE_ITEM, HANDLE_MODAL } from "./types";

const Reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_ITEM:
      return {
        ...state,
        cart: action.payload,
      };

    case HANDLE_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
