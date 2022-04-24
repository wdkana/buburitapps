import { HANDLE_ITEM, HANDLE_MODAL } from "./types";

export const handleActionItem = (payload) => (dispatch) => {
  return dispatch({
    type: HANDLE_ITEM,
    payload,
  });
};

export const handleActionModal = (payload) => (dispatch) => {
  return dispatch({
    type: HANDLE_MODAL,
    payload: payload,
  });
};
