import { UPDATE_TYPE } from "../actions";

const initialState = null;

type ActionType = {
  type: string;
  payload: any;
};

const typeDevReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default typeDevReducer;
