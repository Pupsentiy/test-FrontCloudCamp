import {
  ActionTypes,
  TInitialStateOtherReducer,
  TOtherTypeAction,
} from "../../types/store.types";

const initialState: TInitialStateOtherReducer = {
  selected: "Не выбрано",
  stepForm:0
};

export default function otherReducer(
  state = initialState,
  action: TOtherTypeAction
): TInitialStateOtherReducer {
  switch (action.type) {
    case ActionTypes.CHANGE_SELECT:
      return {
        ...state,
        selected: action.payload,
      };

      case ActionTypes.CHANGE_STEP:
      return {
        ...state,
        stepForm: action.payload,
      };
    default:
      return state;
  }
}
