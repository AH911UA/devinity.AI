import { UPDATE_SHOW_FEEDBACK } from "../actions";

const initialState = false;

type ActionType = {
  type: string;
  payload: boolean;
};

const showFeedbackReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_SHOW_FEEDBACK:
      return action.payload;
    default:
      return state;
  }
};

export default showFeedbackReducer;
