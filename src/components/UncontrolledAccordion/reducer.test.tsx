import {
  UncontrolledAccordionReducer,
  TOGGLE_CONSTANT
} from "./UncontrolledAccordionReducer";
import { useReducer } from "react";
import { StateType } from "./UncontrolledAccordionReducer";

test("reducer should change value to opposite value", () => {
  // data
  const state: StateType = {
    collapsed: false
  };
  //action
  const newState = UncontrolledAccordionReducer(state, {
    type: TOGGLE_CONSTANT
  });
  //expecteion
  expect(newState.collapsed).toBe(true);
});
