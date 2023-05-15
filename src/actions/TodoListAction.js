import * as actionType from "./ActionType";

export const AddData = (data) => {
  return (dispatch) => {
    dispatch({ type: actionType.ADDLIST, payload: data });
  };
};
export const EditData = (data) => {
  return (dispatch) => {
    dispatch({ type: actionType.EDITLIST, payload: data });
  };
};
export const DeleteData = (data) => {
  return (dispatch) => {
    dispatch({ type: actionType.EDITLIST, payload: data });
  };
};
export const CampliteData = (data) => {
  return (dispatch) => {
    dispatch({ type: actionType.EDITLIST, payload: data });
  };
};
// export const Subtract = (data) => {
//   return (dispatch) => {
//     dispatch({ type: actionType.SUBTRACT, payload: data });
//   };
// };
