import { UPDATE_COMMENT } from "../actions";

const initialState = "";

type ActionType = {
  type: string;
  payload: string;
};

const commentReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return action.payload;
    default:
      return state;
  }
};

export default commentReducer;
