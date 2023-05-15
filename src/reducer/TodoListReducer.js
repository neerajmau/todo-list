import * as actionTypes from "../actions/ActionType";
const initialState = { data: [] };

export const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDLIST:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.EDITLIST:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.DELETELIST:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.CAMPLITEDATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
