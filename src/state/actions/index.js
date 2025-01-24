export const RESET_STATE = "RESET_STATE";
export const UPDATE_SHOW_CALCULATOR = "UPDATE_SHOW_CALCULATOR";
export const UPDATE_SHOW_FEEDBACK = "UPDATE_SHOW_FEEDBACK";
export const UPDATE_TYPE_DEV = "UPDATE_TYPE_DEV";
export const UPDATE_TYPE = "UPDATE_TYPE";
export const UPDATE_TYPE_CHILD = "UPDATE_TYPE_CHILD";
export const UPDATE_DESIGN = "UPDATE_DESIGN";
export const UPDATE_STEPS = "UPDATE_STEPS";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export const resetStates = () => ({
  type: RESET_STATE,
});

export const updateShowCalculator = (typeDev) => ({
  type: UPDATE_SHOW_CALCULATOR,
  payload: typeDev,
});

export const updateShowFeedback = (typeDev) => ({
  type: UPDATE_SHOW_FEEDBACK,
  payload: typeDev,
});

export const updateTypeDev = (typeDev) => ({
  type: UPDATE_TYPE_DEV,
  payload: typeDev,
});

export const updateType = (type) => ({
  type: UPDATE_TYPE,
  payload: type,
});

export const updateTypeChild = (type) => ({
  type: UPDATE_TYPE_CHILD,
  payload: type,
});

export const updateDesign = (type) => ({
  type: UPDATE_DESIGN,
  payload: type,
});

export const updateSteps = (type) => ({
  type: UPDATE_STEPS,
  payload: type,
});

export const updateComment = (type) => ({
  type: UPDATE_COMMENT,
  payload: type,
});
