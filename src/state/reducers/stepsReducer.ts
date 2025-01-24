import { UPDATE_STEPS } from "../actions";

const initialState = [];

type ActionType = {
  type: string;
  payload: any;
};

const stepsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_STEPS:
      return action.payload;
    default:
      return state;
  }
};

export default stepsReducer;
