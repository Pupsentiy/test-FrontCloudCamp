import { Dispatch } from "redux";
import {
  ActionTypes,
  TFormTypeAction,
  TOtherTypeAction,
} from "../types/store.types";

export const setChangeSeleсion = (selected: string) => {
  return (dispatch: Dispatch<TOtherTypeAction>) => {
    dispatch({
      type: ActionTypes.CHANGE_SELECT,
      payload: selected,
    });
  };
};

export const setChangeStep = (step: number) => {
  return (dispatch: Dispatch<TOtherTypeAction>) => {
    dispatch({
      type: ActionTypes.CHANGE_STEP,
      payload: step,
    });
  };
};

export const setAddAdvantages = (text: string) => {
  return (dispatch: Dispatch<TFormTypeAction>) => {
    dispatch({
      type: ActionTypes.ADD_ADVANTAGES,
      payload: text,
    });
  };
};

export const setDeleteAdvantages = (name: string) => {
  return (dispatch: Dispatch<TFormTypeAction>) => {
    dispatch({
      type: ActionTypes.DELETE_ADVANTAGES,
      payload: name,
    });
  };
};
