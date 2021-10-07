export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED";
type ActionType = {
  type: string;
};
type StateType = {
  collapsed: boolean;
};

export const UncontrolledAccordionReducer = (
  state: StateType,
  action: ActionType
): StateType => {
  console.log("Reducer start");
  console.log(state);
  console.log(action);
  console.log("Reducer END");

  switch (action.type) {
    case TOGGLE_CONSTANT:
      return { ...state, collapsed: !state.collapsed };
    default:
      throw new Error("Bad action type");
  }
  return state;
};
