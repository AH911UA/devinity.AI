import { UPDATE_SHOW_CALCULATOR } from "../actions";

const initialState = false;

type ActionType = {
  type: string;
  payload: boolean;
};

const showCalculatorReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_SHOW_CALCULATOR:
      return action.payload;
    default:
      return state;
  }
};

export default showCalculatorReducer;
