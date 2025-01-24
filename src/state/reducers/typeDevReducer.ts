import { UPDATE_TYPE_DEV } from "../actions";

const initialState = null;

type ActionType = {
  type: string;
  payload: any;
};

const typeDevReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_TYPE_DEV:
      return action.payload;
    default:
      return state;
  }
};

export default typeDevReducer;
