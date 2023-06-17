export enum ActionTypes {
  CHANGE_SELECT = "CHANGE_SELECT",
  CHANGE_STEP = "CHANGE_STEP",
  CLOSE_MODAL = "CLOSE_MODAL",
  FETCH_DATA = "FETCH_DATA",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
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

export interface IFetchDataErrorAction {
  type: ActionTypes.FETCH_DATA_ERROR;
}
export interface IFetchDataAction {
  type: ActionTypes.FETCH_DATA;
}

export interface IFetchDataSuccessAction {
  type: ActionTypes.FETCH_DATA_SUCCESS;
}

export type TCloseModal = {
  type: ActionTypes.CLOSE_MODAL;
};

export type TForm = {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
  advantages: string[];
  radioGroup: number;
  checkbox: number[];
  about: string;
};

export type TAdvantages = {
  advantages: string;
};

export type TInitialStateOtherReducer = {
  selected: string;
  stepForm: number;
  isLoading: boolean;
  isSuccess: boolean;
  modalOpen: boolean;
};

export type TOtherTypeAction =
  | TSelectAction
  | TStepAction
  | IFetchDataErrorAction
  | IFetchDataAction
  | IFetchDataSuccessAction
  | TCloseModal;
