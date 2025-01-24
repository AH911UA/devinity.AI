import { RESET_STATE } from "../actions";

const initialState = {
  typeDev: null,
  type: null,
  typeChild: null,
  design: null,
  steps: [],
};

type ActionType = {
  type: string;
};

const resetReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

export default resetReducer;
