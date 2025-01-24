import { UPDATE_DESIGN } from "../actions";

const initialState = null;

type ActionType = {
  type: string;
  payload: any;
};

const designReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UPDATE_DESIGN:
      return action.payload;
    default:
      return state;
  }
};

export default designReducer;
