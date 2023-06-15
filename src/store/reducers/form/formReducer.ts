import {
  ActionTypes,
  TFormTypeAction,
  TInitialStateFormReducer,
} from "../../types/store.types";

const initialState: TInitialStateFormReducer = {
  form: {
    // phoneNumber: "",
    // email: "",
    nickname: "",
    name: "",
    sername: "",
    sex: "",
    advantages: [{ value: "" }, { value: "" }, { value: "" }],
    radioGroup: 0,
    checkbox: [],
    about: "",
  },
};

export default function formReducer(
  state = initialState,
  action: TFormTypeAction
): TInitialStateFormReducer {
  switch (action.type) {
    // case ActionTypes.ADD_ADVANTAGES:
    //   return {
    //     ...state,
    //     advantages: [...state.advantages, action.payload],
    //   };
    // case ActionTypes.DELETE_ADVANTAGES:
    //   return {
    //     ...state,
    //     advantages: state.advantages.filter(
    //       (inputName) => inputName !== action.payload
    //     ),
    //   };
    default:
      return state;
  }
}
