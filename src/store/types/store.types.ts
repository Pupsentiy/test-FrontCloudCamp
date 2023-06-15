import { Name } from "../../components/infoAboutMeForm/InfoAboutMeForm";

export enum ActionTypes {
  CHANGE_SELECT = "CHANGE_SELECT",
  CHANGE_STEP = "CHANGE_STEP",
  ADD_ADVANTAGES = "ADD_ADVANTAGES",
  DELETE_ADVANTAGES = "DELETE_ADVANTAGES",
}

export type TSelectAction = {
  type: "CHANGE_SELECT";
  payload: string;
};

export type TStepAction = {
  type: "CHANGE_STEP";
  payload: number;
};

export type TAddAdvantagesAction = {
  type: "ADD_ADVANTAGES";
  payload: string;
};
export type TDeleteAdvantagesAction = {
  type: "DELETE_ADVANTAGES";
  payload: string;
};

export type TInitialStateFormReducer = {
  form:TForm
}

export type TForm = {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
  advantages: Array<Name>;
  radioGroup: number;
  checkbox: number[];
  about: string;
};

export type TAdvantages = {
  advantages:string
}

// export type TCheckbox = {
//   id: number;
//   num: number;
// };

export type TInitialStateOtherReducer = {
  selected: string;
  stepForm: number;
};

export type TOtherTypeAction = TSelectAction | TStepAction;
export type TFormTypeAction = TAddAdvantagesAction | TDeleteAdvantagesAction;
