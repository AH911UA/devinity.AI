import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import resetReducer from "./resetReducer";
import showCalculatorReducer from "./showCalculatorReducer";
import showFeedbackReducer from "./showFeedbackReducer";
import typeDevReducer from "./typeDevReducer";
import typeReducer from "./typeReducer";
import typeChildReducer from "./typeChildReducer";
import designReducer from "./designReducer";
import stepsReducer from "./stepsReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  reset: resetReducer,
  showCalculator: showCalculatorReducer,
  showFeedback: showFeedbackReducer,
  typeDev: typeDevReducer,
  type: typeReducer,
  typeChild: typeChildReducer,
  design: designReducer,
  steps: stepsReducer,
  comment: commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
