import { UPDATE_TYPE_CHILD } from "../actions";

const initialState = null;

type ActionType = {
  type: string;
  payload: any;
};

const typeChildReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_TYPE_CHILD:
      return action.payload;
    default:
      return state;
  }
};

export default typeChildReducer;