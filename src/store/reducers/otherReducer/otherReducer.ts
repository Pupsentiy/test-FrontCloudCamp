import {
  ActionTypes,
  TInitialStateOtherReducer,
  TOtherTypeAction,
} from "../../types/store.types";

const initialState: TInitialStateOtherReducer = {
  selected: "Не выбрано",
  stepForm: 0,
  isLoading: false,
  isSuccess: false,
  modalOpen: false,
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
    case ActionTypes.FETCH_DATA:
      return { ...state, isLoading: true };

    case ActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        modalOpen: true,
      };
    case ActionTypes.FETCH_DATA_ERROR:
      return { ...state, isLoading: false, isSuccess: false, modalOpen: true };
    case ActionTypes.CLOSE_MODAL:
      const num = state.isSuccess ? 0 : 2;
      return { ...state, modalOpen: false, stepForm: num };
    default:
      return state;
  }
}
